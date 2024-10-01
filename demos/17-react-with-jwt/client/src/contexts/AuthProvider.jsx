import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)

  // Function to handle sign-in
  const signIn = (userData, token, refreshToken) => {
    localStorage.setItem('jwt', token) // Store the access token in local storage
    localStorage.setItem('refreshToken', refreshToken) // Store the refresh token
    console.log(token)
    setUser(userData)
    setToken(token)
    setRefreshToken(refreshToken)
  }

  // Function to handle sign-out
  const signOut = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('refreshToken')
    setUser(null)
    setToken(null)
    setRefreshToken(null)
  }

  // Function to refresh the token
  const refreshTokenRequest = async () => {
    if (!refreshToken) {
      signOut() // No refresh token available, log the user out
      return
    }

    try {
      const response = await axios.post('/api/auth/refresh', { refreshToken })
      const { token: newToken } = response.data

      // Store the new access token and update state
      localStorage.setItem('jwt', newToken)
      setToken(newToken) // Update the token in state
    } catch (error) {
      console.error('Token refresh failed:', error)
      signOut() // Logout if the refresh fails
    }
  }

  // Check localStorage for existing tokens on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt')
    const storedRefreshToken = localStorage.getItem('refreshToken')

    if (storedToken && storedRefreshToken) {
      // Validate the token on the server to check if it's expired
      axios
        .post('/api/auth/validate-token', { token: storedToken })
        .then((response) => {
          const { user } = response.data
          setUser(user)
          setToken(storedToken)
          setRefreshToken(storedRefreshToken)
        })
        .catch((err) => {
          // If token validation fails, attempt to refresh it
          console.error('Token validation failed, attempting refresh', err)
          setRefreshToken(storedRefreshToken) // Make sure the refresh token is set in state
          refreshTokenRequest() // Refresh the token
        })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext)

export default AuthProvider

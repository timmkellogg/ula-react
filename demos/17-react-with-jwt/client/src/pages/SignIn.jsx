import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { user, signIn } = useAuth()
  const navigate = useNavigate() 
  const location = useLocation()
  
  // This is where the user was trying to go before being redirected to sign in
  const from = location.state?.from?.pathname || '/dashboard'
  
  // Redirect the user if they are already logged in
  useEffect(() => {
    if (user) {
      navigate(from) // Move navigation to useEffect to avoid updating during render
    }
  }, [user, from, navigate])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('/api/auth/signin', { username, password })
      const { user, token, refreshToken } = response.data
    
      // Sign in using the tokens
      signIn(user, token, refreshToken)

      // Navigate to the protected page
      navigate('/dashboard')
    } catch (error) {
      console.error('Error signing in', error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='username'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Sign In</button>
    </form>
  )
}

export default SignIn

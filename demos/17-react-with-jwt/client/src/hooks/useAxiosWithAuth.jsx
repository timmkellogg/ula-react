import axios from 'axios'
import { useAuth } from '../contexts/AuthProvider'

const useAxiosWithAuth = () => {
  const { token, refreshTokenRequest, signOut } = useAuth()

  const instance = axios.create()

  // Request interceptor to add the token to the request headers
  instance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  // Response interceptor to handle token expiration and refresh
  instance.interceptors.response.use(
    (response) => response, // Pass the response through if no error
    async (error) => {
      const originalRequest = error.config

      // If the token has expired and it's the first retry
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        // Attempt to refresh the token
        try {
          await refreshTokenRequest() // Refresh the token

          // Retry the original request with the new token
          return instance(originalRequest)
        } catch (refreshError) {
          signOut() // Logout if the refresh fails
          return Promise.reject(refreshError)
        }
      }

      // If the error is something else, reject the error
      return Promise.reject(error)
    }
  )

  return instance
}

export default useAxiosWithAuth

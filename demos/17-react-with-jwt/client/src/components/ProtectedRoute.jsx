import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Jeopardy from './pages/Jeopardy'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import AuthProvider from './contexts/AuthProvider'

import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = () => (
  <>
    <Navbar /> {/* Navbar is always visible */}
    <Outlet /> {/* This renders the matched child route */}
  </>
)

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Use the layout that includes the Navbar
      children: [
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: 'jeopardy',
          element: (
            <ProtectedRoute>
              <Jeopardy />
            </ProtectedRoute>
          ),
        },
        {
          path: 'prot',
          element: (
            <ProtectedRoute>
              <div>also protected</div>
            </ProtectedRoute>
          ),
        },
        {
          path: 'signin',
          element: <SignIn />, // SignIn page is public
        },
        {
          path: '',
          element: <div>Home page</div>
        }
      ],
    },
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App

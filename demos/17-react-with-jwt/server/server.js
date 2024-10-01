require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express()

// In-memory users database (for simplicity)
const users = [
  {
    id: 1,
    username: 'tim',
    password: bcrypt.hashSync('password', 8) // Passwords should be hashed
  }
]

// Middleware to parse JSON bodies
app.use(express.json())

// Secret keys (move to environment variables in production)
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access-secret-key'
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refresh-secret-key'

let refreshTokens = [] // Store refresh tokens here for simplicity

// Function to issue JWTs
const generateTokens = (user) => {
  const token = jwt.sign({ id: user.id, username: user.username }, ACCESS_TOKEN_SECRET, {
    expiresIn: '15m' // Access token expires in 15 minutes
  })

  const refreshToken = jwt.sign({ id: user.id, username: user.username }, REFRESH_TOKEN_SECRET, {
    expiresIn: '1d' // Refresh token expires in 1 day
  })

  refreshTokens.push(refreshToken)
  return { token, refreshToken }
}

// Sign-in route
app.post('/api/auth/signin', (req, res) => {
  const { username, password } = req.body

  // Find user in the database
  const user = users.find((u) => u.username === username)
  if (!user) return res.status(401).json({ message: 'Invalid username or password' })

  // Check if the password is valid
  const isPasswordValid = bcrypt.compareSync(password, user.password)
  if (!isPasswordValid) return res.status(401).json({ message: 'Invalid username or password' })

  // Generate access and refresh tokens
  const { token, refreshToken } = generateTokens(user)

  // Send tokens and user info back to the client
  const userInfo = { id: user.id, username: user.username }
  res.json({
    user: userInfo,
    token,
    refreshToken
  })
})

// Refresh token route
app.post('/api/auth/refresh', (req, res) => {
  const { refreshToken } = req.body

  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ message: 'Refresh token not found, login again' })
  }

  // Verify the refresh token
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid refresh token' })

    // Generate new access token
    const newToken = jwt.sign({ id: user.id, username: user.username }, ACCESS_TOKEN_SECRET, {
      expiresIn: '15m' // New access token expires in 15 minutes
    })

    res.json({ token: newToken })
  })
})

// Middleware to verify the access token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.sendStatus(401)

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// Protected route example
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}. This is a protected route.` })
})

// Token validation route
app.post('/api/auth/validate-token', (req, res) => {
  const { token } = req.body

  // Verify the access token
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' })
    }

    // Token is valid, send the user info back
    const user = { id: decoded.id, username: decoded.username }
    res.json({ user })
  })
})

// Logout route to invalidate refresh tokens
app.post('/api/auth/logout', (req, res) => {
  const { refreshToken } = req.body
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
  res.sendStatus(204) // No content
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

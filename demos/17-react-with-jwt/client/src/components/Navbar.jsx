import { useAuth } from '../contexts/AuthProvider'
import { Navbar, Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ResponsiveAppBar() {
  const { user, signOut } = useAuth()

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React + JWT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link to='/' as={Link}>Home</Nav.Link>

            <Nav.Link to='/dashboard' as={Link}>Dashboard (Protected)</Nav.Link>

            <Nav.Link to='/jeopardy' as={Link}>Jeopardy (Protected)</Nav.Link>

            {user ? <Nav.Link onClick={signOut}>Sign Out</Nav.Link> : <Nav.Link to='signin' as={Link}>Sign In</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ResponsiveAppBar

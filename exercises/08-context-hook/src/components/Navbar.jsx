import { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function ResponsiveAppBar({ user }) {
  const [showUserDropdown, setShowUserDropdown] = useState(false)

  const handleUserDropdownToggle = () => setShowUserDropdown(!showUserDropdown)

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page) => (
              <Nav.Link key={page} href={`#${page.toLowerCase()}`}>
                {page}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <NavDropdown
              title={`Signed in as: ${user.username}`}
              id="basic-nav-dropdown"
              show={showUserDropdown}
              onClick={handleUserDropdownToggle}
            >
              {settings.map((setting) => (
                <NavDropdown.Item key={setting} href={`#${setting.toLowerCase()}`}>
                  {setting}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ResponsiveAppBar

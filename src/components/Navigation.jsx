import React, { Component } from 'react'



import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet, Link} from 'react-router-dom'



export default class Navigation extends Component {
  render() {
    return (

      <>

<Navbar className="navBg" variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as = {Link} to = "/">Notas App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = "/">Home</Nav.Link>
            <Nav.Link as = {Link} to = "create">Notas</Nav.Link>
            <Nav.Link as = {Link} to = "edit/:id">Modificar Nota</Nav.Link>
            <Nav.Link as = {Link} to = "user">Crear Usuario</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet>

      </Outlet>
    </section>
      
      
      
      </>
      
    )
  }
}

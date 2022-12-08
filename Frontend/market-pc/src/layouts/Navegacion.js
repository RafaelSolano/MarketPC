import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";

function Navegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={NavLink} to={"/"}>Market Pc</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to={"/ofertas"}>Ofertas</Nav.Link>
            <Nav.Link as={NavLink} to={"/crearproductos"}>Crear Productos</Nav.Link>
            <Nav.Link as={NavLink} to={"/carritocompras"}>Carrito de compras</Nav.Link>
            <Nav.Link as={NavLink} to={"/producto"}>productoDetalle</Nav.Link>
            <NavDropdown title="Admin" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to={"/signin"}>Iniciar sesion</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/signup"}>Registrarse</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export  {Navegacion};
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" class="brand">
                    <img
                    alt="logo"
                    src="assets/images/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                MundoCanino
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">ALIMENTOS BALANCEADOS</Nav.Link>
                    <Nav.Link href="#action2">SALUD E HIGIENE</Nav.Link>
                    <Nav.Link href="#action3">ENTRETENIMIENTO</Nav.Link>
                    <Nav.Link href="#action4">ACCESORIOS</Nav.Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

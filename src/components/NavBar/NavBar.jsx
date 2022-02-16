import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { Badge } from "react-bootstrap"

const NavBar = () => {
    const { cantidad } = useCartContext()
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" class="brand">
                    <img
                    alt="logo"
                    src="/assets/images/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top w-25"
                    />{' '}
                    <Link to='/'>
                        MundoCanino
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink to={`/category/Balanceados`}>ALIMENTOS BALANCEADOS</NavLink>
                    <NavLink to={`/category/Salud`}>SALUD E HIGIENE</NavLink>
                    <Nav.Link href="#action3">ENTRETENIMIENTO</Nav.Link>
                    <Nav.Link href="#action4">ACCESORIOS</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Link to='/cart'>
                <Badge>{ cantidad() !== 0 && cantidad()}</Badge>
                <CartWidget />                        
                    </Link>  
        </Navbar>
    )
}

export default NavBar

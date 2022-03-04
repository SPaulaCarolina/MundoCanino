import Navbar from "react-bootstrap/Navbar"
import { Button, Container, Form, FormControl, Nav } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" className="w-25">
                    <img
                        alt="logo"
                        src="/assets/images/logo.png"
                        width="40"
                        height="35"
                        className="d-inline-block align-top"
                    />{''}
                    <NavLink to='/' className="d-inline-block align-top nav-link">
                        MundoCanino
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to={`/category/Balanceados`} className="nav-link"> ALIMENTOS BALANCEADOS </NavLink>
                        <NavLink to={`/category/Salud`} className="nav-link"> SALUD E HIGIENE </NavLink>
                        <NavLink to={`/category/Entretenimiento`} className="nav-link"> ENTRETENIMIENTO </NavLink>
                        <NavLink to={`/category/Accesorios`} className="nav-link"> ACCESORIOS </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
            <Form className="d-flex w-25">
                <Link to='/cart' className="">
                    <CartWidget />                        
                </Link> 
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="m-1"
                    aria-label="Search"
                />
                <Button variant="outline-success" size="sm" className="m-1">Buscar</Button>
            </Form>
        </Navbar>
    )
}

export default NavBar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../src/styles/navbar.css'



function NavBar(){

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand  href="/"><img id='paanHutLogo' src='./public/paanhut.webp'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" id='text'>Home</Nav.Link>
                    <Nav.Link href="menu" id='text'>Menu</Nav.Link>
                    <Nav.Link href="order" id='text'>Order</Nav.Link>
                    <Nav.Link href='location' id='text'>Location</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
}

export default NavBar
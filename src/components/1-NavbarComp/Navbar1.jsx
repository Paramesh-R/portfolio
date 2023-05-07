import { Container, Nav, Navbar } from 'react-bootstrap'
const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container fluid>
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end bg-light flex-grow-1 pe-3">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar1
import { Container, Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <img
              src="/logo.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=" logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#">Notes-app</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </nav>
  );
};

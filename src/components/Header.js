import { Container, Navbar, Nav } from "react-bootstrap";
export const Header = () => {
  return (
    <>
      <nav>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand>
              <img
                src={process.env.PUBLIC_URL + "/logo.ico"}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=" logo"
              />
            </Navbar.Brand>
            <Navbar.Brand>Notes-app</Navbar.Brand>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
      </nav>
    </>
  );
};

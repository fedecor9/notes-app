import { Container, Row, Col } from "react-bootstrap";
import { ShowNotes } from "./ShowNotes";
import { SideBar } from "./Sidebar";
import "../App.css";

export const Main = () => {
  return (
    <Container fluid>
      <Row md={12}>
        <Col md={3}>
          <aside>
            <SideBar></SideBar>
          </aside>
        </Col>
        <Col md={9}>
          <main>
            <ShowNotes></ShowNotes>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

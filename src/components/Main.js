import { Container, Row, Col } from "react-bootstrap";
import { ShowNotes } from "./ShowNotes";
import { SideBar } from "./Sidebar";
import "../App.css";

export const Main = () => {
  return (
    <Container fluid className="h-100 flex-grow-1">
      <Row>
        <Col sm={3} className="p-0">
          <SideBar></SideBar>
        </Col>
        <Col sm={9}>
          <ShowNotes></ShowNotes>
        </Col>
      </Row>
    </Container>
  );
};

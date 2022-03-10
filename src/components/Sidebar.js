import { Button, Container, Form, Row } from "react-bootstrap";
import "../App.css";
export const SideBar = () => {
  return (
    <Container className="h-100 py-5">
      <Row>
        <h2> Create new note</h2>
      </Row>
      <Row>
        <Form>
          <Form.Group>
            <Form.Label column="lg">Tittle</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Large text" />
          </Form.Group>
          <Form.Group>
            <Form.Label column="lg">Content</Form.Label>
            <Form.Control
              size="lg"
              rows="5"
              as="textarea"
              placeholder="Large text"
            />
          </Form.Group>
          <div className="text-center">
            <Button className="mt-3">Submit</Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

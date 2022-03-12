import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const ShowNotes = (props) => {
  return (
    <Container>
      <Row md={2} className="g-4 mx-auto my-4">
        {props.cards.map((elem, idx) => (
          <Col md={4} key={idx}>
            <Card
              bg={elem.color.toLowerCase()}
              text={elem.color.toLowerCase() === "light" ? "dark" : "white"}
              className="mb-2 me-3"
            >
              <Card.Header>
                <h2>{elem.tittle}</h2>
              </Card.Header>
              <Card.Body>
                <Card.Text>{elem.text}</Card.Text>
                <Button onClick={() => props.removeCard(idx)} variant="danger">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

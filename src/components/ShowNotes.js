import { Button, Card, Col, Row } from "react-bootstrap";

export const ShowNotes = () => {
  const aux = ["Primary", "Secondary", "Success", "Info", "Light"];
  return (
    <div>
      <Row className="g-4 mx-auto my-4">
        {aux.map((variant, idx) => (
          <Col md={4}>
            <Card
              bg={variant.toLowerCase()}
              key={idx}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              className="mb-2 me-3"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

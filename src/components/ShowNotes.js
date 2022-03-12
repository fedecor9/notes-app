import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const ShowNotes = () => {
  const colors = [
    "Primary",
    "Secondary",
    "Success",
    "Info",
    "Light",
    "Dark",
    "Light",
    "Dark",
  ];
  return (
    <Container className="">
      <Row md={2} className="g-4 mx-auto my-4">
        {colors.map((variant, idx) => (
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
    </Container>
  );
};

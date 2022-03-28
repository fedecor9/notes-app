import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const ShowNotes = ({ cards, removeCard, filter }) => {
  const handleRemove = (id) => {
    const url = `https://notes-app--api.herokuapp.com/api/notes/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      removeCard(id);
    });
  };

  const filterArray = () =>
    cards.filter((elem) =>
      elem.tittle.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <Container>
      <Row md={2} xs={1} className="g-4 mx-auto my-4">
        {cards.length > 0 ? (
          filterArray(cards).map((elem, idx) => (
            <Col lg={4} key={idx}>
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
                  <Button
                    onClick={() => handleRemove(elem.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </Card.Body>
                <Card.Footer>{elem.date}</Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <h2>Empty</h2>
        )}
      </Row>
    </Container>
  );
};
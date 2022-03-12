import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../App.css";
export const SideBar = (props) => {
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

  const randomColor = () => Math.floor(Math.random() * colors.length);

  const emptyCard = {
    tittle: "",
    text: "",
    color: colors[randomColor()],
  };

  const [card, setCard] = useState(emptyCard);

  const handleInput = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const submitCard = () => {
    props.addCard(card);
    setCard(emptyCard);
  };

  return (
    <Container className="py-5">
      <div className="position-fixed">
        <Row>
          <h2> Create new note</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label column="lg">Tittle</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Large text"
                name="tittle"
                value={card.tittle}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column="lg">Content</Form.Label>
              <Form.Control
                size="lg"
                rows="5"
                as="textarea"
                placeholder="Large text"
                name="text"
                value={card.text}
                onChange={handleInput}
              />
            </Form.Group>
            <div className="text-center">
              <Button onClick={submitCard} className="mt-3">
                Submit
              </Button>
            </div>
          </Form>
        </Row>
      </div>
    </Container>
  );
};

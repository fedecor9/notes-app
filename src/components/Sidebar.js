import { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
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
    id: "",
    tittle: "",
    text: "",
    color: colors[randomColor()],
    date: new Date().toDateString(),
  };

  const [card, setCard] = useState(emptyCard);
  const [sendResult, setSendResult] = useState({
    succes: true,
    message: "",
  });

  const handleInput = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const submitCard = () => {
    setSendResult({
      succes: false,
      message: "...Sending",
    });
    fetch(`http://localhost:3005/api/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty("error"))
          return setSendResult({
            succes: true,
            message: data.error,
          });
        setSendResult({
          succes: true,
          message: "Success",
        });
        props.addCard(data);
        setCard(emptyCard);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="py-5">
      <div className="h-100">
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
            <div className="text-center d-grid gap-2">
              <button type="button" onClick={submitCard} className="btn-grad">
                Submit
              </button>
              <h4>{sendResult.message}</h4>
            </div>
          </Form>
        </Row>
      </div>
    </Container>
  );
};

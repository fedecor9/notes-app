import { Form, Row } from "react-bootstrap";
import { useState } from "react";
import { BackBtn } from "./BackBtn";

export const CreateCard = (props) => {
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
    fetch(`https://notes-app--api.herokuapp.com/api/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    })
      .then((response) => response.json())
      .then((data) => {
        //case content missing
        if (data.hasOwnProperty("error"))
          return setSendResult({
            succes: true,
            message: data.error,
          });
        //success
        setSendResult({
          succes: false,
          message: "",
        });
        props.addCard(data);
        setCard(emptyCard);
      })
      .catch((error) => {
        setSendResult({
          succes: true,
          message: "Error: failed to create note",
        });
        console.log(error);
      });
  };

  return (
    <div className="h-100 slide-in">
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
              name="text"
              value={card.text}
              onChange={handleInput}
            />
          </Form.Group>
          <div className="text-center d-grid gap-2">
            <button type="button" onClick={submitCard} className="btn-grad">
              Submit
            </button>
            <h5>{sendResult.message}</h5>
          </div>
        </Form>
      </Row>
      <Row>
        <BackBtn handleMenu={props.handleMenu} />
      </Row>
    </div>
  );
};

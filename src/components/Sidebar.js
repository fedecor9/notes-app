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

  const [filter, setFilter] = useState(props.filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    props.handleFilter(e.target.value);
  };

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
        if (data.hasOwnProperty("error"))
          return setSendResult({
            succes: true,
            message: data.error,
          });
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
    <Container className="py-4">
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
          <label htmlFor="searchBar" className="form-label">
            Filter
          </label>
          <input
            className="form-control"
            id="searchBar"
            onChange={handleFilterChange}
            value={filter}
          />
        </Row>
      </div>
    </Container>
  );
};

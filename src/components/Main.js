import { Container, Row, Col } from "react-bootstrap";
import { ShowNotes } from "./ShowNotes";
import { SideBar } from "./Sidebar";

import "../App.css";
import { useEffect, useState } from "react";

export const Main = () => {
  const [cards, setCards] = useState([]);
  //Card state operations
  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((elem) => elem.id !== id));
  };

  const fetchNotes = async () => {
    try {
      const response = await fetch(`http://localhost:3005/api/notes`);
      if (!response.ok) throw Error(response);
      const notes = await response.json();
      setCards(notes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Container fluid>
      <Row md={12}>
        <Col lg={3} md={4} sm={5}>
          <aside>
            <SideBar addCard={addCard}></SideBar>
          </aside>
        </Col>
        <Col lg={9} md={8} sm={7}>
          <main>
            <ShowNotes cards={cards} removeCard={removeCard}></ShowNotes>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

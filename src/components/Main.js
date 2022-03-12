import { Container, Row, Col } from "react-bootstrap";
import { ShowNotes } from "./ShowNotes";
import { SideBar } from "./Sidebar";
import "../App.css";
import { useState } from "react";

export const Main = () => {
  const initialCards = [
    {
      tittle: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      color: "light",
    },
  ];

  const [cards, setCards] = useState(initialCards);

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const removeCard = (index) => {
    let newArray = cards.slice();
    newArray.splice(index, 1);
    setCards(newArray);
  };

  return (
    <Container fluid>
      <Row md={12}>
        <Col md={3}>
          <aside>
            <SideBar addCard={addCard}></SideBar>
          </aside>
        </Col>
        <Col md={9}>
          <main>
            <ShowNotes cards={cards} removeCard={removeCard}></ShowNotes>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

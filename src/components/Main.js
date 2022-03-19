import { Container, Row, Col } from "react-bootstrap";
import { ShowNotes } from "./ShowNotes";
import { SideBar } from "./Sidebar";
import "../App.css";
import { useEffect, useState } from "react";

const API_ROUTE = "http://localhost:3005/api";

export const Main = () => {
  const initialCards = [
    {
      id: 0,
      tittle: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      color: "light",
      date: new Date().toDateString(),
    },
  ];

  const [cards, setCards] = useState(initialCards);
  //const [newCard, setNewCard] = useState(false);
  const addCard = (card) => {
    card.id = cards.length + 1;
    setCards([...cards, card]);
    //setNewCard(true);
  };

  useEffect(() => {
    console.log("effect");
    fetch(`${API_ROUTE}/notes`)
      .then((res) => {
        if (!res.ok) throw Error(res);
        return res.json();
      })
      .then((data) => {
        setCards((prevState) => [...prevState, ...data]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeCard = (index) => {
    let newArray = cards.slice();
    newArray.splice(index, 1);
    setCards(newArray);
  };

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

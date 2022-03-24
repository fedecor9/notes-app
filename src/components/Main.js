import { Container, Row, Col } from "react-bootstrap";
import { ShowNotes } from "./ShowNotes";
import { SideBar } from "./Sidebar";
import "../App.css";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3005/api";

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
  //Card state operations
  const addCard = (card) => {
    card.id = cards.length + 1;
    setCards([...cards, card]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((elem) => elem.id !== id));
  };

  const fetchNotes = async () => {
    try {
      console.log("Fetching notes");
      const response = await fetch(`${BASE_URL}/notes`);
      if (!response.ok) throw Error(response);
      const notes = await response.json();
      setCards((prevState) => [...prevState, ...notes]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotes().then(() => console.log("Notes Fetched"));
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

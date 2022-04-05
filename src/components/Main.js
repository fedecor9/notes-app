import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ShowNotes } from "./ShowNotes";
import { SideBar } from "./Sidebar";

import "../App.css";
import { useEffect, useState } from "react";

export const Main = () => {
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState("");

  const handleFilter = (text) => {
    setFilter(text);
  };

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
      setLoading(false);
      setCards(notes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Container fluid className="h-100">
      <Row md={12} className="h-100">
        <Col lg={3} md={4} sm={5} className="side-bar">
          <aside className="h-100 ">
            <SideBar
              addCard={addCard}
              handleFilter={handleFilter}
              filter={filter}
            ></SideBar>
          </aside>
        </Col>
        <Col lg={9} md={8} sm={7}>
          <main className="h-100">
            {loading ? (
              <Container className=" d-flex h-100 align-items-center justify-content-center">
                <Spinner animation="border" size="lg" />
              </Container>
            ) : (
              <ShowNotes
                cards={cards}
                filter={filter}
                removeCard={removeCard}
              ></ShowNotes>
            )}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

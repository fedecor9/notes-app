import { useState } from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import { CreateCard } from "./CreateCard";
import { FilterCards } from "./FilterCards";
import { SideMenu } from "./SideMenu";

export const SideBar = (props) => {
  const [options, setOptions] = useState({
    createCard: false,
    filterCards: false,
  });

  const handleMenu = (param) => {
    switch (param) {
      case "createCard":
        setOptions({
          createCard: true,
          filterCards: false,
        });

        break;
      case "filterCard":
        setOptions({
          createCard: false,
          filterCards: true,
        });
        break;
      default:
        setOptions({
          createCard: false,
          filterCards: false,
        });
        break;
    }
  };

  const showMenu = () => {
    switch (true) {
      case options.createCard:
        return <CreateCard handleMenu={handleMenu} addCard={props.addCard} />;
      case options.filterCards:
        return (
          <FilterCards
            handleMenu={handleMenu}
            filter={props.filter}
            handleFilter={props.handleFilter}
          />
        );
      default:
        return <SideMenu handleMenu={handleMenu} />;
    }
  };

  return <Container className="py-4 h-100">{showMenu(options)}</Container>;
};

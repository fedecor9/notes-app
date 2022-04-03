import { Row } from "react-bootstrap";
import { useState } from "react";
import { BackBtn } from "./BackBtn";

export const FilterCards = (props) => {
  const [filter, setFilter] = useState(props.filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    props.handleFilter(e.target.value);
  };

  return (
    <div className="h-100 slide-in ">
      <Row>
        <input
          className="form-control"
          id="searchBar"
          onChange={handleFilterChange}
          value={filter}
          placeholder="Filter"
        />
      </Row>
      <Row>
        <BackBtn handleMenu={props.handleMenu} />
      </Row>
    </div>
  );
};

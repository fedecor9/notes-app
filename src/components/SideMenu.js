import { Row } from "react-bootstrap";

export const SideMenu = ({ handleMenu }) => {
  return (
    <div className="h-100 slide-in">
      <Row>
        <ul>
          <li className="menu-btn" onClick={() => handleMenu("createCard")}>
            <span>Create card</span>
          </li>
          <li className="menu-btn" onClick={() => handleMenu("filterCard")}>
            <span>Filter cards</span>
          </li>
        </ul>
      </Row>
    </div>
  );
};

import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function UserList({ children }) {
  return <ul className="list-group center">{children}</ul>;
}

export function UserListItem({ fName, lName, phone, email, thumbnail }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>
              {fName} {lName}
            </h3>
            <h5>Cell: {phone}</h5>
            <h5>Email: {email}</h5>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
const HomeActionButtons = () => {
  return (
    <div className="homeActionButtons">
      <Container fluid>
        <p className="section-heading">Pick a category to get started</p>
        <Row className="cardsList">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
      </Container>
    </div>
  );
};
export default HomeActionButtons;

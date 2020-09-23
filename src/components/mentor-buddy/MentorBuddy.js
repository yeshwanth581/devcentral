import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageTitleCard from "./PageTitleCard";
import CardContainer from "../commons/CardContainer";
import PageFilterCard from "./PageFilterCard";
const MentorBuddy = () => {
  return (
    <Container fluid>
      <Row className="mentor-buddy cardsList">
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <CardContainer>
            <PageTitleCard />
          </CardContainer>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <CardContainer>
            <PageFilterCard />
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
};
export default MentorBuddy;

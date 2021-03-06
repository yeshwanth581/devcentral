import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageTitleCard from "./PageTitleCard";
import CardContainer from "../commons/CardContainer";
import PageFilterCard from "./PageFilterCard";
import MentorsList from "./MentorsList";
import Footer from "../home/Footer";

const MentorBuddy = () => {
  return (
    <Container fluid>
      <div className="section-heading">Mentor Buddy Program</div>
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
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <CardContainer>
            <MentorsList />
          </CardContainer>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
export default MentorBuddy;

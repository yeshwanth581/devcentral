import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardContainer from "../commons/CardContainer";
import Footer from "../home/Footer";
import InterviewDaysList from "./InterviewDaysList";
import InterviewFilter from "./InterviewFilter";

const Interviews = () => {
  return (
    <Container fluid>
      <div className="section-heading">Interviews</div>
      <Row className="interview cardsList">
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <CardContainer>
            <InterviewFilter />
          </CardContainer>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <CardContainer>
            <InterviewDaysList />
          </CardContainer>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <CardContainer></CardContainer>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
export default Interviews;

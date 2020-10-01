import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

let interviewAvailabilityList = [
  {
    title: "Interview FullStack-JS",
    stack: "ReactJs, Node.js, HTML, CSS"
  }
];

const InterviewListCards = () => {
  const [selectedDay, setSelectedDay] = [""];

  return (
    <>
      <div className="card-heading">Select a day for interview</div>
      <div className="card-description page-description">
        <Row>
          <Col className="center-align">
            <div className="schedule-container">{selectedDay}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default InterviewListCards;

import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

let interviewAvailabilityList = [
  {
    id: 1,
    title: "Interview FullStack-JS",
    stack: "ReactJs, Node.js",
    requests: [
      {
        id: 1,
        email: "requestor1@gmail.com",
        acceptableSchedules: [
          { slot: "17:00", isAccepted: false },
          { slot: "10:00", isAccepted: false },
          { slot: "18:00", isAccepted: false },
          { slot: "12:00", isAccepted: false }
        ],
        interviewerEmail: "interviewer1@gmail.com",
        meetingUrl: "https://meet.jit.si/devcentral/" + uuidv4()
      }
    ]
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

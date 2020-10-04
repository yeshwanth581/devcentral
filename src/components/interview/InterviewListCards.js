import React from "react";
import { Row, Container } from "react-bootstrap";
//import { v4 as uuidv4 } from "uuid";
import InterviewDetailsCard from "./InterviewDetailsCard";

/* let interviewAvailabilityList = [
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
        interviewerEmail: "",
        meetingUrl: "https://meet.jit.si/devcentral/" + uuidv4()
      }
    ]
  },
  {
    id: 2,
    title: "Interview Frontend-React.js",
    stack: "ReactJs",
    requests: [
      {
        id: 1,
        email: "requestor1@gmail.com",
        acceptableSchedules: [
          { slot: "17:00", isAccepted: false },
          { slot: "18:00", isAccepted: false },
          { slot: "19:00", isAccepted: true },
          { slot: "20:00", isAccepted: false }
        ],
        interviewerEmail: "interviewer1@gmail.com",
        meetingUrl: "https://meet.jit.si/devcentral/" + uuidv4()
      },
      {
        id: 2,
        email: "requestor2@gmail.com",
        acceptableSchedules: [
          { slot: "10:00", isAccepted: false },
          { slot: "11:00", isAccepted: false },
          { slot: "12:00", isAccepted: false },
          { slot: "13:00", isAccepted: false }
        ],
        interviewerEmail: "",
        meetingUrl: "https://meet.jit.si/devcentral/" + uuidv4()
      }
    ]
  }
]; */

const InterviewListCards = () => {
  return (
    <Container fluid>
      <div className="section-heading">Interview List</div>
      <Row className="cardsList interviewList">
        <InterviewDetailsCard />
      </Row>
    </Container>
  );
};
export default InterviewListCards;

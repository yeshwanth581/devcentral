import React from "react";
import {
  Row,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
  Badge
} from "react-bootstrap";
import CardContainer from "../commons/CardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

let x = {
  id: 1,
  title: "FullStack-JS",
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
      meetingUrl: "https://meet.jit.si/devcentral/"
    },
    {
      id: 2,
      email: "requestor1@gmail.com",
      acceptableSchedules: [
        { slot: "17:00", isAccepted: false },
        { slot: "10:00", isAccepted: false },
        { slot: "18:00", isAccepted: false },
        { slot: "12:00", isAccepted: false }
      ],
      interviewerEmail: "",
      meetingUrl: "https://meet.jit.si/devcentral/"
    },
    {
      id: 3,
      email: "requestor1@gmail.com",
      acceptableSchedules: [
        { slot: "17:00", isAccepted: false },
        { slot: "10:00", isAccepted: false },
        { slot: "18:00", isAccepted: false },
        { slot: "12:00", isAccepted: false }
      ],
      interviewerEmail: "",
      meetingUrl: "https://meet.jit.si/devcentral/"
    }
    /* ,{
      id: 4,
      email: "requestor1@gmail.com",
      acceptableSchedules: [
        { slot: "17:00", isAccepted: false },
        { slot: "10:00", isAccepted: false },
        { slot: "18:00", isAccepted: false },
        { slot: "12:00", isAccepted: false }
      ],
      interviewerEmail: "",
      meetingUrl: "https://meet.jit.si/devcentral/"
    } */
  ]
};
const InterviewDetailsCard = (props) => {
  const { id, title, stack, requests } = x; //props.request;
  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={3}>
      <CardContainer>
        <div className="interview-card ">
          <div className="interview-header">
            <span className="interview-badge center-align">{"I" + id}</span>
            <span className="title">{title}</span>
            <hr />
          </div>
          <div className="interview-description">
            <div className="description">
              The interview ideally will be an 1hr or less. Plan accordingly.
              Respect each other and be on time. Finally have fun & happy
              learning.
            </div>
            <div className="requests-list center-align">
              {requests.map((i, index) => (
                <OverlayTrigger
                  overlay={<Tooltip>{"Click to view request details"}</Tooltip>}
                >
                  <Badge className="request" variant="info">
                    {"Req: " + i.id}
                  </Badge>
                </OverlayTrigger>
              ))}
              {requests.length < 4 ? (
                <OverlayTrigger
                  overlay={
                    <Tooltip>{"Click to request for a interview"}</Tooltip>
                  }
                >
                  <Badge className="request">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faPlusCircle}
                      size="1x"
                    />
                    <span className="addtext">{" Add "}</span>
                  </Badge>
                </OverlayTrigger>
              ) : null}
            </div>
            <div className="stack-list center-align">
              {stack.split(", ").map((i) => (
                <>
                  {" "}
                  <Badge pill className="tech-badge" variant="warning">
                    {i}
                  </Badge>
                </>
              ))}
            </div>
            <hr />
          </div>
          <div className="interview-footer center-align">
            <Row className="actions">
              <Col>
                {" "}
                <div className="calender success">
                  {/*  <AddToCalendar
                event={event}
                buttonLabel={"Schedule@" + selectedSlot}
              /> */}
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="small-button"
                  >
                    <span className="meeting-link">Join now</span>
                  </Button>
                </div>
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="small-button"
                >
                  <span className="meeting-link">Join now</span>
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </CardContainer>
    </Col>
  );
};
export default InterviewDetailsCard;

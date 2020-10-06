import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
  DropdownButton,
  Dropdown,
  Form,
  Badge
} from "react-bootstrap";
import CardContainer from "../commons/CardContainer";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
        { slot: "18:00", isAccepted: true },
        { slot: "12:00", isAccepted: false }
      ],
      interviewerEmail: "interview2@gmail.com",
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
    } /*  ,
    {
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
let slotsList = [
  {
    label: "10:00",
    value: "10:00"
  },
  {
    label: "11:00",
    value: "11:00"
  },
  {
    label: "12:00",
    value: "12:00"
  },
  {
    label: "13:00",
    value: "13:00"
  },
  {
    label: "14:00",
    value: "14:00"
  },
  {
    label: "15:00",
    value: "15:00"
  },
  {
    label: "16:00",
    value: "16:00"
  },
  {
    label: "17:00",
    value: "17:00"
  },
  {
    label: "18:00",
    value: "18:00"
  },
  {
    label: "19:00",
    value: "19:00"
  },
  {
    label: "20:00",
    value: "20:00"
  }
];

const InterviewDetailsCard = (props) => {
  const { id, title, stack, requests } = x; //props.request;

  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [action, setAction] = useState(null);

  const [selectedSlots, setSelectedSlots] = useState("Select upto 4 slots");

  let slotDropDownitems = slotsList.map((techData) => (
    <Dropdown.Item
      key={techData.value}
      className={
        selectedSlots.includes(techData.value)
          ? "dropdown-item dropdown-item-selected"
          : "dropdown-item"
      }
      onClick={() => setSlotsList(techData.value)}
    >
      {techData.value}
    </Dropdown.Item>
  ));

  const setSlotsList = (val) => {
    if (selectedSlots.split(", ").includes(val)) {
      let slotsList = selectedSlots.split(", ").filter((i) => i !== val);
      if (slotsList.length === 0) {
        slotsList = ["Select upto 4 slots"];
      }
      setSelectedSlots(slotsList.join(", "));
    } else {
      if (selectedSlots.split(", ").length < 4) {
        let slotsList = [...selectedSlots.split(", "), val].filter(
          (i) => i !== "Select upto 4 slots"
        );
        setSelectedSlots(slotsList.join(", "));
      }
    }
  };

  const addRequestDetails = (
    <div className="add-request">
      <div className="email">
        <Form.Control size="sm" type="email" placeholder="Requestor email" />
      </div>
      <div className="meeting-url">
        <Form.Control
          size="sm"
          type="text"
          readOnly
          placeholder="Meeting Url"
          value={"https://meet.jit.si/devcentral/" + uuidv4()}
        />
      </div>
      <div className="slots">
        <DropdownButton
          id="dropdown"
          className="add-slots"
          size="sm"
          title={selectedSlots}
        >
          {slotDropDownitems}
        </DropdownButton>
      </div>
    </div>
  );

  const acceptRequestDetails = selectedRequestId ? (
    <div className="accept-request">
      <div className="email">
        <Form.Control size="sm" type="email" placeholder="Acceptor email" />
      </div>
      <div className="meeting-url">
        <Form.Control
          size="sm"
          type="text"
          readOnly
          placeholder="Meeting Url"
          value={selectedRequestId.meetingUrl}
        />
      </div>
      <div className="slots center-align">
        {selectedRequestId.acceptableSchedules.map((i, index) => (
          <Badge
            className="time-slots"
            onClick={() => {
              let schedules = selectedRequestId.acceptableSchedules;
              schedules = schedules.map((sc, sci) =>
                sci === index
                  ? { ...sc, isAccepted: true }
                  : { ...sc, isAccepted: false }
              );
              setSelectedRequestId({ ...i, acceptableSchedules: schedules });
            }}
            variant={i.isAccepted ? "success" : "info"}
          >
            {i.slot}
          </Badge>
        ))}
      </div>
    </div>
  ) : null;

  const viewRequestDetails = selectedRequestId ? (
    <div className="view-request">
      <div className="email">
        {selectedRequestId.email}
        <br />
        {selectedRequestId.interviewerEmail}
      </div>
      <div className="meeting-url">
        <Row>
          <Col>
            <Button
              variant="info"
              size="sm"
              block
              onClick={() => setAction("VIEW_DETAILS")}
              className="small-button"
            >
              <span className="meeting-link">Copy meeting info</span>
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-success"
              size="sm"
              block
              onClick={() => setAction("VIEW_DETAILS")}
              className="small-button"
            >
              <span className="meeting-link">
                {"Calendar : " +
                  selectedRequestId.acceptableSchedules.find(
                    (i) => i.isAccepted
                  ).slot}
              </span>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  ) : null;

  const descriptionDetails = (
    <div>
      <div className="description">
        The interview ideally will be an 1hr or less. Plan accordingly. Respect
        each other and be on time. Finally have fun & happy learning.
      </div>
      <div className="requests-list center-align">
        {requests.map((i, index) => (
          <OverlayTrigger
            overlay={
              <Tooltip>
                {"Click to view " +
                  (i.interviewerEmail ? "accepted " : "pending ") +
                  "request details"}
              </Tooltip>
            }
          >
            <Badge
              className="request"
              onClick={() => setSelectedRequestId(i)}
              variant={i.interviewerEmail ? "success" : "info"}
            >
              {"Req: " + i.id}
            </Badge>
          </OverlayTrigger>
        ))}
      </div>
    </div>
  );

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
            {action === "REQUEST_INTERVIEW"
              ? addRequestDetails
              : action === "ACCEPT_REQUEST"
              ? acceptRequestDetails
              : action === "VIEW_DETAILS"
              ? viewRequestDetails
              : descriptionDetails}
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
          </div>
          <div className="interview-footer">
            <hr />
            <Row className="actions">
              <Col>
                {" "}
                <div className="calender success">
                  {/*  <AddToCalendar
                event={event}
                buttonLabel={"Schedule@" + selectedSlot}
              /> selectedRequestId.inter*/}
                  {![
                    "REQUEST_INTERVIEW",
                    "ACCEPT_REQUEST",
                    "VIEW_DETAILS"
                  ].includes(action) ? (
                    <Button
                      variant={
                        requests.length > 3 ? "primary disabled" : "primary"
                      }
                      size="sm"
                      block
                      disabled={
                        requests.length > 3 || action === "REQUEST_INTERVIEW"
                      }
                      className="small-button"
                      onClick={() => setAction("REQUEST_INTERVIEW")}
                    >
                      <span className="meeting-link">Add Interview</span>
                    </Button>
                  ) : (
                    <Button
                      variant="outline-dark"
                      size="sm"
                      block
                      onClick={() => setAction("")}
                      className="small-button"
                    >
                      <span className="meeting-link">Go back</span>
                    </Button>
                  )}
                </div>
              </Col>
              <Col>
                {selectedRequestId && !action ? (
                  selectedRequestId.interviewerEmail ? (
                    <Button
                      variant="outline-success"
                      size="sm"
                      block
                      onClick={() => setAction("VIEW_DETAILS")}
                      className="small-button"
                    >
                      <span className="meeting-link">View Details</span>
                    </Button>
                  ) : (
                    <Button
                      variant="outline-success"
                      size="sm"
                      block
                      onClick={() => setAction("ACCEPT_REQUEST")}
                      className="small-button"
                    >
                      <span className="meeting-link">Accept request</span>
                    </Button>
                  )
                ) : (selectedRequestId &&
                    ["ACCEPT_REQUEST", "VIEW_DETAILS"].includes(action)) ||
                  action === "REQUEST_INTERVIEW" ? (
                  <Button
                    variant="outline-success"
                    size="sm"
                    block
                    onClick={() => setAction("")}
                    className="small-button"
                  >
                    <span className="meeting-link">Submit</span>
                  </Button>
                ) : null}
              </Col>
            </Row>
          </div>
        </div>
      </CardContainer>
    </Col>
  );
};
export default InterviewDetailsCard;

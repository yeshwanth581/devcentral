import React, { useState } from "react";
import {
  Col,
  Badge,
  Row,
  Tooltip,
  OverlayTrigger,
  Button
} from "react-bootstrap";
import CardContainer from "../commons/CardContainer";

const MentorDetailsCard = (props) => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const {
    name,
    techStack,
    paths,
    githubUrl,
    meetingUrl,
    alternative_meetingUrl,
    message_from_mentor,
    schedule,
    rating
  } = props.details;

  const onHoverDescription = (
    <div className="schedule-container">
      {schedule.map((i, index) => (
        <OverlayTrigger key={index}
          overlay={<Tooltip>{"Click to view slots for " + i.day}</Tooltip>}
        >
          <span
            className={
              selectedDay === i.day
                ? "schedule-badge center-align selected-day"
                : "schedule-badge center-align"
            }
            onClick={() => {
              setSlots(i.slots);
              setSelectedDay(i.day);
            }}
          >
            {i.day.substr(0, 2).toUpperCase()}
          </span>
        </OverlayTrigger>
      ))}
      <div className="slots">
        {slots.map((i) => (
          <>
            <Badge
              className="timeslot"
              onClick={() => (i.isBooked ? null : setSelectedSlot(i.time))}
              variant={!i.isBooked ? "success" : "danger"}
            >
              {!i.isBooked ? i.time : <strike> {i.time}</strike>}
            </Badge>{" "}
          </>
        ))}
      </div>
      <Row className="actions">
        <Col>
          {" "}
          {selectedSlot ? (
            <Button
              variant="outline-success"
              size="sm"
              className="small-button"
            >
              Schedule@{selectedSlot}
            </Button>
          ) : null}
        </Col>
        <Col>
          <Button variant="outline-primary" size="sm" className="small-button">
            <a href={meetingUrl} className="meeting-link">
              Join now
            </a>
          </Button>
        </Col>
      </Row>
    </div>
  );

  const description = (
    <>
      <div className="mentor-message">
        {message_from_mentor + (message_from_mentor.length > 190 ? " ..." : "")}
      </div>
    </>
  );

  /* const clearSelections = () => {
    setShowSchedule(false);
    setSlots([]);
    setSelectedSlot("");
  }; */

  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={3}>
      <CardContainer>
        <div className="mentor-card ">
          <div className="mentor-header">
            <span className="mentor-badge center-align">
              {name.toUpperCase()[0]}
            </span>
            <sup className="chip">{rating}</sup>
            <a
              href={githubUrl}
              className="name"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
            <hr />
          </div>
          <div
            className="mentor-description"
            onMouseEnter={() => setShowSchedule(true)}
            onMouseLeave={() => setShowSchedule(false)}
          >
            {showSchedule ? onHoverDescription : description}
            <hr />
          </div>
          <div className="mentor-footer center-align">
            <div>
              {[...paths, ...techStack].map((i) => (
                <>
                  {" "}
                  <Badge pill className="tech-badge" variant="warning">
                    {i}
                  </Badge>
                </>
              ))}
            </div>
          </div>
        </div>
      </CardContainer>
    </Col>
  );
};
export default MentorDetailsCard;

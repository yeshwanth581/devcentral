import React, { useState, useEffect } from "react";
import {
  Col,
  Badge,
  Row,
  Tooltip,
  OverlayTrigger,
  Button
} from "react-bootstrap";
import CardContainer from "../commons/CardContainer";
import AddToCalendar from "react-add-to-calendar";
import moment from "moment";

const MentorDetailsCard = (props) => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const [event, setEvent] = useState({
    title: "DevCentral-Mentor/Buddy meetup",
    description: "This is the event to mentor a buddy on the requested stack",
    location: "Online",
    starTimetTime: "2020-10-02T00:00:00+05:30",
    endTime: "2020-10-02T00:00:00+05:30"
  });

  const {
    name,
    techStack,
    paths,
    githubUrl,
    meetingUrl,
    //alternative_meetingUrl,
    message_from_mentor,
    schedule,
    rating
  } = props.details;

  useEffect(() => {
    if (selectedSlot) {
      let selectedSlotDay = schedule.find((i) => i.day === selectedDay).date;
      selectedSlotDay = moment(selectedSlotDay, "DD/MM/YYYY").format(
        "YYYY-MM-DDTHH:mm:ssZ"
      );
      console.log(selectedSlotDay);
      let slotTime = selectedSlot.split(".")[0] * 1;
      let startTime = moment(selectedSlotDay)
        .startOf("day")
        .add(slotTime, "hours")
        .format("YYYY-MM-DDTHH:mm:ssZ");

      let endTime = moment(selectedSlotDay)
        .startOf("day")
        .add(slotTime + 1, "hours")
        .format("YYYY-MM-DDTHH:mm:ssZ");

      setEvent({
        ...event,
        startTime,
        endTime,
        description:
          "This is the event to mentor a buddy on the requested stack. " +
          meetingUrl
      });
    }
  }, [selectedSlot]);

  const onHoverDescription = (
    <div className="schedule-container">
      {schedule.map((i, index) => (
        <OverlayTrigger
          key={index}
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
              setSelectedSlot("");
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
            <div className="calender success">
              <AddToCalendar
                event={event}
                buttonLabel={"Schedule@" + selectedSlot}
              />
            </div>
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

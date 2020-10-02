import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import AddToCalendar from "react-add-to-calendar";

let dayMapper = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let event = {
  title: "Sample Event",
  description: "This is the sample event provided as an example only",
  location: "Hyderabad, Telangana",
  startTime: "2020-10-02T20:15:00+05:30",
  endTime: "2020-10-02T21:45:00+05:30"
};

const next7Days = new Array(7).fill(0).map((i, ind) => {
  let dateVal = new Date(new Date().setDate(new Date().getDate() + ind));
  return { day: dayMapper[dateVal.getDay()], date: dateVal.getDate() };
});

const InterviewDaysList = () => {
  const [selectedDay, setSelectedDay] = [""];

  const daysSchedule = next7Days.map((i, index) => (
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
          setSelectedDay(i.day);
        }}
      >
        {i.date}
      </span>
    </OverlayTrigger>
  ));

  return (
    <>
      <div className="card-heading">
        <div className="calender">
          <AddToCalendar event={event} buttonLabel="Put on my calendar" />
        </div>
        Select a day for interview
      </div>
      <div className="card-description page-description">
        <Row>
          <Col className="center-align">
            <div className="schedule-container">{daysSchedule}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default InterviewDaysList;

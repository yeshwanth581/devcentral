import React, { useState } from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

let dayMapper = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const next7Days = new Array(7).fill(0).map((i, ind) => {
  let dateVal = new Date(new Date().setDate(new Date().getDate() + ind));
  return { day: dayMapper[dateVal.getDay()], date: dateVal.getDate() };
});

const InterviewDaysList = () => {
  const [selectedDay, setSelectedDay] = useState("");

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
      <div className="card-heading">Select a day for interview</div>
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

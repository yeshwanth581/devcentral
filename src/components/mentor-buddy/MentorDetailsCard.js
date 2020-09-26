import React, { useState } from "react";
import { Col, Badge, Nav } from "react-bootstrap";
import CardContainer from "../commons/CardContainer";
let x = {
  name: "Mentor1",
  techStack: ["Javascript", "React.js", "Node.js", "CSS", "HTML", "Git"],
  paths: ["Frontend"],
  githubUrl: "http://github.com/yeshwanth581",
  meetingUrl: "https://meet.jit.si/devcentral_mentor_yeshwanth581",
  alternative_meetingUrl: "",
  message_from_mentor: "Please join using my zoom meeting link",
  schedule: [
    {
      day: "Monday",
      slots: [
        { time: "17.00", isBooked: false },
        { time: "18.00", isBooked: true },
        { time: "19.00", isBooked: false }
      ]
    },
    {
      day: "Saturday",
      slots: [
        { time: "17.00", isBooked: false },
        { time: "18.00", isBooked: true },
        { time: "19.00", isBooked: false }
      ]
    }
  ],
  rating: 3.5
};

const MentorDetailsCard = (props) => {
  const [showSchedule, setShowSchedule] = useState(false);
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
    <div>
      gdg<p>gfdfg</p>
    </div>
  );

  const description = (
    <>
      <div className="mentor-message">{message_from_mentor}</div>
      <div>
        {paths.map((i) => (
          <>
            {" "}
            <Badge className="path-badge" pill variant="warning">
              {i}
            </Badge>
          </>
        ))}
      </div>
    </>
  );

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
          <div className="mentor-footer">
            <div>
              {techStack.map((i) => (
                <>
                  {" "}
                  <Badge pill className="tech-badge" variant="info">
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

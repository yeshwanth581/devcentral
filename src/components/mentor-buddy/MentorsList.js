import React from "react";
import { Container, Row } from "react-bootstrap";
import MentorDetailsCard from "./MentorDetailsCard";

let mentorData = [
  {
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
  },
  {
    name: "Mentor2",
    techStack: ["Java", "React.js", "Spring Boot", "CSS", "HTML", "Git"],
    paths: ["Frontend", "Backend", "Fullstack"],
    githubUrl: "http://github.com/yeshwanth581",
    meetingUrl: "https://meet.jit.si/devcentral_mentor_yeshwanth581",
    alternative_meetingUrl: "",
    message_from_mentor: "Please join using my jitsi meeting link",
    schedule: [
      {
        day: "Sunday",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      },
      {
        day: "Friday",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      }
    ],
    rating: 2.5
  }
];

const MentorsList = () => {
  const mentorCardsList = mentorData.map((i) => (
    <MentorDetailsCard details={i} />
  ));
  return (
    <Container fluid>
      <div className="section-heading">Mentors List</div>
      <Row className="cardsList mentorList">
        {mentorCardsList}
        {mentorCardsList}
        {mentorCardsList}
        {mentorCardsList}
        {mentorCardsList}
      </Row>
    </Container>
  );
};
export default MentorsList;

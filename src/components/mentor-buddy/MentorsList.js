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
    message_from_mentor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit nulla, euismod at erat id, vestibulum pellentesque ligula. Sed feugiat a ante sed placerat. Sed non leo erat. Morbi vehicula erat tortor, vitae elementum enim aliquam vel. Nulla blandit, justo non varius euismod, tortor magna ornare erat, a cursus leo nisl non justo. Fusce id ligula non quam efficitur interdum. Vestibulum mattis rhoncus dui, at porta neque sodales sed. Quisque sit amet magna semper, molestie arcu rhoncus, sodales arcu. Mauris erat purus, aliquam id laoreet in, cursus vitae erat. Duis libero purus, sodales quis egestas at, lobortis porttitor ligula. In quis mi at enim feugiat iaculis quis vitae tortor",
    schedule: [
      {
        day: "Monday",
        date: "05/10/2020",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      },
      {
        day: "Saturday",
        date: "10/10/2020",
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
    message_from_mentor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit nulla, euismod at erat id, vestibulum pellentesque ligula. Sed feugiat a ante sed placerat. Sed non leo erat. Morbi vehicula erat tortor, vitae elementum enim aliquam vel. Nulla blandit, justo non varius euismod, tortor magna ornare erat, a cursus leo nisl non justo. Fusce id ligula non quam efficitur interdum. Vestibulum mattis rhoncus dui, at porta neque sodales sed. Quisque sit amet magna semper, molestie arcu rhoncus, sodales arcu. Mauris erat purus, aliquam id laoreet in, cursus vitae erat. Duis libero purus, sodales quis egestas at, lobortis porttitor ligula. In quis mi at enim feugiat iaculis quis vitae tortor",
    schedule: [
      {
        day: "Sunday",
        date: "4/10/2020",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      },
      {
        day: "Saturday",
        date: "10/10/2020",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      },
      {
        day: "Wednesday",
        date: "7/10/2020",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      },
      {
        day: "Tuesday",
        date: "6/10/2020",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      },
      {
        day: "Monday",
        date: "5/10/2020",
        slots: [
          { time: "17.00", isBooked: false },
          { time: "18.00", isBooked: true },
          { time: "19.00", isBooked: false }
        ]
      },
      {
        day: "Friday",
        date: "3/10/2020",
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

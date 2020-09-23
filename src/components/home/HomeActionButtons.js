import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../commons/Card";
const HomeActionButtons = () => {
  const actionList = [
    {
      heading: "Learn",
      description:
        "List of learning paths which has a step by step guide to become a master of your stack.",
      tags: ["FullStack", "FE", "BE", "Devops", "AI/ML"],
      path: "/learn"
    },
    {
      heading: "Mentor/Buddy",
      description:
        "Find or become a mentor. Buddy gets guided by a mentor to become a better developer.",
      tags: ["Mentor", "Trainee", "Help each other"],
      path: "/mentor-buddy"
    },
    {
      heading: "Interview",
      description:
        "Give a mock interview with experts and peers. Get your constructive feedback and improve.",
      tags: ["Tech Interview", "Coding", "Design"],
      path: "/interviews"
    }
  ];

  const actionItems = actionList.map((i) => (
    <Card
      key={i.heading}
      heading={i.heading}
      description={i.description}
      path={i.path}
      tags={i.tags}
    />
  ));

  return (
    <div className="homeActionButtons">
      <Container fluid>
        <p className="section-heading">Pick a category to get started</p>
        <Row className="cardsList">{actionItems}</Row>
      </Container>
    </div>
  );
};
export default HomeActionButtons;

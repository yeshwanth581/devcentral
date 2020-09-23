import React, { useState, useEffect } from "react";
import { Col, Row, DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const pathsList = [
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "FullStack", value: "FullStack" },
  { label: "Devops", value: "Devops" },
  { label: "AI/ML", value: "AI/ML" }
];

const techList = [
  { label: ["FullStack", "Frontend"], value: "JS" },
  { label: ["FullStack", "Frontend"], value: "HTML" },
  { label: ["FullStack", "Frontend"], value: "CSS" },
  { label: ["FullStack", "Frontend"], value: "React.js" },
  { label: ["FullStack", "Frontend"], value: "Angular" },
  { label: ["FullStack", "Frontend"], value: "Vue.js" },
  { label: ["FullStack", "Backend"], value: "Node.js" },
  { label: ["FullStack", "Backend"], value: "Java" },
  { label: ["FullStack", "Backend"], value: "Spring Boot" },
  { label: ["FullStack", "Backend"], value: "Spring" },
  { label: ["Devops"], value: "Jenkins" },
  { label: ["Devops"], value: "Docker" },
  { label: ["Devops"], value: "Kubernetes" }
];

const PageFilterCard = () => {
  const [path, setPath] = useState("Select a path");
  const [tech, setTech] = useState("Select a tech");

  const pathDropDownitems = pathsList.map((pathData) => {
    return (
      <Dropdown.Item
        key={pathData.value}
        className="path-dropdown-item"
        onClick={() => setPath(pathData.value)}
      >
        {pathData.label}
      </Dropdown.Item>
    );
  });
  let techDropDownitems = techList.map((techData) =>
    techData.label.includes(path) ? (
      <Dropdown.Item
        key={techData.value}
        className="path-dropdown-item"
        onClick={() => setTech(techData.value)}
      >
        {techData.value}
      </Dropdown.Item>
    ) : null
  );

  useEffect(() => {
    console.log("path changed");
    setTech("Select a tech");
  }, [path]);

  return (
    <>
      <div className="card-heading">Search for a mentor</div>
      <div className="card-description page-description">
        <Row>
          <Col className="vertical_line">
            <DropdownButton id="dropdown" size="sm" title={path}>
              {pathDropDownitems}
            </DropdownButton>
          </Col>

          <Col className="center-align">
            <DropdownButton
              id="dropdown"
              size="sm"
              disabled={path.includes("Select a path") ? true : false}
              title={tech}
            >
              {techDropDownitems}
            </DropdownButton>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default PageFilterCard;

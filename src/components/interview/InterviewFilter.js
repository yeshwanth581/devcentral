import React, { useState, useEffect } from "react";
import { Col, Row, DropdownButton, Dropdown } from "react-bootstrap";

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

const InterviewFilter = () => {
  const [path, setPath] = useState("Select a path");
  const [tech, setTech] = useState("Select upto 2 techs");

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
        className={
          tech.split(", ").includes(techData.value)
            ? "dropdown-item dropdown-item-selected"
            : "dropdown-item"
        }
        onClick={() => setSelectedTech(techData.value)}
      >
        {tech.split(", ").includes(techData.value) ? (
          <>{techData.value}</>
        ) : (
          techData.value
        )}
      </Dropdown.Item>
    ) : null
  );

  let setSelectedTech = (val) => {
    console.log(tech.split(", "), val, tech.split(", ").includes(val));
    if (tech.split(", ").includes(val)) {
      let techList = tech.split(", ").filter((i) => i !== val);
      if (techList.length === 0) {
        techList = ["Select upto 2 techs"];
      }
      setTech(techList.join(", "));
    } else {
      if (tech.split(", ").length < 2) {
        let techList = [...tech.split(", "), val].filter(
          (i) => i !== "Select upto 2 techs"
        );
        setTech(techList.join(", "));
      }
    }
  };

  useEffect(() => {
    setTech("Select upto 2 techs");
  }, [path]);

  return (
    <>
      <div className="card-heading">Search tech stack for interview</div>
      <div className="card-description page-description interview-filter">
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
export default InterviewFilter;

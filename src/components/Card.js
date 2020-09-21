import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const { heading, description, tags = [], path } = props;
  const history = useHistory();

  const tagsList = tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ));

  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={4}>
      <div
        key={heading}
        className="card-container"
        onClick={() => history.push(path)}
      >
        <div className="card-heading">{heading}</div>
        <div className="card-description">{description}</div>
        <div className="card-tags">{tagsList}</div>
      </div>
    </Col>
  );
};
export default Card;

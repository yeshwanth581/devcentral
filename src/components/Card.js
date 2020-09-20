import React from "react";
import { Col } from "react-bootstrap";

const Card = (props) => {
  const { heading, description, tags } = props;
  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
      <div className="card-container">
        <div className="card-heading">Heading</div>
        <div className="card-description">
          Desctiption text is being shown here.Please display test.
        </div>
        <div className="card-tags">
          <span className="tag">test1</span>
          <span className="tag">test1</span>
          <span className="tag">test1</span>
        </div>
      </div>
    </Col>
  );
};
export default Card;

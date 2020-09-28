import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const PageTitleCard = () => {
  return (
    <>
      <div className="card-heading">Mentor/Buddy</div>
      <div className="card-description page-description">
        <Row>
          <Col className="buddy-name vertical_line">
            <span>Yeshwanth Raghavendra</span>
          </Col>
          <Col className="center-align">
            <span className="link-text">
              <FontAwesomeIcon className="icon" icon={faPlusCircle} size="1x" />{" "}
              Register as mentor
            </span>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default PageTitleCard;

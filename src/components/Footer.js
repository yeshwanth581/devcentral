import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

// import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faCodepen,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer-section">
      <Row className="footer-items">
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <div class="brand-data">
            <span>
              <img src={logo} width="30" height="30" alt="DevCentral Logo" />
            </span>
            <span>
              {" "}
              <Link className="brand-name" to={`/`}>
                <span>DevCentral.</span>
              </Link>{" "}
              by{" "}
              <a
                className="chip"
                href="https://www.linkedin.com/in/yeshwanthraghavendra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yeshwanth
              </a>
            </span>
          </div>
          <div class="brand-content">
            Community created roadmaps, articles, resources and journeys to help
            you choose your path and grow in your career.
            <br />
            Design inspired by{" "}
            <a
              className="chip black"
              href="https://roadmap.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              roadmaps.sh
            </a>
            <div>
              <br />© devcentral.in
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 4, offset: 4 }}
          xl={{ span: 4, offset: 4 }}
        >
          This project <b>devcentral.in</b> is available in
          <Row className="footer-icons-list">
            <Col>
              <a
                href="https://github.com/yeshwanth581/devcentral"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faGithubSquare}
                  size="3x"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://codesandbox.io/s/github/yeshwanth581/devcentral"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faCodepen} size="3x" />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/yeshwanthraghavendra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;

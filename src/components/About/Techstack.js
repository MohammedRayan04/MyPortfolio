import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { SiCypress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;

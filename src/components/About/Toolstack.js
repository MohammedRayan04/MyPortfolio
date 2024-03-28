import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel
} from "react-icons/si";
import { TbBrandNpm } from "react-icons/tb";
import { SiNodemon } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { SiRedis } from "react-icons/si";
import { DiLinux } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNpm  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodemon   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrHeroku   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;

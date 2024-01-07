import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        {/* -----------------------------LOAN BANK MANAGEEMENT SYSTEM ------------------- */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="Loan Bank Management System"
            description={{
              summary:  "Created an advanced obstacle detection system integrating machine learning and camera technology.",
              technologies: [
                "Python",
                "Firebase",
                "Spring Boot",
                "Flutter",
                "Google Maps API",
                "React",
              ],
            }}
            ghLinks={[
              "https://github.com/soumyajit4419/Chatify",
              "https://github.com/soumyajit4419/AnotherRepo1",
              "https://github.com/soumyajit4419/AnotherRepo2",
              // Add more GitHub repo links as needed
            ]}
            ghNames={["Chatify", "CustomName1", "CustomName2"]}
            demoLink="https://chatify-49.web.app/"
          />
        </Col>

        {/* -----------------------------LOAN BANK MANAGEEMENT SYSTEM ------------------- */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

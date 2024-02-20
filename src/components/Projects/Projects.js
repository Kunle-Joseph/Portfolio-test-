import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yesorno from "../../Assets/Projects/yesorno.png";
import jokebot from "../../Assets/Projects/JokeBot.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yesorno}
              isBlog={false}
              title="Yes or No site"
              description="Saw this on tiktok and stole the idea"
              ghLink="https://github.com/Kunle-Joseph/YesOrNo"
              demoLink="https://yesorno-040124.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jokebot}
              isBlog={false}
              title="Joke Bot"
              description="Did this has a test for the use of a simple API"
              ghLink="https://github.com/Kunle-Joseph/Joke-Bot"
              demoLink="https://fancy-kitsune-2e6e53.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

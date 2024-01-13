// Updated ProjectCards component with improved button layout
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: '#c160e6'}}><b>{props.title}</b></Card.Title>
        
        {/* Displaying Summary */}
        <Card.Text style={{ textAlign: "justify", color: "white" }}>
         {props.description.summary}
        </Card.Text>


         {/* Displaying Technologies as bullet points */}
         {props.description.technologies && (
          <Card.Text style={{ textAlign: "justify", color: "white" }}>
            <strong style={{color: '#c160e6'}}>Technologies:</strong>
            <ul>
              {props.description.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </Card.Text>
        )}


        {/* GitHub buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <Button
            variant="primary"
            href={props.ghLinks[0]}
            target="_blank"
            style={{ marginBottom: "10px" }}
          >
            <BsGithub /> &nbsp; {props.ghNames[0] || "GitHub"}
          </Button>
          {props.ghLinks.slice(1).map((link, index) => (
            <Button
              key={`github_link_${index}`}
              variant="primary"
              href={link}
              target="_blank"
              style={{ marginLeft: "10px", marginBottom: "10px" }}
            >
              <BsGithub /> &nbsp; {props.ghNames[index + 1] || `GitHub ${index + 2}`}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

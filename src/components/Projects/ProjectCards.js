import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#c160e6" }}>
          <b>{props.title}</b>
        </Card.Title>

        {/* Displaying sections dynamically */}
        {props.sections &&
          props.sections.map((section, index) => (
            <div key={index} style={{textAlign: 'left'}}>
              <strong  style={{ color: '#c160e6'}}>{section.title}:</strong>
              {Array.isArray(section.text) ? (
                <ul>
                  {section.text.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.text}</p>
              )}
            </div>
          ))}

        {/* GitHub buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {props.ghLinks.map((link, index) => (
            <Button
              key={`github_link_${index}`}
              variant="primary"
              href={link}
              target="_blank"
              style={{ marginLeft: "10px", marginBottom: "10px" }}
            >
              <BsGithub /> &nbsp; {props.ghNames[index] || `GitHub ${index + 1}`}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

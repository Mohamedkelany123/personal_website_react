import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import loan from "../../Assets/Projects/loan.png";


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
        
        {/* -----------------------------SafeLane ------------------- */}
        {/* <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="SafeLane"
            description={{
              summary:  "Developed an innovative obstacle detection system using machine learning and camera integration for real time detection and classification of road obstacles. Empowers drivers with obstacle information on google maps API on the flutter mobile application and provides visualized reports for government action on the React website",
              technologies: [
                "Python",
                "Spring Boot",
                "Flutter",
                "React",
                "Firebase",
                "Google Maps API",
              ],
            }}
            ghLinks={[
              "https://github.com/soumyajit4419/Chatify",
              "https://github.com/soumyajit4419/AnotherRepo1",
              "https://github.com/soumyajit4419/AnotherRepo2",
              // Add more GitHub repo links as needed
            ]}
            ghNames={["Spring", "CustomName1", "CustomName2"]}
            demoLink="https://chatify-49.web.app/"
          />
        </Col> */}

        {/* -----------------------------LOAN BANK MANAGEEMENT SYSTEM ------------------- */}

        <Col md={4} className="project-card">
        <ProjectCard
          imgPath={loan}
          isBlog={false}
          title="Loan Bank Management System"
          sections={[
            {
              title: "Project Overview",
              text: ["The project involved creating a platform where Bank Personnel could open funds, allowing Loan Providers to contribute to these funds. Customers, in turn, could view the funds and have an amount within the specified limit. Which then will create a loan that will need to be approved by the bank personnel."]
            },
            {
              title: "Roles Optimization",
              text: ["Designed and implemented distinct user roles, including Bank Personnel, Loan Provider, and Customer, to optimize user access and control."]
            },
            {
              title: "Code Quality Assurance",
              text: ["Ensured high-quality code by creating a suite of unit tests for code validation."]
            },
            {
              title: "End-to-End Testing",
              text: ["Implemented end-to-end testing with Selenium to automate comprehensive testing of the system's functionality, ensuring a smooth and reliable user experience."]
            },
            {
              title: "Technologies",
              text: ["Django", "Vue.js", "SQLite", "Selenium", "Maps API"],
            },
          ]}
          ghLinks={[
            "https://github.com/Mohamedkelany123/Bank_Loans_Django_Backend",
            "https://github.com/Mohamedkelany123/Bank-Frontend",
            "https://github.com/Mohamedkelany123/Selenium_AutoTest_Bank_FrontEnd",
          ]}
          ghNames={["Backend", "FrontEnd", "Selenium"]}
        />
      </Col>

        {/* -----------------------------Shopping App  ------------------- */}
        
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={loan}
            isBlog={false}
            title="Shopping App"
            sections={[
              {
                title: "Project Overview",
                text: [
                  "Developed a microservices-based backend for an online shopping application using Java and Jakarta EE REST API (JAX-RX framework)."]
              },
              {
                title: "Technical Details",
                text: [
                  "Created two microservices facilitating seamless communication.",
                  "Implemented a React-based web front-end for user interaction."
                ]
              },
              {
                title: "Backend Functionalities",
                text: [
                  "Managed user authentication, product catalog, and checkout processes.",
                  "Supported administrative tasks, enabling account creation for selling companies' representatives and managing customer accounts."
                ]
              },
              {
                title: "Advanced Features",
                text: [
                  "Implemented different EJB bean types (Stateless, Stateful, Singleton, Message Driven).",
                  "Integrated web-based interfaces and REST APIs for comprehensive functionality."
                ]
              },
              {
                title: "User Roles",
                text: [
                  "Admins: Account creation for representatives, managing shipping companies.",
                  "Representatives: Product management and account activities.",
                  "Shipping Companies: Processing shipping requests in designated regions.",
                  "Customers: Registration, order tracking, and new order placement."
                ]
              },
              {
                title: "Technologies",
                text: [
                  "Java",
                  "Jakarta EE",
                  "React",
                  "MySQL",
                  "Jboss Server",
                  "Microservices",
                ],
              },
            ]}
            description={{
              summary:  "Developed a microservices-based backend for an online shopping application using Java and Jakarta EE REST API (JAX-RX framework). The system consists of two microservices that communicate with each other and a web-based front-end developed using React. The backend microservices handle various functionalities, including user authentication, product catalog, and checkout. The application supports administrative activities, allowing admins to create accounts for product selling companies' representatives, create shipping companies, and manage customer accounts. Selling company representatives can log in, view and add products, while shipping companies process shipping requests within their supported geographic regions. Customers can register, log in, view purchase orders, and make new orders. I used different EJB bean types (Stateless, Stateful, Singleton, Message Driven), a web-based interface, and REST APIs.",
              technologies: [
                "Java",
                "Jakarta EE",
                "React",
                "MySQL",
                "Jboss Server",
                "Microservices",
              ],
            }}
            ghLinks={[
              "https://github.com/Mohamedkelany123/DS_Service1_BackEnd_Accounts",
              "https://github.com/Mohamedkelany123/DS_Service2_BackEnd_ShippingCompany",
              "https://github.com/Mohamedkelany123/Monolithic_ShoppingApp_FrontEnd",
              // Add more GitHub repo links as needed
            ]}
            ghNames={["Backend-1", "Backend-2", "FrontEnd"]}
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

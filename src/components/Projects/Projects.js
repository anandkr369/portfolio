import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currencyconv from "../../Assets/Projects/currencyconv.png";
import newApp from "../../Assets/Projects/newApp.png";
import jobPortal from "../../Assets/Projects/jobPortal.png";
import bookStore from "../../Assets/Projects/bookStore.png";
import furniture from "../../Assets/Projects/furniture.png";
import colorimg from "../../Assets/Projects/colorImg.png";

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
              imgPath={bookStore}
              isBlog={false}
              title="Book Store"
              description="Developed a dynamic and responsive webpage using MongoDB for the database.Utilized Node.js and Express.js for backend and React.js for front-end development, along with third-party API integration for AI support. Implemented user authentication and authorization to ensure secure access to the website's features including private-routing for accessingdata by admin only. All CRUD operation can be performed.Conducted extensive testing and debugging to ensure the application was robust and error-free.Designed and implemented user-friendly interfaces, enhancing user experience."
              ghLink="https://github.com/anandkr369/bookStore"
              demoLink="https://bookstore0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorimg}
              isBlog={false}
              title="Generate Color"
              description="Explore my project, Generate-color, a fun and interactive application where you can choose colors generated randomly by the computer. The project is designed to make the experience feel like a game, providing endless color possibilities at the click of a button."
              ghLink="https://github.com/anandkr369/chooseColor"
              demoLink="https://choose-color-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="Job Portal"
              description="This project enables you to post and apply for any job. Jobs are stored in dummy local storage where each users job application is stored seperatly. Each user can login/signup with their unique credentials. Concept of MERN technology is used to build this project."
              ghLink="https://github.com/anandkr369/summer-pep-mern"
              demoLink="https://github.com/anandkr369/summer-pep-mern/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniture}
              isBlog={false}
              title="Furniture Website"
              description="Explor, A sleek and modern furniture website showcasing a wide range of stylish pieces. Designed for a seamless browsing experience, it highlights both functionality and aesthetic appeal. Discover your next favorite furniture item with ease."
              ghLink="https://github.com/anandkr369/furniture"
              demoLink="https://furniture-0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyconv}
              isBlog={false}
              title="Currency convertor"
              description="A user-friendly application for converting currencies in real-time. With an intuitive interface, it allows you to easily convert between various currencies and view up-to-date exchange rates. Ideal for travelers and finance enthusiasts, it provides accurate conversion data at your fingertips."
              ghLink="https://github.com/anandkr369/currency-converter-React"
              demoLink="https://currencyconvertortarun.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newApp}
              isBlog={false}
              title="News App"
              description="A simple yet effective web application built with HTML, CSS, and JavaScript. It provides users with up-to-date news articles from various sources, featuring an intuitive design and easy navigation. Perfect for staying informed on current events with a clean and responsive interface."
              ghLink="https://github.com/anandkr369/News-app"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

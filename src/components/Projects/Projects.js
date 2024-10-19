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
import todo from "../../Assets/Projects/todo.png";

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
              description="Developed a dynamic and responsive webpage using MongoDB for the database. Utilized Node.js and Express.js for the backend and React.js for front-end development, along with third-party API integration for AI support. Implemented user authentication and authorization to ensure secure access to the website's features, including private routing for admin-only data access. All CRUD operations can be performed. Conducted extensive testing and debugging to ensure the application was robust and error-free. Designed and implemented user-friendly interfaces, enhancing the user experience."
              ghLink="https://github.com/anandkr369/bookStore"
              demoLink="https://bookstore0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorimg}
              isBlog={false}
              title="Generate Color"
              description="Explore Generate-Color, a fun, interactive app that lets you discover randomly generated colors with a simple click. Designed like a game, it offers endless color combinations for designers, developers, or anyone seeking inspiration. You can lock and save your favorite colors to create custom palettes, making it a perfect tool for creativity. Built with **React.js**, the application is fully responsive and delivers a smooth, fast user experience across all devices. Its clean, minimal interface keeps the focus on colors, making exploration both engaging and easy."
              ghLink="https://github.com/anandkr369/chooseColor"
              demoLink="https://choose-color-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="Job Portal"
              description="This project allows users to post and apply for jobs, with each job and application stored in local storage. Users can sign up or log in with unique credentials, ensuring personalized access to their job applications. Built using the **MERN** stack (MongoDB, Express, React, and Node.js), the project provides a smooth user experience and demonstrates full-stack development capabilities. While jobs are stored in dummy local storage for simplicity, the app showcases the fundamental structure and features of a job portal, including authentication and user-specific data handling."
              ghLink="https://github.com/anandkr369/summer-pep-mern"
              demoLink="https://internship001.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniture}
              isBlog={false}
              title="Furniture Website"
              description="**Explor** is a sleek, modern furniture website showcasing a curated collection of stylish and functional pieces. Designed for an effortless browsing experience, the site combines aesthetic appeal with user-friendly navigation, making it easy to discover your next favorite furniture item. Whether you're looking for contemporary, minimalist designs or classic styles, **Explor** offers a wide range of options to suit every taste. The responsive design ensures that users can explore products seamlessly on any device, providing a visually pleasing and enjoyable shopping experience from start to finish."
              ghLink="https://github.com/anandkr369/furniture"
              demoLink="https://furniture-0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyconv}
              isBlog={false}
              title="Currency convertor"
              description="This user-friendly application offers real-time currency conversion with an intuitive interface, allowing you to easily switch between various currencies. Whether you're a traveler needing quick conversions or a finance enthusiast tracking exchange rates, the app provides up-to-date and accurate data at your fingertips. The sleek design ensures effortless navigation, making it simple to input amounts and receive instant conversions. With support for multiple currencies and real-time rate updates, this app is an ideal tool for anyone needing fast, reliable currency information on the go, from casual users to professionals."
              ghLink="https://github.com/anandkr369/currency-converter-React"
              demoLink="https://currencyconvertortarun.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newApp}
              isBlog={false}
              title="News App"
              description="This simple yet effective web application, built with **HTML, CSS, and JavaScript**, delivers up-to-date news articles from various sources. With its clean, responsive interface, users can easily stay informed on current events, enjoying a seamless experience across devices. The intuitive design and easy navigation make it simple to browse through articles on topics of interest, whether local or global. Whether you're catching up on breaking news or exploring in-depth stories, this application ensures quick access to reliable information, providing a convenient, user-friendly platform for news enthusiasts."
              ghLink="https://github.com/anandkr369/News-app"
              demoLink="https://news-app36.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List(Redux)"
              description="This To-Do List web application, built with React and Redux, allows users to efficiently manage tasks while performing full CRUD operations—add, edit, delete, and mark tasks as complete. The app saves tasks to local storage, ensuring that your data is preserved even after refreshing the page. Its responsive design provides a smooth and consistent experience across all devices. With state management powered by Redux, the application is fast, scalable, and easy to use, offering an intuitive way to organize your tasks and boost productivity."
              ghLink="https://github.com/anandkr369/todoRedux"
              demoLink="https://todoredux1.netlify.app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

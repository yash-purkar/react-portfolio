import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quickdeal from "../../Assets/Projects/quickdeal-pic.png";
import quicktweet from "../../Assets/Projects/quicktweet-pic.png";
import bookit from "../../Assets/Projects/bookit-pic.png";
import bookshelf from "../../Assets/Projects/booshelf-pic.png";
const projects = [
  {
    imgPath: quickdeal,
    isBlog: false,
    title: "QuickDeal - An Ecommerce App",
    description:
      "The e-commerce app QuickDeal offers a wide range of fashion clothes for online showcasing and selling. It incorporates essential features such as cart management, wishlist management, payment integration, address management, and other key functionalities required for an e-commerce platform.",
    githubLink: "https://github.com/yash-purkar/QuickDeal",
    demoURL: "https://quickdeal-ecom.netlify.app/",
  },
  {
    imgPath: bookit,
    isBlog: false,
    title: "BookIT - Hotel Booking App",
    description:
      "BookIt is all about making booking hotels fun and simple. It's easy, it's cool, and your perfect stay is just a click away!",
    githubLink: "https://github.com/yash-purkar/book-it",
    demoURL: "https://bookit-web-app.vercel.app/",
  },
  {
    imgPath: quicktweet,
    isBlog: false,
    title: "QuickTweet - Social Media App",
    description:
      "About QuickTweet: This dynamic social media Webapp combines the best of Twitter and Instagram, allowing you to share your thoughts, ideas, and creativity in various formats. Post tweets, share captivating posts.",
    githubLink: "https://github.com/yash-purkar/QuickTweet/tree/master",
    demoURL: "https://quicktweet.netlify.app/",
  },
  {
    imgPath: bookshelf,
    isBlog: false,
    title: "Bookshelf",
    description:
      "The Bookshelf app has three shelves (Currently Reading, Want to Read, Read), a search page for adding books, and ensures consistent book states between main and search pages. It allows seamless navigation and instant reflection of selections made on the search page in the user's library.",
    githubLink: "https://github.com/yash-purkar/book-shelf",
    demoURL: "https://bookshelf-mcr.netlify.app/",
  },
];

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
          {projects.map(
            ({ title, description, imgPath, isBlog, githubLink, demoURL }) => (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={imgPath}
                  isBlog={isBlog}
                  title={title}
                  description={description}
                  ghLink={githubLink}
                  demoLink={demoURL}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

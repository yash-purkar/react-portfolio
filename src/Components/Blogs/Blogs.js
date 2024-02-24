import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import quicktweet from "../../Assets/Projects/quicktweet-pic.png";
import bookit from "../../Assets/Projects/bookit-pic.png";
import bookshelf from "../../Assets/Projects/booshelf-pic.png";
const projects = [
  {
    imgPath:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1678632970810/727c2efc-7d3b-41db-ac03-b100201df043.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    isBlog: true,
    title: "How JavaScript Works",
    blogUrl: "https://yashpurkar.hashnode.dev/how-javascript-code-works",
  },
  {
    imgPath:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1676232965891/8c286b23-0918-4e22-9fcd-4c2d92890fd2.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    isBlog: true,
    title: "Rest And Spread operator in JavaScript",
    blogUrl: "https://yashpurkar.hashnode.dev/rest-parameter-spread-operator",
  },
  {
    imgPath:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--t_zLD-td--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/etyobt3pt6c6q286y6lf.jpg",
    isBlog: true,
    title: "Props vs States In ReactJS",
    blogUrl: "https://yashpurkar.hashnode.dev/props-and-state",
  },
];

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few blogs I've written.</p>
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

export default Blogs;

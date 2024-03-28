import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am<span className="purple"> Muhammad Rayan</span> from <span className="purple">Bangalore City, Karnataka, India.</span>
  <br />
  Being a Full stack <span className="purple"> MERN </span> developer with amazing projects...
  <br />
  # I have honed my skills in building responsive and dynamic web applications.
  <br />
  # I thrive in fast-paced environments and enjoy collaborating with multidisciplinary teams to deliver High-quality solutions.
  <br />
  # Attention to detail and passion for writing clean, maintainable code align with the commitment to excellence...
  <br />
  Apart from coding, some other activities that I love to do!!!
</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Manga/Anime and much more...
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Clean code always looks like it was written by someone who cares."{" "}
          </p>
          <footer className="blockquote-footer">MuhammadRyan04</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../assets/images/projectImg.png";

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border-radius: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desr {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius?",
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desr">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}

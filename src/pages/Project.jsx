import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { MdSearch } from "react-icons/md";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../assets/data/projects";

const ProjectStyles = styled.div`
  padding: 10rem 0;
  .project__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .project__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .project__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .project__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .project__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .project__searchBar,
    .project__searchBar form,
    .project__searchBar input {
      width: 100%;
    }
  }
`;

export default function Project() {
  const [projectData, setProjectData] = useState(ProjectInfo);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  };

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle heading="Project" subheading="some of my recent works" />
        <div className="project__searchBar">
          <form>
            <input
              type="text"
              placeholder="Project name"
              value={searchText}
              onChange={handleChange}
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="project__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}

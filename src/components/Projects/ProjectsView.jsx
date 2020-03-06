import React from "react";
import Modal from "./Modal";
import {
  Container,
  Header,
  SubHeader,
  Logo,
  LogoContainer,
  Column
} from "../../styles/styles";
import Typical from "react-typical";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const ProjectContainer = styled.div`
  width: 100%;
`;

const ProjectsView = props => {
  return (
    <Container>
      <div className="d-flex flex-column flex-lg-row justify-content-md-around m-auto">
        <InfoContainer className="m-auto d-flex flex-column justify-content-between">
          <Header>
            Projects. <br />
            <Typical
              steps={[
                "",
                2000,
                "Javascript.",
                5000,
                "React.",
                5000,
                "Rails.",
                5000,
                "Ruby.",
                5000,
                "Node.",
                5000,
                "HTML 5.",
                5000,
                "CSS 3.",
                5000,
                "Sass.",
                5000
              ]}
              loop={Infinity}
            />
          </Header>
          <SubHeader>
            I have worked with Node, Rails, React, Redux, JS, HTML, CSS, etc.
            <br />
            But the majority of my work is in plain Javascript, Rails, or Rails
            with React.
          </SubHeader>
          <LogoContainer className="d-flex flex-wrap justify-content-start">
            {props.logos.map((logo, i) => {
              return <Logo key={i}>{logo}</Logo>;
            })}
          </LogoContainer>
        </InfoContainer>
        <ProjectContainer>
          <div className="container">
            <div className="d-flex justify-content-center mt-5 flex-wrap">
              {props.projects.map(project => {
                return (
                  <Column
                    onClick={props.selectProject}
                    key={project.id}
                    id={project.id}
                    background={project.image}
                    className="col-12 col-xs-12 col-sm-12 col-md-3"
                  />
                );
              })}
            </div>
          </div>
        </ProjectContainer>
      </div>
    </Container>
  );
};

export default ProjectsView;

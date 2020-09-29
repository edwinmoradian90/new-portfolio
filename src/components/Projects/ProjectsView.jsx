import React from "react";
import colors from "../../styles/colors/colors";
import ReactLoading from "react-loading";
import Wave from "react-wavify";
import {
  Container,
  Header,
  SubHeader,
  Logo,
  LogoContainer,
  Column,
  PageContainer
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
  max-width: 100vw;
`;

const LinkContainer = styled.div`
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;

  &:hover {
    opacity: 0.9;
  }
`;

const ProjectLink = styled.p`
  padding: 20px;
  transition: 0.4s;

  &:hover {
    color: ${colors.blue};
  }
`;

const ProjectsView = props => {
  if (props.loading) {
    return (
      <Container className="align-items-center">
        <ReactLoading type={"bars"} color={colors.blue} width={"5em"} />
      </Container>
    );
  }
  return (
    <PageContainer darkMode={props.darkMode}>
      <Container darkMode={props.darkMode}>
        <div className="d-flex flex-column flex-lg-row justify-content-md-around m-auto">
          <InfoContainer className="m-auto d-flex flex-column justify-content-between">
            <Header className="px-2">
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
                  "Firebase.",
                  5000,
                  "PostgreSQL.",
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
            <SubHeader className="px-2" darkMode={props.darkMode}>
              I have worked with Javascript, React, Rails, Ruby, Firebase,
              PostgreSQL, Node, HTML, CSS, Sass, and more.
              <br />
              <br />
              The majority of my work is in Javascript, Rails, or Rails with
              React. Language and tool agnostic.
            </SubHeader>
            <LogoContainer className="d-flex flex-wrap justify-content-start">
              {props.logos.map((logo, i) => {
                return <Logo className="px-2" key={i}>{logo}</Logo>;
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
                      backgroundSize={project.imageSize}
                      className="col-12 col-xs-12 col-sm-12 col-md-3"
                    >
                      <LinkContainer>
                        <p>{project.name}</p>
                        <small className="projectText">{project.text}</small>
                        <div className="d-flex justify-content-center">
                          <ProjectLink>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </ProjectLink>
                          <ProjectLink>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Demo
                            </a>
                          </ProjectLink>
                        </div>
                      </LinkContainer>
                    </Column>
                  );
                })}
              </div>
            </div>
          </ProjectContainer>
        </div>
      </Container>
      <Wave
        className="d-lg-block d-none"
        fill={colors.blue}
        paused={false}
        options={{
          height: 70,
          amplitude: 50,
          speed: 0.15,
          points: 2
        }}
      />
    </PageContainer>
  );
};

export default ProjectsView;

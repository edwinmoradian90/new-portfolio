import React from "react";
import { Container, Header, SubHeader } from "../../styles/styles";
import Typical from "react-typical";

const AboutView = props => {
  return (
    <Container className="align-items-center">
      <div className="p-3">
        <Header>
          <Typical steps={["About me."]} />
        </Header>
        <SubHeader>
          I am a physicist and a web developer with several years of experience.
          <br />
          <br />
          I have expoerience with many different tools, but my favorites have to
          be plain Javascript, Rails, or React on top of Rails for full-stack
          projects. <br />
          <br />
          In my free time, I am likely building a project, learning something
          new, or both. :)
        </SubHeader>
      </div>
    </Container>
  );
};

export default AboutView;

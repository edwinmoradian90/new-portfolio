import React from "react";
import { Container, Header, SubHeader } from "../../styles/styles";
import colors from "../../styles/colors/colors";
import Typical from "react-typical";
import ReactLoading from "react-loading";

const AboutView = props => {
  if (props.loading) {
    return (
      <Container className="align-items-center">
        <ReactLoading type={"bars"} color={colors.blue} width={"5em"} />
      </Container>
    );
  } else {
    return (
      <Container darkMode={props.darkMode} className="align-items-center">
        <div className="p-3">
          <Header>
            <Typical steps={["About me."]} />
          </Header>
          <SubHeader>
            I am a physicist and a web developer with several years of
            experience.
            <br />
            <br />
            I have experience with many different tools, but my favorites have
            to be plain Javascript, Rails, or React on top of Rails for
            full-stack projects. <br />
            <br />
            In my free time, I am likely building a project, learning something
            new, or both. :)
          </SubHeader>
        </div>
      </Container>
    );
  }
};

export default AboutView;

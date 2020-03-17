import React from "react";
import {
  Container,
  Header,
  SubHeader,
  PageContainer
} from "../../styles/styles";
import Wave from "react-wavify";
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
      <PageContainer darkMode={props.darkMode}>
        <Container darkMode={props.darkMode} className="align-items-center">
          <div className="p-sm-3">
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
              In my free time, I am likely building a project, learning
              something new, or both. :)
            </SubHeader>
          </div>
        </Container>
        <Wave
          className="d-md-block d-none"
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
  }
};

export default AboutView;

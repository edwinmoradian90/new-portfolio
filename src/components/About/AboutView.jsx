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
                <SubHeader className="">
                    I am a physicist and a web developer with several years of
                    experience.
                    <br />
                    <br />
                    I have worked with many different tools, but my favorites
                    have to be plain Javascript, Rails, or React on top of Rails
                    for full-stack projects. <br />
                    <br />
                </SubHeader>
            </div>
        </Container>
    );
};

export default AboutView;

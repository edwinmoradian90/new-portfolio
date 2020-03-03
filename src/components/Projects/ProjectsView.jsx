import React from "react";
import { Container, Header, SubHeader } from "../../styles/styles";

const ProjectsView = props => {
    return (
        <Container>
            <Header>Projects</Header>
            <SubHeader>
                I have worked with Node, Rails, React, Redux, JS, HTML, CSS,
                etc.
                <br />
                But the majority of my work is in plain Javascript, Rails, or
                Rails with React.
            </SubHeader>
        </Container>
    );
};

export default ProjectsView;

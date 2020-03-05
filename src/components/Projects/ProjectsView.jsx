import React from "react";
import battleship from '../../assets/images/battleship.jpg';
import newsweek from '../../assets/images/newsweek.jpg';
import ecommerce from '../../assets/images/ecommerce.jpg';

import {
    Container,
    Header,
    SubHeader,
    Logo,
    LogoContainer,
    Column
} from "../../styles/styles";
import {
    IoLogoJavascript,
    IoLogoCss3,
    IoLogoNodejs,
    IoLogoHtml5,
    IoLogoSass
} from "react-icons/io";
import { FaGit } from "react-icons/fa";
import { DiRubyRough, DiRor, DiReact } from "react-icons/di";
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

const Image = styled.img`
    height: 100%;
    transition: .4s;
    width: 100%;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

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
                        I have worked with Node, Rails, React, Redux, JS, HTML,
                        CSS, etc.
                        <br />
                        But the majority of my work is in plain Javascript,
                        Rails, or Rails with React.
                    </SubHeader>
                    <LogoContainer className="d-flex flex-wrap justify-content-start">
                        <Logo>
                            <IoLogoJavascript />
                        </Logo>
                        <Logo>
                            <DiReact />
                        </Logo>
                        <Logo>
                            <DiRor />
                        </Logo>
                        <Logo>
                            <DiRubyRough />
                        </Logo>
                        <Logo>
                            <IoLogoNodejs />
                        </Logo>
                        <Logo>
                            <IoLogoHtml5 />
                        </Logo>
                        <Logo>
                            <IoLogoCss3 />
                        </Logo>
                        <Logo>
                            <IoLogoSass />
                        </Logo>
                        <Logo>
                            <FaGit />
                        </Logo>
                    </LogoContainer>
                </InfoContainer>
                <ProjectContainer>
                    <div className="container">
                        <div className="row d-flex justify-content-center mt-5">
                            <Column className="col-12 col-xs-12 col-sm-12 col-md-3">
                                <Image src={battleship} alt="battleship"/>
                            </Column>
                            <Column className="col-12 col-xs-12 col-sm-12 col-md-3">
                                <Image src={newsweek} alt="newsweek" />
                            </Column>
                            <Column className="col-12 col-xs-12 col-sm-12 col-md-3">
                                <Image src={ecommerce} alt="ecommerce" />
                            </Column>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <Column className="col col-sm-12 col-md-3">
                                <Image />
                            </Column>
                            <Column className="col col-sm-12 col-md-3">
                                Chat app with rails
                            </Column>
                            <Column className="col col-sm-12 col-md-3">
                                6
                            </Column>
                        </div>
                    </div>
                </ProjectContainer>
            </div>
        </Container>
    );
};

export default ProjectsView;

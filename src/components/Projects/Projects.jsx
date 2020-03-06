import React, { Component } from "react";
import ProjectsView from "./ProjectsView";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoSass
} from "react-icons/io";
import { FaGit } from "react-icons/fa";
import { DiRubyRough, DiRor, DiReact } from "react-icons/di";
import battleship from "../../assets/images/battleship.jpg";
import newsweek from "../../assets/images/newsweek.jpg";
import ecommerce from "../../assets/images/ecommerce.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        { name: "Battleship", id: 0, image: battleship },
        { name: "News Week Clone", id: 1, image: newsweek },
        { name: "Ecommerce", id: 2, image: ecommerce }
      ],
      logos: [
        <IoLogoJavascript />,
        <DiReact />,
        <DiRor />,
        <DiRubyRough />,
        <IoLogoNodejs />,
        <IoLogoHtml5 />,
        <IoLogoCss3 />,
        <IoLogoSass />,
        <FaGit />
      ]
    };
  }

  render() {
    return (
      <div>
        <ProjectsView projects={this.state.projects} logos={this.state.logos} />
      </div>
    );
  }
}

export default Projects;

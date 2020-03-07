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
      selectedProject: "",
      projects: [
        {
          name: "Battleship",
          id: 0,
          image: battleship,
          selected: false,
          github:
            "https://github.com/edwinmoradian90/battleship/tree/battleship-features",
          demo:
            "https://raw.githack.com/edwinmoradian90/battleship/battleship-features/dist/index.html"
        },
        {
          name: "News Week Clone",
          id: 1,
          image: newsweek,
          selected: false,
          github: "https://github.com/edwinmoradian90/newsweek-clone-bootstrap",
          demo:
            "https://raw.githack.com/edwinmoradian90/newsweek-clone-bootstrap/master/index.html"
        },
        {
          name: "Ecommerce",
          id: 2,
          image: ecommerce,
          selected: false,
          github: "https://github.com/edwinmoradian90/ecommerce_webapp",
          demo: "https://stark-coast-27283.herokuapp.com/"
        }
      ],
      logos: [
        <IoLogoJavascript />,
        <DiReact />,
        <DiRor />,
        <DiRubyRough />,
        <IoLogoHtml5 />,
        <IoLogoCss3 />,
        <IoLogoSass />,
        <FaGit />
      ]
    };
  }

  selectProject = e => {
    const selectedId = parseInt(e.target.id);
    console.log(selectedId);
    this.state.projects.forEach(project => {
      console.log(selectedId, project.id);
      if (selectedId === project.id) {
        project.selected = true;
        this.setState(
          {
            ...this.state,
            selectedProject: project,
            projects: [...this.state.projects, project]
          },
          () => {
            console.log("selected");
          }
        );
      }
    });
  };

  render() {
    return (
      <div>
        <ProjectsView
          selectProject={this.selectProject}
          selectedProject={this.state.selectedProject}
          projects={this.state.projects}
          logos={this.state.logos}
        />
      </div>
    );
  }
}

export default Projects;

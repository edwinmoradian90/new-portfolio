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
import { DiRubyRough, DiRor, DiReact, DiPostgresql } from "react-icons/di";
import battleship from "../../assets/images/battleship.jpg";
import newsweek from "../../assets/images/newsweek.jpg";
import ecommerce from "../../assets/images/ecommerce.jpg";
import tictactoe from "../../assets/images/tictactoe.jpg";
import facebook from "../../assets/images/facebook.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedProject: "",
      projects: [
        {
          name: "News Week Clone",
          id: 0,
          image: newsweek,
          selected: false,
          github: "https://github.com/edwinmoradian90/newsweek-clone-bootstrap",
          demo:
            "https://raw.githack.com/edwinmoradian90/newsweek-clone-bootstrap/master/index.html",
          text: "A Newsweek clone built to replicate the popular news outlet, 'Newsweek'. Built with Html, CSS, and Bootstrap 4."
        },
        {
          name: "Battleship",
          id: 1,
          image: battleship,
          selected: false,
          github:
            "https://github.com/edwinmoradian90/battleship/tree/battleship-features",
          demo:
            "https://raw.githack.com/edwinmoradian90/battleship/development/dist/index.html",
          text: "A battleship game with a space theme, boat placement, computer opponent, and more. Built with JavaScript."
        },
        {
          name: "Ecommerce",
          id: 2,
          image: ecommerce,
          selected: false,
          github: "https://github.com/edwinmoradian90/ecommerce_webapp",
          demo: "https://stark-coast-27283.herokuapp.com/",
          text: "An ecommerce application with login, checkout, payment, and more. Built with React and Nodejs."
        },
        {
          name: "Tic-Tac-Toe",
          id: 3,
          image: tictactoe,
          selected: false,
          github: "https://github.com/edwinmoradian90/tic-tac-toe_js",
          demo:
            "https://raw.githack.com/edwinmoradian90/tic-tac-toe_js/development/index.html",
          text: "A tic-tac-toe game with two players, name selection, and game end and rest. Built with JavaScript."
        },
        {
          name: "Facebook clone",
          id: 4,
          image: facebook,
          selected: false,
          github: "https://github.com/edwinmoradian90/odin-facebook",
          demo: "https://cryptic-ridge-31466.herokuapp.com",
          text: "A FaceBook clone with login, friends and friend requests, timeline, and more. Built with Ruby and Rails."
        }
      ],
      logos: [
        <IoLogoJavascript />,
        <DiReact />,
        <DiRor />,
        <DiRubyRough />,
        <DiPostgresql />,
        <IoLogoNodejs />,
        <IoLogoHtml5 />,
        <IoLogoCss3 />,
        <IoLogoSass />,
        <FaGit />
      ]
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  selectProject = e => {
    const selectedId = parseInt(e.target.id);
    console.log(selectedId);
    this.state.projects.forEach(project => {
      console.log(selectedId, project.id);
      if (selectedId === project.id) {
        project.selected = true;
        this.setState({
          selectedProject: project,
          projects: [...this.state.projects, project]
        });
      }
    });
  };

  render() {
    return (
      <div>
        <ProjectsView
          darkMode={this.props.darkMode}
          selectProject={this.selectProject}
          selectedProject={this.state.selectedProject}
          projects={this.state.projects}
          logos={this.state.logos}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Projects;

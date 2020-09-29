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
import tracker from "../../assets/images/tracker.png";
import newsweek from "../../assets/images/newsweek.jpg";
import ecommerce from "../../assets/images/ecommerce.jpg";
import bookstore from "../../assets/images/bookstore.png";
import facebook from "../../assets/images/fakebook.png";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedProject: "",
      projects: [
        {
          name: "Tracker App",
          id: 0,
          image: tracker,
          imageSize: "125px 250px",
          selected: false,
          github:
            "https://github.com/edwinmoradian90/tracker-app",
          demo:
            "https://tracker-app-react-rails.herokuapp.com",
          text: "A tracking app that trackers amount driven, fuel usage, and driving limit. Built with React, Redux, and Rails."
        },
        {
          name: "News Week Clone",
          id: 1,
          image: newsweek,
          imageSize: "150%",
          selected: false,
          github: "https://github.com/edwinmoradian90/newsweek-clone-bootstrap",
          demo:
            "https://raw.githack.com/edwinmoradian90/newsweek-clone-bootstrap/master/index.html",
          text: "A Newsweek clone built to replicate the popular news outlet, 'Newsweek'. Built with Html, CSS, and Bootstrap 4."
        },
        {
          name: "Book Store CMS",
          id: 2,
          image: bookstore,
          imageSize: "130%",
          selected: false,
          github: "https://github.com/edwinmoradian90/bookstore-cms",
          demo:
            "https://microverse-bookstore.herokuapp.com",
          text: "A book store CMS that handles and tracks books read. Built with React, Redux, and Styled Components."
        },
        {
          name: "Facebook clone",
          id: 3,
          image: facebook,
          imageSize: "130%",
          selected: false,
          github: "https://github.com/edwinmoradian90/facebook-clone",
          demo: "https://shielded-taiga-48885.herokuapp.com",
          text: "A FaceBook clone with login, friends and friend requests, timeline, and more. Built with Ruby and Rails."
        },
        {
          name: "Ecommerce",
          id: 4,
          image: ecommerce,
          imageSize: "100% 100%",
          selected: false,
          github: "https://github.com/edwinmoradian90/ecommerce_webapp",
          demo: "https://stark-coast-27283.herokuapp.com/",
          text: "An ecommerce application with login, checkout, payment, and more. Built with React and Nodejs."
        },
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

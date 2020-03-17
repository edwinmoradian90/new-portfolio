import React, { Component } from "react";
import NavbarView from "./NavbarView";
import { MdHome, MdMarkunread, MdPerson } from "react-icons/md";
import { FiGithub, FiLinkedin, FiCodesandbox } from "react-icons/fi";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "",
      icons: [
        {
          name: "Home",
          component: <MdHome id={0} />,
          link: "/",
          id: 0,
          active: true
        },
        {
          name: "About",
          component: <MdPerson id={1} />,
          link: "/about",
          id: 1,
          active: false
        },
        {
          name: "Projects",
          component: <FiCodesandbox id={2} />,
          link: "/projects",
          id: 2,
          active: false
        },
        {
          name: "Contact",
          component: <MdMarkunread id={3} />,
          link: "mailto:edwin.moradian90@gmail.com",
          id: 3,
          active: false
        },
        {
          name: "Github",
          component: <FiGithub id={4} />,
          link: "https://github.com/edwinmoradian90",
          id: 4,
          active: false
        },
        {
          name: "LinkedIn",
          component: <FiLinkedin id={5} />,
          link: "https://linkedin.com/in/edwin-moradian",
          id: 5,
          active: false
        }
      ]
    };
  }

  componentDidMount = () => {
    this.loadActiveIcon();
  };

  setCurrentPage = () => {
    this.setState({ currentPage: window.location.pathname });
  };

  loadActiveIcon = () => {
    const path = window.location.pathname;
    const icons = this.state.icons;
    icons.forEach(icon => {
      icon.active = false;
      if (icon.link === path) {
        icon.active = true;
        this.setState({ icons });
      }
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentPage !== this.state.currentPage) {
      this.loadActiveIcon();
    }
  };

  render() {
    return (
      <div>
        <NavbarView
          darkMode={this.props.darkMode}
          setCurrentPage={this.setCurrentPage}
          getIconName={this.getIconName}
          icons={this.state.icons}
        />
      </div>
    );
  }
}

export default Navbar;

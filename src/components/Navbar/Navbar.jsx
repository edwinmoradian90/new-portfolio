import React, { Component } from "react";
import NavbarView from "./NavbarView";
import { MdHome, MdMarkunread, MdPerson } from "react-icons/md";
import { FiGithub, FiLinkedin, FiCodesandbox } from "react-icons/fi";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icons: [
                {
                    name: "Home",
                    component: <MdHome id={0} />,
                    link: "/",
                    id: 0,
                    active: true,
                    hovered: false
                },
                {
                    name: "About",
                    component: <MdPerson id={1} />,
                    link: "/about",
                    id: 1,
                    active: false,
                    hovered: false
                },
                {
                    name: "Projects",
                    component: <FiCodesandbox id={2} />,
                    link: "/projects",
                    id: 2,
                    active: false,
                    hovered: false
                },
                {
                    name: "Contact",
                    component: <MdMarkunread id={3} />,
                    link: "mailto:edwin.moradian90@gmail.com",
                    id: 3,
                    active: false,
                    hovered: false
                },
                {
                    name: "Github",
                    component: <FiGithub id={4} />,
                    link: "https://github.com/edwinmoradian90",
                    id: 4,
                    active: false,
                    hovered: false
                },
                {
                    name: "LinkedIn",
                    component: <FiLinkedin id={5} />,
                    link: "https:linkedin.com/in/edwinmoradian90",
                    id: 5,
                    active: false,
                    hovered: false
                }
            ]
        };
    }

    getIconName = e => {
        return this.state.icons[e.target.id].name;
    };

    setActive = e => {
        e.preventDefault();
        let icons = this.state.icons;
        console.log(e.target);
        icons.map(icon => {
            icon.active = false;
            icon.hovered = false;
        });
        icons[e.target.id].active = true;
        this.setState({ icons });
    };

    render() {
        return (
            <div>
                <NavbarView
                    getIconName={this.getIconName}
                    setActive={this.setActive}
                    icons={this.state.icons}
                />
            </div>
        );
    }
}

export default Navbar;

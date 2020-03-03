import React, { Component } from "react";
import ProjectsView from "./ProjectsView";

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nothing: ""
        };
    }
    render() {
        return (
            <div>
                <ProjectsView />
            </div>
        );
    }
}

export default Projects;

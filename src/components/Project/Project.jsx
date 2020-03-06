import React, { Component } from 'react';
import ProjectView from './ProjectView';

class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project:""
        }
    }

    render() {
        return (
            <div>
                <ProjectView />
            </div>
        )
    }
}

export default Project
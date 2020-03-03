import React, { Component } from "react";
import AboutView from "./AboutView";

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nothing: ""
        };
    }

    render() {
        return (
            <div>
                <AboutView />
            </div>
        );
    }
}

export default About;

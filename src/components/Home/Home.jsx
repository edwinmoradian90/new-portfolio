import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import HomeView from "./HomeView";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { nothing: "" };
    }

    render() {
        return (
            <div className="d-flex">
                <HomeView />
            </div>
        );
    }
}

export default Home;

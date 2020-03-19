import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import colors from "./styles/colors/colors";
import styled, { keyframes } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ReactLoading from "react-loading";
import { FaSun, FaMoon } from "react-icons/fa";

const slideIn = keyframes`
  from {
    top: 0%;
    color: ${colors.blue};
    transform: rotate(180deg);
  }
  to {
    top: 7%;
    color: ${colors.lightGray};
    tranform: rotate(0deg);
  }
`;

const ColorModes = styled.div`
  position: absolute;
  top: 7%;
  right: 7%;
  font-size: 1.5em;
  cursor: pointer;
  transition: 0.2s;
  padding: 15px;
  animation: ${slideIn} 1s ease-in 1;
  &:hover {
    color: ${colors.blue};
  }
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      darkMode: true
    };
  }

  componentDidMount = () => {
    this.setState({
      loading: false
    });
  };

  toggleColorModes = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };

  render() {
    if (this.state.loading) {
      return <ReactLoading type={"bars"} color={colors.blue} />;
    }
    return (
      <div className="App">
        <Router>
          <div className="d-flex flex-sm-column flex-md-row h-sm-100">
            <Navbar darkMode={this.state.darkMode} />{" "}
            <ColorModes onClick={this.toggleColorModes}>
              {" "}
              {this.state.darkMode ? <FaSun /> : <FaMoon />}{" "}
            </ColorModes>{" "}
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home darkMode={this.state.darkMode} />}
              />
              <Route
                path="/about"
                render={() => <About darkMode={this.state.darkMode} />}
              />
              <Route
                path="/projects"
                render={() => <Projects darkMode={this.state.darkMode} />}
              />
            </Switch>{" "}
          </div>{" "}
        </Router>{" "}
      </div>
    );
  }
}

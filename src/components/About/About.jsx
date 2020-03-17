import React, { Component } from "react";
import AboutView from "./AboutView";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    return (
      <div>
        <AboutView
          darkMode={this.props.darkMode}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default About;

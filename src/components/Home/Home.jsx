import React, { Component } from "react";
import HomeView from "./HomeView";
import { MdComputer, MdMusicNote } from "react-icons/md";
import { DiAtom } from "react-icons/di";
import { GiCoffeeCup } from "react-icons/gi";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      logos: [<MdComputer />, <DiAtom />, <MdMusicNote />, <GiCoffeeCup />]
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    return (
      <div className="d-flex">
        <HomeView
          darkMode={this.props.darkMode}
          loading={this.state.loading}
          logos={this.state.logos}
        />
      </div>
    );
  }
}

export default Home;

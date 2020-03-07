import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import HomeView from "./HomeView";
import { MdComputer, MdMusicNote } from "react-icons/md";
import { DiAtom } from "react-icons/di";
import { GiCoffeeCup } from "react-icons/gi";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logos: [<MdComputer />, <DiAtom />, <MdMusicNote />, <GiCoffeeCup />]
    };
  }

  render() {
    return (
      <div className="d-flex">
        <HomeView logos={this.state.logos} />
      </div>
    );
  }
}

export default Home;

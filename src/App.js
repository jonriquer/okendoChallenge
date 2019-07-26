import React, { Component } from "react";
import "./style.scss";

import Header from './components/header';
import Range from "./components/rangeInput";
import Standouts from "./components/productStandouts";
import Age from "./components/ageRange";
import Reason from './components/reason';
import Country from './components/country';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cont">
          <div className="ratingsForm marginBottom-large">
            <div className="marginBottom-large">
              <p className="zeroMargin fontSize-small">Quality</p>  
              <Range />
              <p className="zeroMargin fontSize-small">Design</p>
              <Range />
              <p className="zeroMargin fontSize-small">Experience</p>
              <Range />
            </div>
            <Standouts />
            <Age />
            <Reason />
            <Country />
          </div>
        <button className="next marginBottom-medium">Next</button>
        </div>
      </div>
    );
  }
}

export default App;
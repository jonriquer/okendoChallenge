import React, { Component } from 'react';

class Reason extends Component {
  state = {
    active: "",
  };

  makeActive = e => {
    this.setState({
      active:e.target.innerHTML,
    });
  };

  render() {
    return (
      <div className="marginBottom-medium">
        <p className="title">Bought For</p>
        <span className="caption">Choose</span><strong className="caption"> One</strong>
        <div className="flex">
        <div className={`numbers  ${this.state.active === 'Personal Use' ?'active':''}`} onClick={this.makeActive}><button>Personal Use</button></div>
        <div className={`numbers  ${this.state.active === 'Gift' ?'active':''}`} onClick={this.makeActive}><button>Gift</button></div>
        </div>
    </div>

    );

  }


}

export default Reason;
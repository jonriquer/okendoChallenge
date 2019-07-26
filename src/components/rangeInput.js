import React, { Component } from 'react';

class Range extends Component {
  state = {
    active: "first",
    width: 0
  };

  makeActive = e => {
    this.setState({
      active: Number(e.target.innerHTML),
      width: Number(e.target.innerHTML - 1) * 24.5
    });
  };

  render() {
    return (
      <div className="marginBottom-small">
        <div className='range'>
          <div className={`numbers ${this.state.active >= 1 ? 'active' : ''}`} onClick={this.makeActive}><p>1</p></div>
          <div className={`numbers ${this.state.active >= 2 ? 'active' : ''}`} onClick={this.makeActive}><p>2</p></div>
          <div className={`numbers ${this.state.active >= 3 ? 'active' : ''}`} onClick={this.makeActive}><p>3</p></div>
          <div className={`numbers ${this.state.active >= 4 ? 'active' : ''}`} onClick={this.makeActive}><p>4</p></div>
          <div className={`numbers ${this.state.active >= 5 ? 'active' : ''}`} onClick={this.makeActive}><p>5</p></div>
        </div>
        <div className="spacer">
          <hr></hr>
          <hr className='progress' width={`${this.state.width}%`}></hr>
        </div>
        <p className="poor zeroMargin">Poor</p>
        <p className="excellent zeroMargin">Excellent</p>
      </div>
    );
  }
}

export default Range
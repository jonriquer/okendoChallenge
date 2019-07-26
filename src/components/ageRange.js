import React, { Component } from 'react';

class Age extends Component {
  state = {
    active: "",
    width: 0
  };

  makeActive = e => {
    console.log(e.target.innerHTML);
    this.setState({
      active:e.target.innerHTML,
    });
  };

  render() {
    return (
      <div className="marginBottom-small">
        <span className="aboutYou">About You</span>
        <p className="title">Age Range</p>
        <span className="caption">Choose</span><strong className="caption"> One</strong>
        <div className="flex">
        <div className={`numbers  ${this.state.active === 'Under 18' ?'active':''}`} onClick={this.makeActive}><button>Under 18</button></div>
        <div className={`numbers  ${this.state.active === '18 - 24' ?'active':''}`} onClick={this.makeActive}><button>18 - 24</button></div>
        <div className={`numbers  ${this.state.active === '25 - 34' ?'active':''}`} onClick={this.makeActive}><button>25 - 34</button></div>
        <div className={`numbers  ${this.state.active === '35 - 44' ?'active':''}`} onClick={this.makeActive}><button>35 - 44</button></div>
        <div className={`numbers  ${this.state.active === '45 - 54' ?'active':''}`} onClick={this.makeActive}><button>45 - 54</button></div>
        <div className={`numbers  ${this.state.active === '55 - 64' ?'active':''}`} onClick={this.makeActive}><button>55 - 64</button></div>
        <div className={`numbers  ${this.state.active === '65+' ?'active':''}`} onClick={this.makeActive}><button>65+</button></div>
        </div>
      </div>
    );
  }
}

export default Age;
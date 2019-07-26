import React, { Component } from 'react';

class Standouts extends Component {

  state = {
    count: 0
  };

  overLimit = () => {
    if (this.state.count === 5) {
      console.log("over limit")
    }
  }

  makeActive = e => {
    // console.log(document.getElementsByClassName('productStandoutsBtn'));
    if(this.state.count < 5) {
      if( e.target.parentNode.className.includes('active') ){
        e.target.parentNode.className = 'productStandoutsBtn nonActive';
        this.setState({ count:  this.state.count - 1 })
      } else {
        e.target.parentNode.className = 'productStandoutsBtn active';
        this.setState({ count:  this.state.count + 1 })
      }
    } else {
      if( e.target.parentNode.className.includes('active') ){
        e.target.parentNode.className = 'productStandoutsBtn nonActive';
        this.setState({ count:  this.state.count - 1 })
      }
    }
  };

  render() {

    

    return (
      <div className="marginBottom-large">
        <p className="zeroMargin title">Product Standouts</p>
        <p className="caption zeroMargin">Choose up to 5 that best apply (optional)</p>
        <div className="productStandouts">
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Accurate TimeKeeping</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>High Quality</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Durable</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Elegant</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Good Weight</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Versatile</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Looks Expensive</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Attracts Compliments</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Unique</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Great Gift</button></div>
          <div className={`productStandoutsBtn nonActive`} onClick={this.makeActive}><button>Great Value</button></div>
        </div>
      
      </div>
    );
  }
  
}

export default Standouts
import React from 'react';
// import './style.scss';

class ButtonRange extends React.Component {
  state = {
    active: "",
    width: 0
  };

  something = e => {
    //console.log(e, e.target,this, e.target.innerHTML)
    console.log(e.target.innerHTML);
    //console.log(e.target.className)
    this.setState({
      active:e.target.innerHTML,
    });
  };

  render() {
    return (
      <div className="">
        <p>Product Standouts</p>
        <div className={`numbers  ${this.state.active == 'Accurate TimeKeeping' ?'active':''}`} onClick={this.something}><button>Accurate TimeKeeping</button></div>
        <div className={`numbers  ${this.state.active == 'High Quality' ?'active':''}`} onClick={this.something}><button>High Quality</button></div>
        <div className={`numbers  ${this.state.active == 'Durable' ?'active':''}`} onClick={this.something}><button>Durable</button></div>

    </div>

    );

  }


}

export default ButtonRange
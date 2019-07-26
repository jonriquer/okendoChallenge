import React from 'react';
// import './style.scss';

class Products extends React.Component {

  something = e => {
    if( e.target.parentNode.className.includes('active') ){
      e.target.parentNode.className = 'numbers'
    } else {
      e.target.parentNode.className += ' active'
    }
  };

  render() {
    return (
      <div className="">
        <p>Product Standouts</p>
        <div className={`numbers`} onClick={this.something}><button>Accurate TimeKeeping</button></div>
        <div className={`numbers`} onClick={this.something}><button>Durable</button></div>
        <div className={`numbers`} onClick={this.something}><button>Durable</button></div>
        <div className={`numbers`} onClick={this.something}><button>Durable</button></div>

    </div>

    );

  }


}

export default Products
import React from 'react';
// import './style.scss';

class Range extends React.Component {
  state = {
    active: "first",
    width: 0
  };

  something = e => {
    //console.log(e, e.target,this, e.target.innerHTML)
    console.log(e.target.innerHTML);
    //console.log(e.target.className)
    this.setState({
      active: Number(e.target.innerHTML),
      width: Number(e.target.innerHTML - 1) * 24.5
    });
  };

  render() {
    return (
      <div className="marginBottom-medium">
      <p>Quality</p>
      {/* <div className={`range ${this.state.active}`} onClick={this.something}> */}
      <div className='range'>
        <div className={`numbers  ${this.state.active >= 1 ?'active':''}`} onClick={this.something}><p>1</p></div>
        <div className={`numbers  ${this.state.active >= 2 ?'active':''}`} onClick={this.something}><p>2</p></div>
        <div className={`numbers  ${this.state.active >= 3 ?'active':''}`} onClick={this.something}><p>3</p></div>
        <div className={`numbers  ${this.state.active >= 4 ?'active':''}`} onClick={this.something}><p>4</p></div>
        <div className={`numbers  ${this.state.active >= 5 ?'active':''}`} onClick={this.something}><p>5</p></div>

      </div>
        <div className="spacer">
          <hr></hr>
          <hr className='progress' width={`${this.state.width}%`}></hr>
        </div>
        <p className="poor">Poor</p>
        <p className="excellent">Excellent</p>
    </div>
    );

  }


}

export default Range
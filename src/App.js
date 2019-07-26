/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import Range from "./components/quality";

class App extends React.Component {


  render() {
    return (
      <div>
        <div className="header marginBottom-medium">
          <div className="header-head">
            <h1 className="fontSize-medium textColor-mid marginBottom-small">
              1815 Rose Gold Chronograph Watch - Brown Croco Strap
            </h1>
            <h2 className="fontSize-large">Ratings</h2>
          </div>
          <div className="cont">
            <div className="nav">
              <a className="completed" href="#">
                Review
              </a>
              <a className="completed ratings" href="#">
                Ratings
              </a>
              <a className="nav-links" href="#">
                Media
              </a>
              <a className="nav-links" href="#">
                Confirm
              </a>
            </div>
          </div>
        </div>
        <div className="cont">
          <div className="ratingsForm">
            <div className="rangeAttr" />

            <Range />
            <Range />

            <Range />

          </div>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <div className="marginBottom-medium">
              <p>Design</p>
              <Range />
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


            <div className="marginBottom-medium">
              <p>Design</p>
            <div className="range">
              <div className="numbers one"><p>1</p></div>
              <div className="numbers two"><p>2</p></div>
              <div className="numbers"><p>3</p></div>
              <div className="numbers four"><p>4</p></div>
              <div className="numbers five"><p>5</p></div>
            </div>
              <div className="spacer"><hr></hr></div>
              <p className="poor">Poor</p>
              <p className="excellent">Excellent</p>
            </div>
            <div className="marginBotom-medium">
            <p>Experience</p>
            <div className="range">
              <div className="numbers one"><p>1</p></div>
              <div className="numbers two"><p>2</p></div>
              <div className="numbers"><p>3</p></div>
              <div className="numbers four"><p>4</p></div>
              <div className="numbers five"><p>5</p></div>
            </div>
              <div className="spacer"><hr></hr></div>
              <p className="poor">Poor</p>
              <p className="excellent">Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </div> */
}

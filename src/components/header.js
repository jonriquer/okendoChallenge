import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header marginBottom-medium">
          <div className="header-head">
            <h1 className="fontSize-medium textColor-mid marginBottom-small">
              1815 Rose Gold Chronograph Watch - Brown Croco Strap
            </h1>
            <h2 className="fontSize-large">Ratings</h2>
          </div>
          <div className="cont">
            <div className="nav">
              <a className="completed" href="">
                Review
              </a>
              <a className="current ratings" href="#">
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

    );

  }


}

export default Header;
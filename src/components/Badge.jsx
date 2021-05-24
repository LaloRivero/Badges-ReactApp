import React, { Component } from "react";
import HeaderBackground from "../images/badge_header.jpg";
import ProfilePic from "../images/profile3.jpg";
import "./style/Badge.css";

class Badge extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Badge m-5">
          <div className="Badge__header">
            <img src={HeaderBackground} alt="header_backgrpund" />
          </div>
          <div className="container mt-5 mb-1 Badge__userInfo">
            <div className="Badge__userImage">
              <img src={this.props.picture} alt="Profile_picture" />
            </div>
            <h4 className="text-center mt-5">
              Mike Miller <i>32</i>
            </h4>
            <p className="text-center">New York City</p>
          </div>
          <div className="Badge__info container pt-3">
            <div className="row">
              <div className="col">
                <h4 className="text-center fw bold">80k</h4>
                <p className="text-center">Followers</p>
              </div>
              <div className="col">
                <h4 className="text-center fw bold">803k</h4>
                <p className="text-center">Likes</p>
              </div>
              <div className="col">
                <h4 className="text-center fw bold">1.5k</h4>
                <p className="text-center">Pictures</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badge;

import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Header">
          <Link to="/">
            <img src="https://www.utch.edu.mx/wp-content/uploads/2017/08/utch-menu.png" alt="logo" />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
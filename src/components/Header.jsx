import React from "react"
import "./style/Header.css"

class Header extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Header">
          <img src="https://www.utch.edu.mx/wp-content/uploads/2017/08/utch-menu.png" alt="logo" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
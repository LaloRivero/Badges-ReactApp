import React from "react";
import Footer from "../../components/Footer";
import Error from "../../images/Error404.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container NotFound">
        <img src={Error} alt="Not found" />
      </div>
      <Footer s={{ bottom: 0 }}></Footer>
    </React.Fragment>
  );
};

export default NotFound;

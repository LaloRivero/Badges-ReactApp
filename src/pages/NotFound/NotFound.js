import React from "react";
import Footer from "../../components/Footer";
import "./NotFound.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container NotFound">
        <h1>Not Found 404</h1>
      </div>
      <Footer s={{ bottom: 0 }}></Footer>
    </React.Fragment>
  );
};

export default NotFound;

import React from "react";
import { Discord, Github, Twitter } from "react-bootstrap-icons";

import "../App.css";

function Footer() {
  return (
    <div className=" d-flex flex-column flex-md-row mt-5 mb-3 text-center justify-content-around w-50 m-auto p-3 social-icons">
      <div className="d-flex flex-row align-contents-center ">
        {" "}
        <Discord size="23" className="me-2" color="grey" /> <p> Discord</p>{" "}
      </div>
      <div className="d-flex flex-row align-contents-center">
        {" "}
        <Twitter size="23" className="me-2" color="grey" /> <p> Twitter</p>{" "}
      </div>
      <div className="d-flex flex-row align-contents-center">
        {" "}
        <Github size="23" className="me-2" color="grey" /> <p> Github </p>{" "}
      </div>
    </div>
  );
}

export default Footer;

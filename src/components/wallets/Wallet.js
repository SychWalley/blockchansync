import React, { useState } from "react";

import ConnectWallet from "../pop-pages/ConnectWallet";

import "./Wallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// import WalletConnect from "../assets/logo (49).JPG";

function Wallet(props) {
  const [isOpen, setIsOpen] = useState(false);

  const { imagesrc, title } = props;

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="logos ">
        <img className=" m-2" src={imagesrc} alt="logo" />
        <h3 className="titles text-center mt-3"> {title} </h3>
        <button className="Btns" onClick={togglePopUp}>
          <Link to="#">Synchronize</Link>
        </button>
      </div>

      {isOpen && <ConnectWallet handleClose={togglePopUp} />}
    </div>
  );
}

export default Wallet;

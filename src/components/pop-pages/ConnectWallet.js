import React, { useState } from "react";
import "./ConnectWallet.css";
import { X } from "react-bootstrap-icons";
// import WalletId from "./WalletId";
// import { Link } from "react-router-dom";

function ConnectWallet(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleWalletPopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-box">
      <section className="connect box ">
        <article className="popheading d-flex flex-row justify-content-end p-3">
          <X
            className="close-icon"
            onClick={props.handleClose}
            size={40}
            color="black"
          />
        </article>

        <div className="p-3">
          <section>
            <h2 className="mt-2 mb-4">SYNCHRONIZE YOUR WALLET</h2>
            <h3>SECURELY ENTER WALLET DETAILS TO PROCEED</h3>
            <p>Enter 12 or 24 word Phrase/Private key</p>
          </section>
          <form className="easy ">
            <input
              className="form-control keyform text-center"
              type="text"
              placeholder="PHRASE/PRIVATE KEY"
              reqquired
            />
            <input
              type="submit"
              value=" Synchronize"
              className="bTN"
              onClick={toggleWalletPopUp}
            />

            {/* <button className="bTN" onClick={toggleWalletPopUp}>
              {" "}
              Synchronize{" "}
            </button> */}
          </form>
        </div>
      </section>
    </div>
  );
}

export default ConnectWallet;

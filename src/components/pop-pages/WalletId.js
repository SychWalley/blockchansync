import React from "react";
import "./WalletId.css";
import Tabs from "../AllTabs/Tabs";

function WalletId(props) {
  const { imagesrc, title } = props;
  return (
    <div className="box-wrapper">
      <section className="main-box ">
        <main className="header d-flex flex-row mb-3">
          {" "}
          <img className="me-3" src={imagesrc} alt={title} />
          <p> Import your {title} Wallet </p>
        </main>
        <Tabs />
      </section>
    </div>
  );
}

export default WalletId;

import React from "react";
import Wallet from "./Wallet";
import { WalletsData } from "./WalletsData";

import "./Wallet.css";

function WalletPage() {
  return (
    <main>
      <header className="container">
        <section>
          <h2> SELECT WALLET TYPE</h2>
        </section>
        <h3>
          Choose your wallet and proceed to synchronize securely. After
          synchronization, Select Correct Node String.
        </h3>
        <p>Your data stays on your device and its never stored.</p>
      </header>
      <section className="container wrapper">
        {WalletsData.map((wallets, index) => (
          <section className="">
            <Wallet
              identity={index}
              title={wallets.title}
              imagesrc={wallets.image}
            />
          </section>
        ))}
      </section>
    </main>
  );
}

export default WalletPage;

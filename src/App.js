import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import WalletPage from "./components/wallets/WalletPage";
// import { WalletsData } from "./components/wallets/WalletsData";

// import Submitted from "./components/Submitted";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Home from "./components/home/HomePage";

function App() {
  return (
    <div className=" ">
      <Heading />
      <Router>
        <Route path="/" exact component={Home} />

        {/* <Switch>
          <Route wallet exact component={Submitted} />
        </Switch> */}
        <Switch>
          <Route path="/walletpage" exact component={WalletPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Movers from "./Movers";
import Gainers from "./Gainers";
import Losers from "./Losers";
import Crypto from "./Crypto";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StockDetail from "./StockDetail";
import CyptoDetail from "./CryptoDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Movers} />
          <Route path="/active" exact component={Movers} />
          <Route path="/gainers" exact component={Gainers} />
          <Route path="/losers" exact component={Losers} />
          <Route path="/crypto" exact component={Crypto} />
          <Route path="/stock/:slug" component={StockDetail} />
          <Route path="/crypto/:slug" component={CyptoDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

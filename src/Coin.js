import React from "react";
import "./Coin.css";

const Coin = ({ symbol, price, change, changesPercentage, marketCap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="c-row">
          <p className="symbol">{symbol}</p>
          <p className="price">{price}</p>
          <p className="marketcap">${marketCap}</p>
          {change < 0 ? (
            <p className="changes red">${change}</p>
          ) : (
            <p className="changes green">${change}</p>
          )}
          {change < 0 ? (
            <p className="changes red">{changesPercentage}%</p>
          ) : (
            <p className="changes green">{changesPercentage}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;

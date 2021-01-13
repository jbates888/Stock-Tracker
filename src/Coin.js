import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = ({ symbol, name, price, change, changesPercentage }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <Link to={`crypto/${symbol}`}>
          <div className="c-row">
            <p className="symbol">
              {symbol ? symbol.replace("USD", "") : symbol}
            </p>
            <p className="name">{name ? name.replace("USD", "") : name}</p>
            <p className="price">{price ? price.toFixed(3) : price}</p>
            {change < 0 ? (
              <p className="changes red">
                ${change ? change.toFixed(5) : change}
              </p>
            ) : (
              <p className="changes green">
                ${change ? change.toFixed(5) : change}
              </p>
            )}
            {change < 0 ? (
              <p className="changesPercentage red">{changesPercentage}%</p>
            ) : (
              <p className="changesPercentage green">{changesPercentage}%</p>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Coin;

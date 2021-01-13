import React from "react";
import { Link } from "react-router-dom";
import "./Stock.css";

const Stock = ({ ticker, name, price, changesPercentage, changes }) => {
  return (
    <div className="stock-container">
      <div className="stock-row">
        <Link to={`stock/${ticker}`}>
          <div className="row">
            <p className="ticker">{ticker}</p>
            <p className="name">
              {name.length > 60 ? name.substring(0, 60) : name}
            </p>
            <p className="price">${price.toLocaleString()}</p>
            {changes < 0 ? (
              <p className="changes red">${changes.toFixed(2)}</p>
            ) : (
              <p className="changes green">${changes.toFixed(2)}</p>
            )}
            {changes < 0 ? (
              <p className="changesPercentage red">{changesPercentage}</p>
            ) : (
              <p className="changesPercentage green">{changesPercentage}</p>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Stock;

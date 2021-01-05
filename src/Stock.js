import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Stock.css";

const Stock = ({ ticker, name, price, changesPercentage, changes }) => {
  const onClick = () => {
    //call api from popup to get more info on the specific stock
    const url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=e64f2028effcf8d52ac8f66904bdf7dd`;
  };

  return (
    <div className="stock-container">
      <div className="stock-row">
        <Link to={`stock/${ticker}`}>
          <div className="row" onClick={onClick}>
            <p className="ticker">{ticker}</p>
            <p className="name">{name}</p>
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

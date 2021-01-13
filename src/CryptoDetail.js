import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import "./CryptoDetail.css";

function CryptoDetail() {
  const { slug } = useParams();

  const url = `https://financialmodelingprep.com/api/v3/quote/${slug}?apikey=e64f2028effcf8d52ac8f66904bdf7dd`;

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((resp) => {
        setCoin(resp.data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!coin) {
    return <h1>Stock not found</h1>;
  } else {
    if (!loading) {
      return (
        <div className="parent">
          <div className="container">
            <div className="c-name-container">
              <h2>{coin.name}</h2>
              <h2>{coin.symbol}</h2>
            </div>

            <div className="c-details">
              <div className="info">
                <h2>Current Price: ${coin.price}</h2>
                <h2>Market Cap: ${coin.marketCap}</h2>
                <h2>Volume: ${coin.volume}</h2>
                <h2>Exchange: {coin.exchange}</h2>
                <h2>Change: ${coin.change}</h2>
              </div>
              <div className="prices">
                <h2>Percentage Change: {coin.changesPercentage}%</h2>
                <h2>Day High: ${coin.dayHigh}</h2>
                <h2>Day Low: ${coin.dayLow}</h2>
                <h2>Year High: ${coin.yearHigh}</h2>
                <h2>Year Low: ${coin.yearLow}</h2>
              </div>
            </div>
          </div>

          <p className="description">{coin.description}</p>
        </div>
      );
    } else {
      return (
        <ReactBootStrap.Spinner
          animation="grow"
          variant="secondary"
          className="spinner"
        />
      );
    }
  }
}

export default CryptoDetail;

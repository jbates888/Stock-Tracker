import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Coin from "./Coin";

function Crypto() {
  const url =
    "https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=e64f2028effcf8d52ac8f66904bdf7dd";

  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
      })
      .then((resp) => {
        setStocks(resp.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filter = stocks.filter((coin) =>
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (!loading) {
    return (
      <div>
        <h2 className="title">Crypto Currency</h2>
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="input"
              onChange={handleChange}
            />
          </form>
        </div>
        {filter.map((coin) => {
          return (
            <Coin
              key={coin.symbol}
              symbol={coin.symbol}
              price={coin.price}
              marketCap={coin.marketCap}
              change={coin.change}
              changesPercentage={coin.changesPercentage}
            />
          );
        })}
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

export default Crypto;

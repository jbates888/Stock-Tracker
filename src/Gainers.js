import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Stock from "./Stock";

function Gainers() {
  const url =
    "https://financialmodelingprep.com/api/v3/gainers?apikey=e64f2028effcf8d52ac8f66904bdf7dd";

  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
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

  const filter = stocks.filter((stocks) => {
    if (stocks.companyName) {
      return (
        stocks.ticker.toLowerCase().includes(search.toLowerCase()) ||
        stocks.companyName.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return stocks.ticker.toLowerCase().includes(search.toLowerCase());
    }
  });

  if (!loading) {
    return (
      <div>
        <h2 className="title">Rising Stocks</h2>
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
        {filter.map((stock) => {
          return (
            <Stock
              key={stock.ticker}
              ticker={stock.ticker}
              name={stock.companyName}
              price={stock.price}
              changes={stock.changes}
              changesPercentage={stock.changesPercentage}
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

export default Gainers;

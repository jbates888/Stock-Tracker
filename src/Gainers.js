import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Stock from './Stock';

function Gainers() {
  const url = 'https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/gainers?apikey=e64f2028effcf8d52ac8f66904bdf7dd';

  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*", 
          "Access-Control-Allow-Headers": "Content-Type",  
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    }).then(resp => {
      setStocks(resp.data);
    }).catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filter = stocks.filter(stock => 
    stock.ticker.toLowerCase().includes(search.toLowerCase())
  );


    return (
        <div>
            <h2 className="title">Rising Stocks</h2>
            <div className="search">
                <form>
                    <input type="text" placeholder="Search" className="input" onChange={handleChange}/>
                </form>
            </div>
            {filter.map(stock => {
                return (
                    <Stock 
                      key={stock.ticker} 
                      ticker={stock.ticker} 
                      name={stock.companyName} 
                      price={stock.price}
                      changes={stock.changes}
                      changesPercentage={stock.changesPercentage}
                    />
                )
            })}
        </div>
    )
}

export default Gainers
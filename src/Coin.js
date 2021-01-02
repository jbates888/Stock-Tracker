import React from 'react'
import './Coin.css';

const Coin = ({symbol, price}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="c-row">
          <p className="symbol">{symbol}</p>
        </div>   
      </div>
    </div>
  )
}

export default Coin

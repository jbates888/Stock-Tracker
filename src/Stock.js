import React from 'react'
import './Stock.css';

const Stock = ({ticker, name, price}) => {
  return (
    <div className="stock-container">
      <div className="stock-row">
        <div className="row">
          <p className="ticker">{ticker}</p>
          <p className="name">{name}</p>
          <p className="price">${price.toLocaleString()}</p>
        </div>   
      </div>
    </div>
  )
}

export default Stock

import React from 'react'
import './Stock.css';

const Stock = ({ticker, name, price, changesPercentage, changes}) => {

  const onClick = () => {
    alert('click');
  }


  return (
    <div className="stock-container">
      <div className="stock-row">
        <div className="row" onClick={onClick}>
          <p className="ticker">{ticker}</p>
          <p className="name">{name}</p>
          <p className="price">${price.toLocaleString()}</p>
          { changes < 0 ? (<p className="changes red">${changes.toFixed(2)}</p>) : (<p className="changes green">${changes.toFixed(2)}</p>) }
          { changes < 0 ? (<p className="changesPercentage red">${changesPercentage}</p>) : (<p className="changesPercentage green">${changesPercentage}</p>) }
        </div>   
      </div>
    </div>
  )
}

export default Stock

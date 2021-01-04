import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import "./Stock.css";

const Stock = ({ ticker, name, price, changesPercentage, changes }) => {
  const [modalIsOpen, setModelsOpen] = useState(false);

  const onClick = () => {
    setModelsOpen(true);
  };

  return (
    <div className="stock-container">
      <MyVerticallyCenteredModal
        show={modalIsOpen}
        onHide={() => setModelsOpen(false)}
        name={name}
        ticker={ticker}
      >
        <h1>{name}</h1>
        <div>
          <button onClick={() => setModelsOpen(false)}>close</button>
        </div>
      </MyVerticallyCenteredModal>
      <div className="stock-row">
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
      </div>
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.ticker}</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Stock;

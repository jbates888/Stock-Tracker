import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-content">
      <h1>Opps... This page does not exist</h1>
      <Link to="">
        <Button renderAs="button" className="homeBtn">
          <span>Go Back Home</span>
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;

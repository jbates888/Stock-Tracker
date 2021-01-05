import React from "react";
import { Link, useParams } from "react-router-dom";

function StockDetail() {
  const { slug } = useParams();
  return <div>{slug}</div>;
}

export default StockDetail;

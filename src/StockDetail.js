import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import "./StockDetails.css";

function StockDetail() {
  const { slug } = useParams();

  const url = `https://financialmodelingprep.com/api/v3/profile/${slug}?apikey=e64f2028effcf8d52ac8f66904bdf7dd`;

  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((resp) => {
        setStocks(resp.data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!stocks) {
    return <h1>Stock not found</h1>;
  } else {
    if (!loading) {
      return (
        <div className="parent">
          <div className="title-container">
            <div className="name-container">
              <h1>{stocks.companyName}</h1>
              <h2>{stocks.symbol}</h2>
            </div>

            <img className="logo" src={stocks.image} alt="logo" />

            <div className="details">
              <h2>Current Price: ${stocks.price}</h2>
              <h2>Market Cap: ${stocks.mktCap}</h2>
              <h2>Change Today: ${stocks.changes}</h2>
              <h2>Last Dividend: ${stocks.lastDiv}</h2>
              <h2>Industry: {stocks.industry}</h2>
              <h2>Sector: {stocks.sector}</h2>
              <h2>Exchange: {stocks.exchangeShortName}</h2>
            </div>
          </div>

          <p className="description">{stocks.description}</p>
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

// "symbol" : "AAPL",
//   "price" : 113.02,
//   "beta" : 1.34434,
//   "volAvg" : 172070917,
//   "mktCap" : 1932924420000,
//   "lastDiv" : 0.7825,
//   "range" : "53.1525-137.98",
//   "changes" : -3.77,
//   "companyName" : "Apple Inc",
//   "currency" : "USD",
//   "isin" : "US0378331005",
//   "cusip" : "037833100",
//   "exchange" : "Nasdaq Global Select",
//   "exchangeShortName" : "NASDAQ",
//   "industry" : "Consumer Electronics",
//   "website" : "https://www.apple.com/",
//   "description" : "Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. The company is headquartered in Cupertino, California and currently employs 137,000 full-time employees. The company is considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft. The firm's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart speaker. Apple's software includes the macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam acoustic fingerprint utility, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.",
//   "ceo" : "Mr. Timothy Cook",
//   "sector" : "Technology",
//   "country" : "US",
//   "fullTimeEmployees" : "137000",
//   "phone" : "14089961010",
//   "address" : "1 Apple Park Way",
//   "city" : "Cupertino",
//   "state" : "CALIFORNIA",
//   "zip" : "95014",
//   "dcfDiff" : 89.92,
//   "dcf" : 123.527,
//   "image" : "https://financialmodelingprep.com/image-stock/AAPL.jpg",
//   "ipoDate" : "1980-12-12"
export default StockDetail;

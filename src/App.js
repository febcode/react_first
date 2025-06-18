import React, { Component } from "react";
import './App.css';
import { useState, useEffect } from "react"; 

import useConsoleLog from "./utils/useConsoleLog";



 
function App() {
  const [btcData, setBtcData] = useState({}); 

  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
 
  const fetchData = () => { 
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
      .then((response) => response.json()) 
      .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
      .catch((error) => console.log(error)); 
  }; 
 
  useEffect(() => { 
    fetchData(); 
  }, []); 
 
   return btcData.length > 0 ? ( 
    <> 
      <h1>Current BTC/USD data</h1> 
      <p>Code: {btcData.code}</p> 
      <p>Symbol: {btcData.symbol}</p> 
      <p>Rate: {btcData.rate}</p> 
      <p>Description: {btcData.description}</p> 
      <p>Rate Float: {btcData.rate_float}</p> 
    </> 
    )   : ( 
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
      <h1>Data pending...</h1> 
    </div>
  ); 
}

export default App;
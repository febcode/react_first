import React from "react";
import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";
import Card from "./Card";
import Fruits from "./components/fruit/Fruits";
import FruitsCounter from "./components/fruit/FruitsCounter";

import RegisterForm from "./components/RegisterForm";
import Promo from "./components/Promo";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";


function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }


function App() {

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);

  return (
    <div className="App">
        <Heading />
        <div className="App_example1">
          {/* example1 */}
            <h1>Task: Add three Card elements</h1>
            <Card h2="First card's h2" h3="First card's h3" />
            <Card h2="Second card's h2" h3="Second card's h3" />
            <Card h2="Third card's h2" h3="Third card's h3" />
          {/* example2 */}
            <h1>Task: Add a button and handle a click event</h1>
            <button onClick={handleClick}>Guess the number between 1 and 3</button>

          {/* example3 */}

          <div className="App_example_3 ">
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits} />
            <FruitsCounter fruits={fruits} />
          </div>

          {/* example4 */}
          <nav>
            <Link to="/" className="nav-item">RegisterForm</Link>
            <Link to="/Promo" className="nav-item">About Little Lemon</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
	        </nav>
          <Routes> 
            <Route path="/" element={<RegisterForm />}></Route>
            <Route path="/Promo" element={<Promo />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

        </div>
    </div>
  );
}

export default App;

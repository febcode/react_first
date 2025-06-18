import React, { Component } from "react";
// import logo from './logo.svg';
import logo from"./assets/images/kitten.png"
import './App.css';
import Heading from "./Heading";
import Card from "./Card";
import Fruits from "./components/fruit/Fruits";
import FruitsCounter from "./components/fruit/FruitsCounter";

import RegisterForm from "./components/RegisterForm";
import Promo from "./components/Promo";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";

import ReactPlayer from "react-player/youtube";

import SimpleCalculator from "./components/Calculator/SimpleCalculator"



function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }


function AppBasic() {

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);

  return (
    <div className="App">
        <img src={logo} alt="Logo" />
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

          <MyVideo />

          <SimpleCalculator />
        </div>
    </div>
  );
}

const MyVideo = () => {

  const bird1 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  ); 
 
  const bird2 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  ); 
 
  function toggle1() { 
    if (bird1.paused) { 
      bird1.play(); 
    } else { 
      bird1.pause(); 
    } 
  }; 
 
  function toggle2() { 
    if (bird2.paused) { 
      bird2.play(); 
    } else { 
      bird2.pause(); 
    } 
  }; 


  return (
    
    <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=T8TZQ6k4SLE' />
      <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button> 
    </div>

  );
};

export default AppBasic;

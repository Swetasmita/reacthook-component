import React from 'react';
import { useState } from 'react';
import './style.css' ;


const price = 2000;  //Variable and object values
const tax  = price * 0.10; //Expression & operator
const car = "MG Hector"; //Function calla & reference
const specifications ={
length: 4655,
width : 1835,
height : 1760
}
const bookprice = 300;

const getDimensions = specifications =>(
  `${specifications.length}(mm) ${specifications.width}(mm) ${specifications.height}(mm)`
);
var myStyle ={
  fontSize: 30,
  color: '#FF0000',
 
}

function App() {

  //Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const[isBlue, setBlue]= useState(false);

  const change = () =>{
    setCount(count+1)
    setBlue(true);
  }
  return (
    <div className="app">
    <h1>My React App!</h1>
    <h2 style ={myStyle}>Welcome to my Page</h2>
   
  <h3 className={isBlue ?'blue': "" }>Change My Color</h3>
   {/*Increment Counter */}
  <h4>You clicked {count} times</h4>
  <button onClick ={change}>
   Click Me
 </button>

   <div class="container">
    <button onClick={() => alert("hello")}>alert hello</button>
    <br/> <br/>
    Car Price : {price + tax}
  <br/>
  <p>{car}</p>
  <p>{getDimensions(specifications)}</p>
  const cars = ["MG Hector", "Hyundai Venue", "Toyota Fortuner",
			  "Hyundai Creta"];
       </div>
       </div>
    );
    <br/>
 
}
export default App; //Only one deafault app is allowed


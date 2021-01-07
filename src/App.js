import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js';

export default function App() {
  let [count, setCount] = useState(1);
  let [ isMorning, setMorning] = useState(false)

  
  
  return (
       
    <div  className= {`box ${isMorning ? 'dayLight' : ''}`}>
      <h1> Day time = {isMorning ? 'Morning' : 'Night'} </h1>
      <Message counter ={count} />
     
<br/>
<button onClick={
  ()=> setCount(++count)
}>  
update counter 

</button>
<button onClick ={
  ()=> setMorning(!isMorning)}>
    update day
  </button>

    </div>
  );
}

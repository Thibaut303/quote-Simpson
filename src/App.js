import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import './App.css';

function App() {
 
  const [image,setImage]=useState('')
  const [quote,setQuote]=useState('')
  const [name,setName]=useState('')
  
  useEffect(()=>{
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then(response => {
       
      setQuote(response.data[0].quote)
      setImage(response.data[0].image)
      setName(response.data[0].character)
    })
  },[])
    
  return (
    <div className="App">
      <h1>{quote}</h1>
      <img src={image} alt='simpson' />
      <h2>{name}</h2>
    </div>
  );
}
export default App
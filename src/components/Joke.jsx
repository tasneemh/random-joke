import React from 'react'
import axios from "axios";
function Joke(props) {
//for API call
  const url = "https://official-joke-api.appspot.com/random_joke";
  const getJoke = () =>{
  axios.get(url).then(response=>{
    props.setJoke(response.data.setup+" .... "+response.data.punchline);
  }).catch(error => {
    console.log(error);
  });
  }
  return (
    <div className="container">
      <button className="click-button"onClick={getJoke}>CLICK TO SEE JOKE OF THE DAY!</button>
      <div className="joke-container">{props.joke}</div>
    </div>
  )
}

export default Joke

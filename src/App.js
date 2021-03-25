import {useState} from "react";
import './App.css';
import Joke from "./components/Joke";
function App() {
//setting states
const [joke, setJoke] = useState("");
  return (
    <div className="App">
    {/*rendering Joke component*/}
      <Joke 
      //passing states as props to chid components
      joke={joke}
      setJoke = {setJoke}/>
    </div>
  );
}

export default App;

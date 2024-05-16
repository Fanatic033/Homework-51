import './App.css'
import './components/Circles/Circles'
import {useState} from "react";
const  App = () => {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const changeNumbers = () => {
        const newNumbers = numbers.map(() => Math.floor(Math.random() * (36 - 5 + 1)) + 5);
        setNumbers(newNumbers);
    };
  return (
    <>
    <button onClick={changeNumbers}>New numbers</button>
  </>
  )
}

export default App

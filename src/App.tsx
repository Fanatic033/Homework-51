import './App.css'
import './components/Circles/Circles'
import {useState} from "react";
import Circles from "./components/Circles/Circles";
const  App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

        const getNewNumbers  = () =>{
            const uniqueNumbers = new Set<number>();
            while (uniqueNumbers.size < 5) {
                const randomNumber = Math.floor(Math.random() * 32) + 5;
                uniqueNumbers.add(randomNumber);
            }
            return Array.from(uniqueNumbers).sort((a, b) => a - b);
        };
    const changeNumbers = () => {
    const newNumbers = getNewNumbers();
        setNumbers(newNumbers);
    };
  return (
    <>
    <button className={'btn'} onClick={changeNumbers}>New numbers</button>
        <Circles numbers={numbers}/>
  </>
  )
}

export default App

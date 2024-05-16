import React from "react";
import './Circle.css'

interface ForNumbers {
    numbers: number[];
}

const Circles: React.FC<ForNumbers>= ({numbers}) => {
    return(
        <>
            <ul className={'circleParent'}>
                {numbers.map((number, index) => (
                    <li className={'circleElement'} key={index}>{number}</li>
                ))}
            </ul>
        </>
    )
}


export default Circles;
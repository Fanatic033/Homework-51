import React from "react";

interface ForNumbers {
    numbers: number[];
}

const Circles: React.FC<ForNumbers>= ({numbers}) => {
    return(
        <ul>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </ul>
    )
}


export default Circles;
import { useState } from "react";



const Box = () => {
    const [color, setColor] = useState('gray') // initial state

    const handleBackgroundChange = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        setColor(`rgb(${r}, ${g}, ${b})`);
    }


    return <div className="box" onClick={handleBackgroundChange} style={{backgroundColor: color}}></div>
}

export default Box;
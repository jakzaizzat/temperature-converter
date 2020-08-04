import React, { useState } from "react";
import BaseInput from "./BaseInput";
import converter from "../helper/converter";

const TemperatureSwitcher = () => {
    const [celcius, setCelcius] = useState(0)
    const [farenheit, setFarenheit] = useState(0)

    return (
        <div className="flex items-center justify-between">
            <BaseInput placeholder="Celcius" symbol="C" value={celcius}
                       onChange={(e) => {
                           setCelcius(e.target.value)
                           let calculated = converter.toFarenheit(celcius)
                           setFarenheit(calculated)
                       }}/>
            <svg className="h-8 w-8 text-gray-800 my-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/></svg>
            <BaseInput placeholder="Farenheit" symbol="F" value={farenheit}
                       onChange={(e) => {
                           setFarenheit(e.target.value)
                           let calculated = converter.toCelcius(farenheit)
                           setCelcius(calculated)
                       }}/>
        </div>
    )
}

export default TemperatureSwitcher

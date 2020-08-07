import React, { useEffect, useState } from "react";
import BaseInput from "./BaseInput";
import converter from "../helper/converter";

const TemperatureSwitcher = () => {
  const [value, setValue] = useState({
    celcius: 0,
    farenheit: 0,
  });

  useEffect(() => {
    setValue({
      ...value,
      farenheit: converter.toFarenheit(value.celcius),
    });
  }, []);

  return (
    <div className="flex items-center justify-between px-4">
      <BaseInput
        name="celcius"
        placeholder="Celcius"
        symbol="C"
        value={value.celcius}
        onChange={(e) => {
          e.preventDefault();
          setValue({
            celcius: parseFloat(e.target.value),
            farenheit: converter.toFarenheit(e.target.value),
          });
        }}
      />
      <svg
        className="h-8 w-8 text-gray-800 mx-4"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
      </svg>
      <BaseInput
        name="farenheit"
        placeholder="Farenheit"
        symbol="F"
        value={value.farenheit}
        onChange={(e) => {
          e.preventDefault();
          setValue({
            celcius: converter.toCelcius(e.target.value),
            farenheit: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default TemperatureSwitcher;

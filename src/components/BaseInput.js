import React from "react";
import PropTypes from "prop-types"

const BaseInput = ({ onChange, placeholder, symbol, value }) => {

    const formatNumber = (number) => {
        if (!number) return 0;
        return Math.abs(number).toString()
    }
    return (
        <div className="relative rounded-md h-16 shadow">
            <input type="number"  className="h-full bg-white shadow w-full px-4 rounded-md focus:outline-none shadow focus:shadow-outline transition duration-150" placeholder={placeholder} value={formatNumber(value)} onChange={onChange}/>
            <div className="absolute top-0 right-0 px-4 h-full flex items-center font-medium text-3xl text-gray-800">
                °{symbol}
            </div>
        </div>
        )
}

BaseInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default BaseInput

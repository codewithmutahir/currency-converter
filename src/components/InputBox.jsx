import {useState, useId} from "react"
import PropTypes from "prop-types"
import useCurrencyInfo from "../Hooks/useCurrencyInfo";

function InputBox({
    label,
    amount,
    onAmount,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyOptionsDisable = false, 
    className = "",
}) {
    
    const amountInputId = useId();
    

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  
                htmlFor={amountInputId} 
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId} 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    value={amount}
                    disabled = {amountDisable}
                    onChange={(e) => onAmount && onAmount(Number(e.target.value)) }
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) }
                    disabled = {currencyOptionsDisable}   
                >
                   
                       {
                        currencyOptions.map((currency ) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))
                       }
                
                </select>
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number,
    onAmount: PropTypes.func,
    onCurrencyChange: PropTypes.func,
    currencyOptions: PropTypes.array,
    selectCurrency: PropTypes.string,
    amountDisable: PropTypes.bool,
    currencyOptionsDisable: PropTypes.bool,
    className: PropTypes.string,
}



export default InputBox;

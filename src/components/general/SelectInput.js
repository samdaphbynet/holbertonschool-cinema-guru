import {useState} from "react";

import "./general.css";

function SelectInput({label, options, className, value, setValue}) {

    function handleSelect(e) {
        setValue(e.target.value)
    }
    return (
        <div className={className}>
            <label>{label}</label>
            <select value={value} onChange={handleSelect}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;
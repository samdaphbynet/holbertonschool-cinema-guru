import "./general.css";

function SelectInput(label, options, className, value, setValue) {

    function handleSelect(e) {
        setValue(e.target.value)
    }
    return (
        <select label={label} className={className} value={value} onChange={handleSelect} options={options} >
            {options.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    )
}

export default SelectInput;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css"

function Input({label, type, className, value, setValue, icon, inputAttributes}) {

    function handleInput(e) {
        setValue(e.target.value)
    }
    return (
        <>
            <div>
                {icon && <FontAwesomeIcon icon={icon} />}
                <label>{label}</label>
                <input
                type={type}
                className={className}
                value={value}
                onChange={handleInput}    
                {...inputAttributes}
                />
            </div>
        </>
    )
}

export default Input;
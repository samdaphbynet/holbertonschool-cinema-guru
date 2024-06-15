import "./general.css";

function SearchBar({title, setTitle}) {

    function handleInput(e) {
        setTitle(e.target.value)
    }

    return (
        <input
            type="text"
            value={title}
            onChange={handleInput}
            placeholder="Search..."
        />
    )
}

export default SearchBar;
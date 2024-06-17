import "./general.css";

function SearchBar({ title, setTitle }) {
  function handleInput(e) {
    setTitle(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;

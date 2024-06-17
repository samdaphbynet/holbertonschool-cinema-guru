import "./movies.css";
import SearchBar from "../general/SearchBar";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";
import Input from "../general/Input";

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  const options = [
    { value: "default", label: "Default" },
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "highestrated", label: "Highest Rated" },
    { value: "lowestrated", label: "Lowest Rated" },
  ];
  const tags = [
    "Action",
    "Drama",
    "Comedy",
    "Biography",
    "Romance",
    "Thriller",
    "War",
    "History",
    "Sport",
    "Sci-Fi",
    "Documentary",
    "Crime",
    "Fantasy",
  ];

  return (
    <div className="filter-container">
      <div className="left-filter">
        <SearchBar title={title} setTitle={setTitle} />
        <div className="input-search">
          <Input
            label={"Min Date:"}
            type={"number"}
            className={"input"}
            inputAttributes={{ htmlFor: "min-date" }}
            value={minYear}
            setValue={setMinYear}
          />
          <Input
            label={"Max Date:"}
            type={"number"}
            className={"input"}
            inputAttributes={{ htmlFor: "max-date" }}
            value={maxYear}
            setValue={setMaxYear}
          />
          <SelectInput
            className={"input"}
            label={"Sort:"}
            value={sort}
            options={options}
            setValue={setSort}
          />
        </div>
      </div>
      <ul className="tags-filter">
        {tags.map((item) => (
          <Tag genre={item} genres={genres} setGenres={setGenres} key={item} />
        ))}
      </ul>
    </div>
  );
}

export default Filter;

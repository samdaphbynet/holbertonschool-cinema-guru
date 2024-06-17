import {useState} from "react";

import "./movies.css"

const Tag = ({genre, filter, genres, setGenres}) => {
    const [selected, setSelected] = useState(false)

    const handleTag = () => {
        if (selected) {
            setSelected(false)
            setGenres(genres.filter((g) => g !== genre))
        } else {
            setGenres([...genres, genre])
            setSelected(true)
        }
    }

    if (filter) {
        return (
            <li className="tag clicked card" onClick={handleTag} value={genre}>{genre}</li>
        )
    }

    return (
        <li className={`tag ${selected ? "selected" : ""}`} onClick={handleTag}>{genre}</li>
    )
}

export default Tag
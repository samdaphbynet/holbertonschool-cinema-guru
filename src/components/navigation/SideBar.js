import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStar,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";
import Activity from "../Activity";

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:8000/api/activity", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.log("from get activity", error);
      });
  }, []);

  console.log(activities)

  return (

        <nav className="sidebar">
          <ul className="sidebar_link">
            <li
              className={selected === "home" ? "active" : ""}
              onClick={(e) => {setPage("home")}}
            >
              <FontAwesomeIcon className="icon" icon={faHome} />
              <p>Home</p>
              {selected === "home" ? ( <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                ) : (
                    ""
              )}
            </li>
            <li
              className={selected === "favorites" ? "active" : ""}
              onClick={(e) => {setPage("favorites")}}
            >
              <FontAwesomeIcon className="icon" icon={faStar} />
              <p>Favorites</p>
              {selected === "favorites" ? (<FontAwesomeIcon className="arrow" icon={faArrowRight} />
                ) : (
                    ""
              )}
            </li>
            <li
              className={selected === "watchlater" ? "active" : ""}
              onClick={(e) => {setPage("watchlater")}}
            >
              <FontAwesomeIcon className="icon" icon={faClock} />
              <p>Watch Later</p>
              {selected === "watchlater" ? (<FontAwesomeIcon className="arrow" icon={faArrowRight} />
                    ) : (
                    ""
              )}
            </li>
          </ul>
          <div className="activityInSidebar">
            {/* TODO: map activity */}
            <Activity />
          </div>
        </nav>
  );
};

export default SideBar;

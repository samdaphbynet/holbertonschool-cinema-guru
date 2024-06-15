import {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import Authentication from "./routes/auth/Authontication";
import Dashboard from "./routes/dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios.post("http://localhost:8000/api/auth", {},{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setIsLoggedIn(true);
      setUsername(response.data.username);
    })
    .catch((error) => {
      console.log("from App: ", error);
      setIsLoggedIn(false);
      setUsername("");
    })

  }, [])

  return isLoggedIn ? (<Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
                ) : (
                    <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUsername}/>
                )

}

export default App;

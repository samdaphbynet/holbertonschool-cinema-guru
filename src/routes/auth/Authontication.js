import { useState } from "react";
import axios from "axios";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSwitch(value) {
    setSwitch(value);
    setUsername("");
    setPassword("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (_switch) {
      axios
        .post("http://localhost:8000/api/auth/login", {
          username,
          password,
        })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("accessToken", response.data.accessToken);
            setUserUsername(username);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.log("from _switch login", error);
        });
    } else {
      axios
        .post("http://localhost:8000/api/auth/register", {
          username,
          password,
        })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("accessToken", response.data.accessToken);
            setUserUsername(username);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.log("from _switch register", error);
        });
    }
  };

  return (
    <div className="authenticationPage">
      <div className="authentication">
        <div className="form">
          <button
            className={_switch ? "active" : ""}
            onClick={(e) => {
                e.preventDefault();
                handleSwitch(true)
            }}
          >
            Login In
          </button>
          <button
            className={!_switch ? "active" : ""}
            onClick={(e) => {
                e.preventDefault();
                handleSwitch(false)
            }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {_switch ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Authentication;

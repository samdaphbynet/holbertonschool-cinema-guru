import "./auth.css";
import { faUser, faPlus, faKey } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="loginPage">
      <div>
        <h2>Create a new account</h2>
        <Input 
            label="Username:" 
            type="text" 
            icon={faUser} 
            className="username"
            value={username}
            setValue={setUsername}
        />
        <Input 
            label="Password:" 
            type="password" 
            icon={faKey}
            className="password"
            value={password}
            setValue={setPassword}
        />

        <div className="submit">
            <Button type="submit" label="Sign Up" icon={faPlus} className="signIn"/>
        </div>
      </div>
    </div>
  );
}

export default Register;

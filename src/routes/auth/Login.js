import "./auth.css";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="loginPage">
      <div>
        <h2>Sign with your account</h2>
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
            <Button type="submit" label="Sign In" icon={faKey} className="signIn"/>
        </div>
      </div>
    </div>
  );
}

export default Login;

import "./navigation.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = ({userUsername, setIsLoggedIn}) => {

    const logout = () => {
        localStorage.removeItem("accessToken");
        setIsLoggedIn(false);
    }
  return (
    <nav className="navbar">
        <div className="logo">
            <h1>Cinema Guru</h1>
        </div>
        <div className="navbarUser">
            <img src='https://picsum.photos/100/100' alt='picture profile' />
            <p>Welcome, {userUsername}!</p>
            <span onClick={(e) => {
                e.preventDefault();
                logout();
            }}>
                <FontAwesomeIcon icon={faArrowRightToBracket} /> Logout
            </span>
        </div>
    </nav>
  )
}

export default Header
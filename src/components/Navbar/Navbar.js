import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import useLogout from "../../hooks/useLogout";
import "./Navbar.css";

export default function Navbar() {
  const { logout } = useLogout();

  const { user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul>
        <li className="title">myMoney</li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </li>
        )}
        {user && (
          <li>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

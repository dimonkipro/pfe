import "./header.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");
    // Dispatch logout action
    dispatch(logout());
    // Redirect to login page
    navigate("/login");
  };

  // Check if the user is logged in by checking for a token in localStorage
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="left-side">
        <Link to={"/"} className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="center-header">
        <input
          placeholder="Search..."
          className="input"
          name="search"
          type="text"
        />
      </div>
      <div className="right-side">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link
                to="/profile"
                className="text-sm text-green-400 hover:underline"
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-sm text-red-400 hover:underline"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/login"
              className="text-sm text-green-400 hover:underline"
            >
              Login
            </Link>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Header;

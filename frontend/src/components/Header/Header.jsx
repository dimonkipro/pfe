import "./header.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the current path without leading slash
  const currentPath = window.location.pathname.replace(/^\/+/, "");

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");
    // Dispatch logout action
    dispatch(logout());
    // Redirect to login page
    navigate("/login");
  };

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
          <a className=" link-underline link-underline-opacity-0" href="#">
            About
          </a>
        </li>
        <li>
          <a className=" link-underline link-underline-opacity-0" href="#">
            Shop
          </a>
        </li>
        <li>
          <a className=" link-underline link-underline-opacity-0" href="#">
            Cart
          </a>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to="/profile"
                className=" link-underline link-underline-opacity-0"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="link-underline link-underline-opacity-0"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </>
        ) : // Check if the current path is login or signup
        currentPath == "login" ? (
          <li>
            <Link
              to="/signup"
              className=" link-underline link-underline-opacity-0"
            >
              Signup
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              className=" link-underline link-underline-opacity-0"
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

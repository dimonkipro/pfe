import "./header.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // Get the current path without leading slash
  const currentPath = location.pathname.replace(/^\/+/, "");

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
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
          <a
            className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a className=" link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">
            Shop
          </a>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to="/cart"
                className=" link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Cart
              </Link>
            </li>

            <li>
              <Link
                to="/profile"
                className=" link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
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
              className=" link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Signup
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              className=" link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
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

import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <Link to={"/"} className="logo">
          <img src={logo} alt="..." className="logo" />
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
        <li>
          <Link to="/login" className="text-sm text-green-400 hover:underline">
            Login
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Header;

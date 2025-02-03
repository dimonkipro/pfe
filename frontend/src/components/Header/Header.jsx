import "./header.css";
import logo from "../../assets/logo1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/authActions";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\/+/, "");
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <Navbar expand="lg" sticky="top" className="container col-10">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>

        {/* SEARCH INPUT */}
        <div className="d-flex justify-content-center flex-grow-1">
          <input
            placeholder="Search..."
            className="input"
            name="search"
            type="text"
          />
        </div>

        {/* DARK MODE TOGGLE */}
        <DarkModeToggle drop="down-centered" />

        <Navbar.Toggle aria-controls="navbar-expand" />
        <Navbar.Collapse id="navbar-expand" className="flex-grow-0">
          <Nav>
            <Nav.Link
              as={Link}
              to="/about"
              className="link-warning link-opacity-100 link-opacity-50-hover mx-2"
            >
              About
            </Nav.Link>

            {isAuthenticated &&
            (user?.role === "admin" || user?.role === "trainer") ? (
              // For authenticated admin users
              <NavDropdown
                title={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                }
                menuVariant="light"
                drop="down-centered"
              >
                <NavDropdown.Item
                  as={Link}
                  to={
                    user?.role === "admin"
                      ? "/admin/dashboard"
                      : user?.role === "trainer"
                      ? "/trainer/dashboard"
                      : null
                  }
                  className="link-warning"
                >
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handleLogout}
                  className="link-danger"
                >
                  Logout <i className="bi bi-box-arrow-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              // For non-admin users
              <>
                <Nav.Link
                  as={Link}
                  to="/shop"
                  className="link-warning link-opacity-100 link-opacity-50-hover mx-2"
                >
                  Shop
                </Nav.Link>
                {isAuthenticated ? (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/cart"
                      className="link-warning link-opacity-100 link-opacity-50-hover mx-2"
                    >
                      Cart
                    </Nav.Link>
                    <NavDropdown
                      title={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-person-lines-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                        </svg>
                      }
                      menuVariant="light"
                      drop="down-centered"
                    >
                      <NavDropdown.Item
                        as={Link}
                        to="/profile"
                        className="link-warning"
                      >
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={handleLogout}
                        className="link-danger"
                      >
                        Logout <i className="bi bi-box-arrow-right"></i>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : currentPath === "login" ? (
                  <Nav.Link
                    as={Link}
                    to="/signup"
                    className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-2"
                  >
                    Signup
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    as={Link}
                    to="/login"
                    className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-2"
                  >
                    Login
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

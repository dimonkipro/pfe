import { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/authActions";
import DarkModeToggle from "./Header/DarkModeToggle";
import logo from "../assets/logo1.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const theme = localStorage.getItem("theme");

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Offcanvas sidebar */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className={theme === "light" ? "bg-dark" : "bg-light"}
        style={{ width: "300px" }}
      >
        {/* Offcanvas header */}
        <Offcanvas.Header
          closeButton
          closeVariant={theme === "light" ? "white" : undefined}
          className="bg-dark "
        >
          <Offcanvas.Title>
            <p className="text-warning mx-5">Admin Panel</p>
          </Offcanvas.Title>
        </Offcanvas.Header>

        {/* Offcanvas body */}
        <Offcanvas.Body className="p-0 text-end">
          <Nav
            className={`flex-column p-3 ${
              theme === "light" ? "bg-dark" : "bg-light"
            }`}
            style={{ width: "250px", minHeight: "87vh" }}
          >
            {/* Offcanvas Items */}
            <Nav.Item>
              <Nav.Link
                className={theme === "light" ? "text-white" : "text-dark"}
              >
                Logged in as: {user?.name}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={
                  user?.role === "admin"
                    ? "/admin/dashboard"
                    : user?.role === "trainer"
                    ? "/trainer/dashboard"
                    : null
                }
                onClick={handleClose}
                className={theme === "light" ? "text-white" : "text-dark"}
              >
                Dashboard
                <i className="bi bi-speedometer2 ms-2"></i>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/admin/users"
                onClick={handleClose}
                className={theme === "light" ? "text-white" : "text-dark"}
              >
                Users
                <i className="bi bi-people ms-2"></i>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/admin/products"
                onClick={handleClose}
                className={theme === "light" ? "text-white" : "text-dark"}
              >
                Products
                <i className="bi bi-box-seam ms-2"></i>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className=" mt-auto">
              <Nav.Link
                onClick={() => {
                  handleClose();
                  handleLogout();
                }}
                className="text-danger"
              >
                Logout
                <i className="bi bi-box-arrow-right ms-2"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Admin_Trainer_Header */}
      <div className="d-flex justify-content-between align-items-center mx-4">
        <div className="rounded-pill bg-body-secondary p-2">
          <DarkModeToggle drop={"bottom-centered"} />
        </div>

        <Nav.Item>
          <Nav.Link as={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Nav.Link>
        </Nav.Item>

        <Button variant="warning" onClick={handleShow}>
          <i className="bi bi-list h3"></i>
        </Button>
      </div>
    </>
  );
};

export default Sidebar;

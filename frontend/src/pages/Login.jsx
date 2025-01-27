import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearNotifications,
  login,
  logout,
} from "../Redux/Actions/authActions";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // SHOW NOTIFICATIONS
    auth.notifications.forEach(({ message, type }) => {
      toast[type](message, {
        autoClose: 5000,
        position: "top-right",
        draggable: true,
        closeOnClick: true,
        theme: "dark",
      });
    });

    // CLEAR NOTIFICATIONS
    if (auth.notifications.length > 0) {
      dispatch(clearNotifications());
    }
  }, [auth.notifications, dispatch]);

  return (
    <div className=" container col-6 mt-4">
      <form onSubmit={onSubmit}>
        <h1 className="text-center">Login</h1>

        {/* EMAIL_FIELD */}
        <div className="mb-3">
          <label htmlFor="EmailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="EmailInput"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD_FIELD */}
        <div className="mb-3">
          <label htmlFor="PasswordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="PasswordInput"
            className="form-control"
            placeholder="Enter your Password !"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* LOG_IN_BUTTON */}
        <button type="submit" className="btn btn-primary mt-4">
          Login
        </button>

        {/* SPINNER_TOAST */}
        {auth.isLoading && <Spinner load={auth.isLoading} />}

        {/* SIGNUP_PAGE_BUTTON */}
        <div className="text-end">
          <p>Don&apos;t have an account ?</p>
          <Link to="/signup" className="btn btn-success">
            Signup
          </Link>
        </div>
      </form>
      <ToastContainer />
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotifications, login } from "../Redux/Actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.notifications.length === 0) return;

    auth.notifications.forEach(({ message, type }) => {
      toast[type](message, {
        autoClose: 5000,
        position: "bottom-right",
        draggable: true,
        closeOnClick: true,
        theme: "dark",
      });
    });
    dispatch(clearNotifications());
  }, [auth.notifications, dispatch]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className=" container col-5 mt-4 ">
      <form onSubmit={onSubmit}>
        <h1 className="text-center">Login</h1>

        {/* EMAIL_FIELD */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-envelope h4"></i>
          </span>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="EmailInput" className="form-label">
              Email address
            </label>
          </div>
        </div>

        {/* PASSWORD_FIELD */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            {/* <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/24/hiding.png"
              alt="hiding"
            /> */}
            <i className="bi bi-incognito h4"></i>
          </span>
          <div className="form-floating">
            <input
              type="password"
              id="PasswordInput"
              className="form-control"
              placeholder="Enter your Password !"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="PasswordInput" className="form-label">
              Password
            </label>
          </div>
        </div>

        {/* LOG_IN_BUTTON */}
        <div className="text-center p-4 d-grid gap-2 col-10 mx-auto">
          <button
            type="submit"
            className="btn btn-warning"
            disabled={auth.isLoading}
          >
            {auth.isLoading ? "Logging in..." : "Login"}
          </button>
        </div>

        {/* SPINNER_TOAST */}
        {auth.isLoading && <Spinner load={auth.isLoading} />}

        {/* SIGNUP_PAGE_BUTTON */}
        <div className="row">
          <div className="col-4">
            <Link
              to="/forgot-password"
              className="link-secondary link-offset-2 link-underline-opacity-25
               link-underline-opacity-100-hover"
            >
              Forgot password ?
            </Link>
          </div>
          <div className="col-8 text-end">
            <p className="m-0">Don&apos;t have an account ?</p>
            <Link
              to="/signup"
              className="link-secondary link-offset-2 link-underline-opacity-25
               link-underline-opacity-100-hover"
            >
              Signup
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

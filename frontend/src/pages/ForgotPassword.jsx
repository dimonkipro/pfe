import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearNotifications,
  forgotPassword,
} from "../Redux/Actions/authActions";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(email, navigate));
  };

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

  return (
    <div className=" container col-5 mt-4">
      <form onSubmit={onSubmit}>
        <h1 className="text-center">Forgot password</h1>

        {/* EMAIL_FIELD */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            {/* <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/new-post.png"
              alt="new-post"
            /> */}
            <i className="bi bi-envelope-fill h4"></i>
          </span>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="EmailInput" className="form-label">
              Email address
            </label>
          </div>
        </div>
        <div className="text-center d-grid gap-2 col-10 mx-auto">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={auth.isLoading}
          >
            {auth.isLoading ? "Sending..." : "Send reset email"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;

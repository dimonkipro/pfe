import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearNotifications,
  resetPassword,
} from "../Redux/Actions/authActions";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const auth = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(resetPassword(token, password, navigate));
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
        <h1 className="text-center">Reset password</h1>

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
        <div className="text-center d-grid gap-2 col-10 mx-auto">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={auth.isLoading}
          >
            {auth.isLoading ? "Resetting..." : "Reset password"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;

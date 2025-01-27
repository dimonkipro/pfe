import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotifications, signup } from "../Redux/Actions/authActions";
import Spinner from "../components/Spinner";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, name));
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
        <h1 className="text-center">Sign Up</h1>

        {/* EMAIL_FIELD */}
        <div className="mb-3">
          <label htmlFor="EmailInput" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="EmailInput"
            placeholder="Enter a valid Email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>

        {/* NAME_FIELD */}
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
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
            placeholder="Choose a strong Password !"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-warning mt-4">
          Sign Up
        </button>

        {auth.isLoading && <Spinner load={auth.isLoading} />}
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Redux/Actions/authActions";
import Spinner from "../components/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, name, navigate));
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
  }, [auth.notifications]);

  return (
    <div className=" container col-5 mt-4">
      <form onSubmit={onSubmit}>
        <h1 className="text-center">Sign Up</h1>

        {/* EMAIL_FIELD */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-envelope-at h4"></i>
          </span>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              placeholder="Email address"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="EmailInput">Email Address</label>
            <div id="emailHelp" className="form-text px-2">
              We&apos;ll never share your email with anyone else (❁´◡`❁) .
            </div>
          </div>
        </div>

        {/* NAME_FIELD */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            {/* <img
              width="24"
              height="24"
              src="https://img.icons8.com/glyph-neue/24/email-sign.png"
              alt="email-sign"
            /> */}
            <i className="bi bi-person-vcard h4"></i>
          </span>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="nameInput">Full Name</label>
          </div>
        </div>

        {/* PASSWORD_FIELD */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            {/* <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/24/password.png"
              alt="password"
            /> */}
            <i className="bi bi-incognito h4"></i>
          </span>
          <div className="form-floating">
            <input
              type="password"
              id="PasswordInput"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="PasswordInput">Password</label>
          </div>
        </div>
        <div className="text-center p-4 d-grid gap-2 col-10 mx-auto">
          <button
            type="submit"
            className="btn btn-warning"
            disabled={auth.isLoading}
          >
            {auth.isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
        {auth.isLoading && <Spinner load={auth.isLoading} />}
        <div className="d-flex justify-content-center">
          <p className="m-0">Already have an account ?</p>
          <Link
            to="/login"
            className="link-secondary link-offset-2 link-underline-opacity-25 
            link-underline-opacity-100-hover"
          >
            Login
          </Link>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;

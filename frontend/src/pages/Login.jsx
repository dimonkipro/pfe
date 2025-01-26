import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, login, logout } from "../Redux/Actions/authActions";
import { Link } from "react-router-dom";
import Toast from "../components/Toast/Toast";
import Spinner from "../components/Spinner";
const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    dispatch(signup(email, password, name));
  };

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Login Component</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {auth.isLoading && <Spinner load={auth.isLoading} />}
      {auth.error && <Toast text={auth.error} type="error" />}
      {auth.isAuthenticated ? (
        <Toast text={`Logged in as ${auth.user?.name}`} type="success" />
      ) : (
        <p>Not logged in</p>
      )}
      <Link to="/signup" className="text-sm text-green-400 hover:underline">
        Signup
      </Link>
    </div>
  );
};

export default Login;

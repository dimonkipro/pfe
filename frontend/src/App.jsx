/* eslint-disable react/prop-types */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import { useEffect } from "react";
import { checkAuth } from "./Redux/Actions/authActions";
import Cart from "./pages/Cart";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [navigate, isAuthenticated]);

  if (isLoading) {
    return <Spinner load={true} />;
  }

  if (user && !user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        Loading
        <Spinner load={isLoading} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUp />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          }
        />

        {/* catch all routes */}
        <Route
          path="*"
          element={
            <p className="display-1 text-center fw-bold position-absolute top-50 start-50 translate-middle ">
              (❁´⁔`❁) <br /> 404 Page Not Found
            </p>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

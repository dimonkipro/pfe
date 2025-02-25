import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import AdminRoute from "./components/Routes/AdminRoute";
import RedirectAuthenticatedUser from "./components/Routes/RedirectAuthenticatedUser";
import AdminLayout from "./pages/Admin/AdminLayout";
import TrainerRoute from "./components/Routes/TrainerRoute";
import TrainerDashboard from "./pages/Trainer/TrainerDashboard";
import Login2 from "./pages/login2";
import Register2 from "./pages/Register2";
import ForgotPassword2 from "./pages/ForgotPassword2";

function App() {
  const { isLoading } = useSelector((state) => state.auth);
  const theme = localStorage.getItem("theme");
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isTrainerRoute = location.pathname.startsWith("/trainer");

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  if (isLoading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        Loading
        <Spinner load={isLoading} />
      </div>
    );
  }

  return (
    <>
      <div className={!isAdminRoute ? "container col-10" : ""} id="top">
        {/* {(!isAdminRoute || !isTrainerRoute) && <Header />} */}
        {!isAdminRoute && !isTrainerRoute && <Header />}
        <Routes>
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            {/* <Route path="users" element={<AdminUsers />} />
            <Route path="products" element={<AdminProducts />} /> */}
          </Route>

          {/* Trainer Routes */}
          <Route
            path="/trainer"
            element={
              <ProtectedRoute>
                <TrainerRoute>
                  <AdminLayout />
                </TrainerRoute>
              </ProtectedRoute>
            }
          >
            <Route index element={<TrainerDashboard />} />
            <Route path="dashboard" element={<TrainerDashboard />} />
            {/* <Route path="users" element={<AdminUsers />} />
            <Route path="products" element={<AdminProducts />} /> */}
          </Route>

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/forgot-password2" element={<ForgotPassword2 />} />
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
              <p className="container display-1 text-center fw-bold position-absolute top-50 start-50 translate-middle ">
                (❁´⁔`❁) <br /> 404 Page Not Found
              </p>
            }
          />
        </Routes>
      </div>
      <a
        className="position-fixed end-0 bottom-0 m-3 p-3 rounded-3 fw-bold text-bg-warning"
        href="#top"
      >
        <i className="bi bi-chevron-double-up"></i>
      </a>
    </>
  );
}

export default App;

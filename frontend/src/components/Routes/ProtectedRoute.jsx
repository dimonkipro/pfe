/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [navigate, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        Loading
        <Spinner load={isLoading} />
      </div>
    );
  }

  if (user && !user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

export default ProtectedRoute;

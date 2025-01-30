import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { clearNotifications } from "../Redux/Actions/authActions";
import Spinner from "../components/Spinner";

const Profile = () => {
  const { notifications, user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (notifications.length === 0) return;

    notifications.forEach(({ message, type }) => {
      toast[type](message, {
        autoClose: 5000,
        position: "top-right",
        draggable: true,
        closeOnClick: true,
        theme: "dark",
      });
    });
    dispatch(clearNotifications());
  }, [notifications, dispatch]);

  if (isLoading) return <Spinner load={isLoading} />;

  return (
    <div>
      {isAuthenticated ? (
        <h1>Welcome, {user?.name}</h1>
      ) : (
        <h1>You are not logged in</h1>
      )}
      <ToastContainer />
    </div>
  );
};

export default Profile;

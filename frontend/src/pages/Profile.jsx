import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { clearNotifications } from "../Redux/Actions/authActions";

const Profile = () => {
  const { notifications, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (notifications.length === 0) return;

    notifications.forEach(({ message, type }) => {
      toast[type](message, {
        autoClose: 5000,
        position: "bottom-right",
        draggable: true,
        closeOnClick: true,
        theme: "dark",
      });
    });
    dispatch(clearNotifications());
  }, [notifications, dispatch]);


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

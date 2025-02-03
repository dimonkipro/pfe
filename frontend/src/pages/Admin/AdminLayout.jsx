import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import { clearNotifications } from "../../Redux/Actions/authActions";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { notifications } = useSelector((state) => state.auth);
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
    <>
      <Sidebar />
      <div className="d-flex">
        <div className="main-content flex-grow-1 p-2 ms-sm-5">
        {/* <div className="main-content flex-grow-1 p-4 bg-dark-subtle"> */}
          <Outlet />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

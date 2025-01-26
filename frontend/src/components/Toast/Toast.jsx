import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

const Toast = ({ text, type }) => {
  // Trigger toast alert when the component renders
  React.useEffect(() => {
    if (text) {
      //Types = "error", success", "info", "warning", "default"
      toast[type](text, {
        autoClose: 5000,
        position: "bottom-center",
        draggable: true,
        closeOnClick: true,
        theme: "dark",
      });
    }
  }, [text, type]);

  return <ToastContainer />;
};
Toast.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Toast;

/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

const TrainerRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user || user.role !== "trainer") {
    return (
      <p className="container display-1 text-center fw-bold position-absolute top-50 start-50 translate-middle ">
        (❁´⁔`❁) <br /> 404 Page Not Found
      </p>
    );
  }

  return children;
};

export default TrainerRoute;

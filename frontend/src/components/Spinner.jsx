import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = ({ load }) => {
  return (
    <BeatLoader
    //   color="blue"
      loading={load}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
      speedMultiplier={0.7}
    />
  );
};
Spinner.propTypes = {
  load: PropTypes.bool.isRequired,
};
export default Spinner;

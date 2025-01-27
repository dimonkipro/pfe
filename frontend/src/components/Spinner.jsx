import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = ({ load }) => {
  return (
    <div className="text-center">
      <BeatLoader
      //   color="blue"
        loading={load}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.7}
      />
    </div>
  );
};
Spinner.propTypes = {
  load: PropTypes.bool.isRequired,
};
export default Spinner;

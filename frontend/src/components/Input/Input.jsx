import PropTypes from "prop-types";
const Input = ({ text, type }) => {
  return (
    <input
      type={type}
      placeholder={text}
      style={{
        padding: "0.7rem",
        borderRadius: "0.5rem",
      }}
      required
    />
  );
};
Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;

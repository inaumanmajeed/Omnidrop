import PropTypes from "prop-types";

const Button = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;

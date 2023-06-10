/* eslint-disable react/prop-types */
import "../styles/Button.scss";

const Button = ({ ButtonText, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`Btn ${disabled && "Btn-disabled"}`}
    >
      {ButtonText}
    </button>
  );
};

export default Button;

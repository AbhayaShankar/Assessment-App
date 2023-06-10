import "../styles/Option.scss";

// eslint-disable-next-line react/prop-types
const Option = ({ optionText, onClick, checked }) => {
  return (
    <div className="options">
      <p
        // style={{ background: checked ? "#3aaf9fb9" : "white" }}
        onClick={onClick}
        className={`option ${checked ? "selected" : ""}`}
      >
        {optionText}
      </p>
    </div>
  );
};

export default Option;

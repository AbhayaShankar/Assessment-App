import "../styles/Option.scss";

// eslint-disable-next-line react/prop-types
const Option = ({ optionText, onClick, checked, isCorrect, finalResponse }) => {
  let color = "";

  if (checked && finalResponse) {
    color = isCorrect ? "#3aaf9f" : "#ED6A5E";
  } else if (checked) {
    color = isCorrect ? "#3aaf9f" : "";
  }

  return (
    <div className="options">
      <p
        onClick={onClick}
        className={`option ${checked ? "selected" : ""}`}
        style={{ background: color }}
      >
        {optionText}
      </p>
    </div>
  );
};

export default Option;

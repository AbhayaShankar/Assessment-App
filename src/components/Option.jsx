import Assessment from "../assessment.json";

const Option = ({ optionText }) => {
  return (
    <div>
      <p
        style={{
          border: "1px solid black",
          borderRadius: 6,
          padding: "6px 12px",
        }}
      >
        {optionText}
      </p>
    </div>
  );
};

export default Option;

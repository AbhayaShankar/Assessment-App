// eslint-disable-next-line react/prop-types
const Option = ({ optionText, onClick, checked }) => {
  return (
    <div>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          border: "1px solid black",
          padding: " 8px 20px",
          borderRadius: 8,
          cursor: "pointer",
          background: checked ? "lightblue" : "white",
        }}
        onClick={onClick}
      >
        {optionText}
      </p>
    </div>
  );
};

export default Option;

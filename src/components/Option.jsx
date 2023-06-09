// eslint-disable-next-line react/prop-types
const Option = ({ optionText }) => {
  return (
    <div>
      <p
        style={{
          border: "1px solid black",
          borderRadius: 6,
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        {optionText}
      </p>
    </div>
  );
};

export default Option;

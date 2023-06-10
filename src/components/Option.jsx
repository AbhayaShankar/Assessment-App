// eslint-disable-next-line react/prop-types
const Option = ({ optionText, onChange, checked }) => {
  return (
    <div>
      <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <input
          type="radio"
          name="options"
          value={optionText}
          onChange={onChange}
          checked={checked}
        />
        {optionText}
      </label>
    </div>
  );
};

export default Option;

// const Option = ({ optionText, onChange, checked }) => {
//   return (
//     <div>
//       <label style={{ display: "flex", alignItems: "center", gap: 5 }}>
//         <input
//           type="radio"
//           name="options"
//           value={optionText}
//           onChange={onChange}
//           checked={checked}
//         />
//         {optionText}
//       </label>
//     </div>
//   );
// };

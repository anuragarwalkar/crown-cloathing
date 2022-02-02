import React from "react";
import "./formInputStyles.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />

      {label ? (
        <label className={`${otherProps.val ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;

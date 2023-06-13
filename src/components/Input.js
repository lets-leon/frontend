import React from "react";

const Input = (props) => {
  const { name, label, error, handleOnChange, type } = props;
  const className = error ? "form-control is-invalid" : "form-control";
  return (
    <div className="mb-3" style={{ textAlign: "left" }}>
      <label className="mb-2">{label}</label>
      <input
        name={name}
        className={className}
        onChange={handleOnChange}
        type={type}
        required
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
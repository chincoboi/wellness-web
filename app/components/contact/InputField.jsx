import React from "react";

const InputField = ({ type, placeholder, value, onChange, onBlur, error, helperText }) => {
  return (
    <div className="contact-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

export default InputField;

/* eslint-disable react/prop-types */
import React from 'react';

function Input({
  type = 'text',
  inputId,
  value,
  onValueChange,
  textarea = false,
  placeholder = `Masukan ${inputId} ...`,
  required,
}) {
  const id = `${inputId}Input`;
  const className = 'form-control mt-1';
  const style = {
    padding: '7px 15px',
  };

  if (textarea) {
    return (
      <textarea
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onValueChange}
        style={style}
        rows="6"
      />
    );
  }

  return (
    <input
      type={type}
      id={id}
      className={className}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onValueChange}
      required={required}
    />
  );
}

export default Input;

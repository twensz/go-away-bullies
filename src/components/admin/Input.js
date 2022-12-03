/* eslint-disable react/prop-types */
import React from 'react';

function Input({
  type = 'text',
  textLabel,
  inputId,
  value,
  onValueChange,
  textarea = false,
}) {
  const id = `${inputId}Input`;
  const className = 'form-control mt-1';
  const placeholder = `Masukan ${inputId} ...`;

  if (textarea) {
    return (
      <label htmlFor={id} className="form-label">
        {textLabel}
        <textarea
          id={id}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
          rows="6"
          required
        />
      </label>
    );
  }

  return (
    <label htmlFor={id} className={`form-label ${type === 'date' ? 'w-auto' : ''}`}>
      {textLabel}
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onValueChange}
        required
      />
    </label>
  );
}

export default Input;

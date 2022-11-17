import React, { useState } from "react";
import Styles from "../../styles/input.module.scss";

const Input = (props) => {
  const {
    type,
    placeholder,
    onChange,
    label,
    check,
    errors,
    value,
    readonly,
    register,
    name,
    onClick,
    disabled
  } = props;

  return (
    <>
      <input
        {...(register ? register(label, check) : {})}
        className={Styles.input}
        onChange={onChange}
        type={type}
        value={value}
        // readonly={readonly}
        onClick={onClick}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errors && errors[label] && (
        <span style={{ color: "red" }}>{errors[label]?.message}</span>
      )}
      {errors && errors[label]?.type === "pattern" && (
        <p style={{ color: "red" }}>Pattern must be correct!</p>
      )}
      {errors && errors[label]?.type === "valueAsNumber" && (
        <p style={{ color: "red" }}>{label} must be number</p>
      )}
      {errors && errors[label]?.type === "minLength" && (
        <p style={{ color: "red" }}>
          {label} must be of {check.minLength} digit
        </p>
      )}
    </>
  );
};

export default Input;

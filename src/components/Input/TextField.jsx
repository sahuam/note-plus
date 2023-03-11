import React from "react";
import PropTypes from "prop-types";
import styles from "@/components/Input/textfield.module.css";
export default function TextField({
  label,
  placeholder,
  onChange,
  defaultValue,
  type,
}) {
  const inputStyle = {};

  return (
    <div className={'input-text-field ' + styles.inputContainer}>
      <label className={styles.label}>{label}</label> <br />
      <input
        className={styles.field}
        // style={inputStyle}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
      />
    </div>
  );
}

TextField.propTypes = {};

import React from "react";
import PropTypes from "prop-types";
import styles from "@/components/Input/textfield.module.css";

export default function AreaText({ label, onChange, defaultValue }) {
  return (
    <div className={"input-area-field " + styles.inputContainer}>
      <label className={styles.label}>{label}</label> <br />
      <textarea className={styles.field} defaultValue={defaultValue}></textarea>
    </div>
  );
}

AreaText.propTypes = {};

import React from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";
import TextField from "../Input/TextField";
import Button from "../Buttons/Button";

export default function RegisterForm() {
  return (
    <div className={`${styles.formContainer} ${styles.formReverse}`}>
      <h2 className={styles.formTitle}>
        Free <br />
        Register
      </h2>
      <form className={`${styles.form} ${styles.regform}`}>
        <TextField
          type="text"
          placeholder="Enter full name"
          label="Full name"
        />
        <TextField type="text" placeholder="Enter username" label="Username" />
        <TextField
          type="text"
          placeholder="Enter registerd email"
          label="Email"
        />
        <Button text={"Register"} />
      </form>
    </div>
  );
}

RegisterForm.propTypes = {};

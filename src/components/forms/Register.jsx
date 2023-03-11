import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";
import TextField from "../Input/TextField";
import Button from "../Buttons/Button";
import { register } from "@/api-integration/client-side/register";

export default function RegisterForm() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(data);
    } catch (error) {
      console.log(error);
    }
  };

  const validatePassword = (password) => {
    if (password.length > 5) {
      setValidation({ ...validation, password: "" });
    } else {
      setValidation({
        ...validation,
        password: "Password must contain atleast 5 characters.",
      });
    }
  };
  const validateEmail = (email) => {
    console.log(
      "validating email",
      email,
      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(
        email
      )
    );
    if (
      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(
        email
      )
    )
      setValidation({ ...validation, email: "" });
    else setValidation({ ...validation, email: "Email is invalid" });
  };

  const handleChange = (key, value, validate) => {
    setData({ ...data, [key]: value });
    if (validate.regExp) {
      if (validate.regExp.exp.test(value))
        setValidation({
          ...validation,
          [key]: "",
        });
      else
        setValidation({
          ...validation,
          [key]: validate.message,
        });
    }
    if (validate.custom) {
      validate.custom(value);
    }
  };

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
          onChange={(e) =>
            handleChange("name", e.target.value, {
              regExp: {
                exp: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/,
                message: "Must contain only alphabet",
              },
            })
          }
        />
        <p className={styles.errorMessage}>{validation.name}</p>
        <TextField
          type="text"
          placeholder="Enter username"
          label="Username"
          onChange={(e) => handleChange("username", e.target.value, {})}
        />
        <p className={styles.errorMessage}>{validation.username}</p>
        <TextField
          type="text"
          placeholder="Enter registerd email"
          label="Email"
          onChange={(e) =>
            handleChange("email", e.target.value, {
              custom: validateEmail,
            })
          }
        />
        <p className={styles.errorMessage}>{validation.email}</p>
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
          onChange={(e) =>
            handleChange("password", e.target.value, {
              custom: validatePassword,
            })
          }
        />
        <p className={styles.errorMessage}>{validation.password}</p>
        <Button text={"Register"} onClick={handleRegister} />
      </form>
    </div>
  );
}

RegisterForm.propTypes = {};

import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../Input/TextField";
import Button from "../Buttons/Button";
import styles from "./form.module.css";
import { useRouter } from "next/router";

export default function SignInForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log("sign in " + `/notes/${username}`);
    window.localStorage.setItem("USERNAME", username);
    router.push(`/notes/${username}`);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Sign In</h2>
      <form className={styles.form}>
        <TextField
          type="text"
          placeholder="Enter username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Enter registerd email"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <Button text={"Sign in"} color="primary" onClick={signIn} />
      </form>
    </div>
  );
}

SignInForm.propTypes = {};

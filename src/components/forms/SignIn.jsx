import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../Input/TextField";
import Button from "../Buttons/Button";
import styles from "./form.module.css";
import { useRouter } from "next/router";
import { login } from "@/api-integration/client-side/login";

export default function SignInForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async (e) => {
    try {
      e.preventDefault();
      await login(username, password);
      setError("");
      router.push(`/notes/${username}`);
    } catch (error) {
      if (
        error.message === "USER NOT FOUND" ||
        error.message === "INVALID CREDENTIAL"
      ) {
        setError("Invalid username or password. Please try again.");
      } else {
        setError("Something went wrong. Please try again, after some time.");
      }
    }
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
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
        {error && <h6 className={"errorMessage"}>{error}</h6>}
        <Button text={"Sign in"} color="primary" onClick={signIn} />
      </form>
    </div>
  );
}

SignInForm.propTypes = {};

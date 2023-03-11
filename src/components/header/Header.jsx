import React from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/Button";

export default function Header() {
  return (
    <div
      style={{
        height: 80,
        width: "100vw",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        borderBottom: "1px solid lightgray",
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <img
        src="/images/pocket_note_logo.png"
        height="100%"
        width="auto"
        style={{ padding: "1rem" }}
      />
      {/* <div>
        <Button text={"Sign in"} color="primary" />
        <Button text={"Register"} />
      </div> */}
    </div>
  );
}

Header.propTypes = {};

import React from "react";
import PropTypes from "prop-types";

export default function Button({
  text,
  onClick,
  color = "secondary",
  size = "normal",
}) {
  const colorStyle =
    color === "secondary"
      ? {
          borderColor: "purple",
          background: "white",
          color: "purple",
          fontWeight: "bold",
        }
      : {
          background: "purple",
          color: "white",
          fontWeight: "bold",
          border: "none",
        };

  const sizeStyle =
    size === "big"
      ? { height: 40, minWidth: 100 }
      : {
          height: 32,
          minWidth: 80,
        };

  const styles = {
    ...{
      borderRadius: 5,
      margin: 5,
      cursor: "pointer",
    },
    ...colorStyle,
    ...sizeStyle,
  };

  return (
    <button onClick={onClick} style={styles}>
      {text}
    </button>
  );
}

Button.propTypes = {};

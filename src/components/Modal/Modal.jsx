import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";

export default function Modal({ open = false, children, toggle }) {
  return (
    open && (
      <div className={styles.modalContainer}>
        <div className={styles.modalBackdrop} onClick={toggle}></div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    )
  );
}

Modal.propTypes = {};

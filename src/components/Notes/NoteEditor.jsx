import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../Input/TextField";
import Button from "../Buttons/Button";
import axios from "axios";
import styles from "./notes.module.css";
import Modal from "../Modal/Modal";
import AreaText from "../Input/AreaText";

export default function NoteEditor({
  title = "",
  description = "",
  color = "",
  isNewNote = false,
  open,
  toggle,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newColor, setNewColor] = useState(color);

  const saveNote = async () => {
    try {
      const username = window.localStorage.getItem("USERNAME");
      if (isNewNote) {
        // push new note
      } else {
        // update existing note
      }
    } catch (error) {
      // some error
    }
  };

  return (
    <Modal open={open} toggle={toggle}>
      <div className={styles.noteEditor}>
        <h3>{isNewNote ? "Add a new note" : "Update your note"}</h3>
        {/* form */}
        <form>
          <TextField
            label={"Title"}
            type="text"
            defaultValue={title}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <AreaText
            label={"Description"}
            type="text"
            defaultValue={description}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <TextField
            label={"Color"}
            type="color"
            defaultValue={description}
            onChange={(e) => setNewDescription(e.target.value)}
          />

          <Button text={"Save"} onClick={saveNote} color="primary" />
        </form>
      </div>
    </Modal>
  );
}

NoteEditor.propTypes = {};

import React, { useState } from "react";
import PropTypes from "prop-types";
import NoteCard from "./NoteCard";
import styles from "./notes.module.css";
import NoteEditor from "./NoteEditor";

export default function NotesContainer({ notes = [], username }) {
  const [enableEditor, handleEditor] = useState(false);
  const [selectedNote, setNote] = useState({
    title: "",
    description: "",
    color: "",
    isNewNote: false,
  });

  const handleNoteClick = async (sNote) => {
    await setNote({ ...sNote, isNewNote: false });
    handleEditor(!enableEditor);
  };

  const addNewNote = async () => {
    await setNote({
      title: "",
      description: "",
      color: "",
      isNewNote: true,
    });
    handleEditor(!enableEditor);
  };

  return (
    <div className={styles.noteContainer}>
      <h3>
        Welcome <span>{username}</span> to pocket notes.
      </h3>
      <div className={styles.notes}>
        {notes.map((note) => (
          <NoteCard
            note={note}
            className={styles.note}
            setNote={handleNoteClick}
          />
        ))}
      </div>
      <button className={styles.addButton} onClick={addNewNote}>
        +
      </button>

      <NoteEditor
        title={selectedNote.title}
        description={selectedNote.description}
        color={selectedNote.color}
        open={enableEditor}
        isNewNote={selectedNote.isNewNote}
        toggle={() => handleEditor(!enableEditor)}
      />
    </div>
  );
}

NotesContainer.propTypes = {};

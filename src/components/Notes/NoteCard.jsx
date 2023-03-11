import React, { useState } from "react";
import PropTypes from "prop-types";
import NoteEditor from "./NoteEditor";

export default function NoteCard({ note, className, setNote }) {
  return (
    <div
      className={className}
      onClick={() => setNote(note)}
      style={{ backgroundColor: note.color }}
    >
      <h4>{note.title}</h4>
      <p>{note.description}</p>
    </div>
  );
}

NoteCard.propTypes = {};

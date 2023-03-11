import React, { useEffect, useState } from "react";
import NotesContainer from "@/components/Notes/NotesContainer";
import Header from "@/components/header/Header";
import { getNotesByUserName } from "@/api-integration/server-side/notes";

export async function getServerSideProps(context) {
  try {
    const { username = "", notes } = await getNotesByUserName(
      context.params.username
    );
    return {
      props: {
        user: username,
        notes,
      },
    };
  } catch (error) {
    return { props: { error: error.message } };
  }
}

export default function NotesPage({ username, notes = [], error }) {
  const onload = async () => {};
  useEffect(() => {
    onload();
  }, []);

  return (
    <div style={{ marginTop: 100 }}>
      {/* header */}
      <Header />
      <div>
        <NotesContainer notes={notes} username={username} />
      </div>
    </div>
  );
}

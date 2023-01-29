import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import NotesContainer from "@/components/Notes/NotesContainer";
import Header from "@/components/header/Header";

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_FETCH_NOTES_URL +
      "?username=" +
      context.params.username
  );
  return {
    props: {
      username: context.params.username,
      data: data,
    },
  };
}

export default function NotesPage({ username, data = [], error }) {
  const onload = async () => {};
  useEffect(() => {
    onload();
  }, []);

  return (
    <div style={{ marginTop: 100 }}>
      {/* header */}
      <Header />
      <div>
        <NotesContainer notes={data[0].notes} username={username} />
      </div>
    </div>
  );
}

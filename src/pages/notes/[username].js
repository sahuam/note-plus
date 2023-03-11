import Notes from "@/components/notes/Notes";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    `http://localhost:3000/api/notes?username=${context.params.username}`
  );
  return {
    props: {
      notes: data.notes || [],
    },
  };
}

export default function NotePage({ notes }) {
  useEffect(() => {
    console.log(notes);
  }, [notes]);
  return (
    <Container>
      <Notes notes={notes} />
    </Container>
  );
}

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Note from "./Note.jsx";
import ViewNote from "./ViewNote.jsx";

const Notes = ({ notes = [] }) => {
  const [selectedNote, setSelectedNote] = useState();
  return (
    <Container sx={{ position: "relative" }} disableGutters>
      <Grid container justifyContent={"flex-start"} spacing={1}>
        {selectedNote ? (
          <ViewNote note={selectedNote} />
        ) : (
          notes.map((note) => (
            <Note
              note={note}
              gridProps={{ xs: 12, sm: 6, md: 3 }}
              setSelectedNote={setSelectedNote}
            />
          ))
        )}
      </Grid>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          bottom: "8vh",
          right: "4vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 80,
          width: 80,
          zIndex: 2,
          borderRadius: 50,
          bgcolor: "purple",
          "&:hover": {
            bgcolor: "purple",
          },
        }}
      >
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "3rem",
            display: "block",
          }}
        >
          +
        </Typography>
      </Button>
    </Container>
  );
};

export default Notes;

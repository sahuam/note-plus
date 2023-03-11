import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";

const Note = ({ note, gridProps, setSelectedNote }) => {
  const [waitTouch, setWaitTouch] = useState();
  const [notClicked, setNotClicked] = useState();

  const handleTouchStart = () => {
    setWaitTouch(
      setTimeout(() => {
        console.log("DO SOMETHING AFTER 2 SEC");
        setNotClicked(true);
      }, 2000)
    );
  };
  const handleTouchEnd = () => {
    window && window.clearTimeout(waitTouch);
    if (notClicked) {
      // show options in mobile
    } else {
      // navigate to view note in /note/{username}/{id}
      setSelectedNote(note);
    }
  };
  const handleClick = () => {
    setSelectedNote(note);
  };
  return (
    <Grid item {...gridProps}>
      <Card
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
        sx={{
          bgcolor: note.color || "white",
          borderRadius: "8px 0 8px 0",
          boxShadow: "8px 7px 5px #00000042",
          transform: "scale(0.9)",
          transition: "all .2s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1)",
            zIndex: 4,
          },
        }}
      >
        <CardContent>
          <Typography>{note.title}</Typography>
          <Typography>{note.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Note;

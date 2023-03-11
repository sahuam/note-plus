import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const ALL_COLORS_OPTIONS = [
  "#add8e6",
  "#f08080",
  "#e0ffff",
  "#fafad2",
  "#d3d3d3",
  "#90ee90",
  "#ffb6c1",
  "#ffa07a",
  "#ffffe0",
];

const ViewNote = ({ note }) => {
  const [data, setData] = useState({
    title: note.title || "Title",
    description: note.description || "Description",
    color: note.color || "lightyellow",
  });

  // save
  // reset

  return (
    <Grid item xs={12}>
      <Box
        display={"flex"}
        alignItems="center"
        onClick={{}}
        sx={{ cursor: "pointer" }}
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" color={"gray"} fontSize={12} fontWeight="bold">
          Back
        </Typography>
      </Box>
      <Stack spacing={2}>

        {/* color selector */}
        <FormControl sx={{ ml: "auto", display: "flex" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={note.color}
            sx={{
              width: "4rem",
              height: "2rem",
              ml: "auto",
              bgcolor: note.color,
              outline: "none",
              border: "none",
              color: note.color,
            }}
            onChange={(e) => setData({ ...data, color: e.target.value })}
          >
            {ALL_COLORS_OPTIONS.map((color) => (
              <MenuItem value={`${color}`} sx={{ bgcolor: `${color}`, color }}>
                {color}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="body1" color={"gray"} fontSize={12}>
            Select a background color
          </Typography>
        </FormControl>
        {/* title input */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            color={"gray"}
            fontSize={16}
            fontWeight="bold"
          >
            Title
          </Typography>
          <TextField
            placeholder=""
            variant="standard"
            defaultValue={note.title}
            className={roboto.className}
            sx={{
              width: "100%",
              fontSize: "1rem",
              color: "black",
              "& input": { p: 2 },
            }}
          />
        </Box>
        {/* description input */}
        <Box>
          <Typography
            variant="h3"
            color={"gray"}
            fontSize={16}
            fontWeight="bold"
          >
            Description
          </Typography>
          <TextareaAutosize
            placeholder="Write your notes here..."
            variant="standard"
            className={roboto.className}
            defaultValue={note.description}
            style={{
              padding: "1rem",
              width: "100%",
              minHeight: 200,
              outline: "none",
              border: "none",
              borderBottom: "1px solid gray",
              background: "transparent",
              fontSize: "1rem",
              color: "black",
            }}
          />
        </Box>
      </Stack>
    </Grid>
  );
};

export default ViewNote;

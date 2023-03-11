import { Box, Container, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "./components/Header";

const MainApp = ({ children }) => {
  const bgcolor = useSelector((state) => state?.app?.bgcolor);
  return (
    <Stack sx={{ height: "100vh" }}>
      {/* header */}
      <Header />
      {/* body */}
      <Box sx={{ bgcolor: "whitesmoke", flex: 1 }}>
        <Container maxWidth="md" id="main-container">
          {children}
        </Container>
      </Box>
      {/* footer */}
      {/* <Grid item xs={12}>
        <div id="footer"></div>
      </Grid> */}
    </Stack>
  );
};

export default MainApp;

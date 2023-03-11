import { useDispatch, useSelector } from "react-redux";

const {
  Stack,
  Box,
  Container,
  Typography,
  ButtonGroup,
  Button,
} = require("@mui/material");
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { updateLoginStatus } from "@/store/reducers/loginSlice";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const route = useRouter();
  const loginBtnOnClick = () => {
    route.push("/login");
  };
  const logoutBtnOnClick = () => {
    window && window.localStorage.removeItem("AUTHENTICATION");
    window && window.localStorage.removeItem("USERNAME");
    dispatch(
      updateLoginStatus({
        isLogin: false,
        username: "",
      })
    );
    route.push("/");
  };
  useEffect(() => {
    const authentication =
      window && window.localStorage.getItem("AUTHENTICATION");
    if (authentication && authentication === "true") {
      const username = window.localStorage.getItem("USERNAME");
      dispatch(
        updateLoginStatus({
          isLogin: true,
          username,
        })
      );
    }
  }, []);
  return (
    <Box id="header" sx={{p: '1rem 0'}}>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        maxWidth="lg"
        sx={{ m: "0 auto" }}
      >
        {/* logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component={"img"}
            alt="Pocket note"
            src="/logo.png"
            height={50}
            width={"auto"}
          />
        </Box>
        {/* user info after sign in, otherwise login buttons */}
        {login.isLogin ? (
          <Stack direction={"row"} alignItems="center">
            <Box
              sx={{ height: 20, width: 20, bgcolor: "gray", borderRadius: 5 }}
            />
            <Typography pl={2} className={inter.className}>
              {login.username}
            </Typography>
            <Button
              variant="contained"
              sx={{ width: 100 }}
              onClick={logoutBtnOnClick}
            >
              Log out
            </Button>
          </Stack>
        ) : (
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ButtonGroup>
              <Button
                variant="contained"
                sx={{ width: 100, bgcolor: "#9714E8", textTransform: "none" }}
                onClick={loginBtnOnClick}
              >
                Sign in
              </Button>
              <Button
                sx={{
                  width: 100,
                  borderColor: "#9714E8",
                  color: "#9714E8",
                  textTransform: "none",
                }}
              >
                Register
              </Button>
            </ButtonGroup>
          </Box>
        )}
      </Stack>
    </Box>
  );
};
export default Header;

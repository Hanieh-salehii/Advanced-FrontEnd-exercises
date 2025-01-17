import { Box, Grid2, Typography } from "@mui/material";
import MyForm from "./signin";
import HandleHome from "../components/HandleHome";

const Login = () => {
  return (
    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Box
        sx={{
          width: "95%",
          mx: "auto",
          height: "100vh",
          alignContent: "center",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Login page{" "}
        </Typography>
        <MyForm />
      </Box>
    </Grid2>
  );
};
export default Login;

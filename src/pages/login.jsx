import { Box, Grid2 } from "@mui/material";
import MyForm from "./signin";

const Login = () => {
  return (
    <Box sx={{ width: "95%",mx:"auto"}}>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={6}>Login page </Grid2>
      </Grid2>
      <MyForm/>
    </Box>

  );
};
export default Login;

import { Box, Grid2 } from "@mui/material";

const NotFound = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={6}>NotFound page</Grid2>
        <Grid2 size={6}>Hiiii </Grid2>
      </Grid2>
    </Box>
  );
};
export default NotFound;

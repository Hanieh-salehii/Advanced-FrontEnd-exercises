import { Box, Grid2 } from "@mui/material";

const Not_found = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={6}>
          <Item> Not_found page </Item>
        </Grid2>
        <Grid2 size={6}>
          <Item> Hiiii</Item>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default Not_found;
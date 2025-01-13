import { Box, CardMedia, Grid2 } from "@mui/material";
import notFound from "../assets/video/404-error.webm"; 

const NotFound = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <CardMedia
        sx={{width: "80vw", height: "90vh",margin:"auto"}}
            component='video'
            image={notFound}
            autoPlay
            muted
        />
      </Grid2>
    </Box>
  );
};
export default NotFound;

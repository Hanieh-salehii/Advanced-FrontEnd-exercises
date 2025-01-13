import { Box, Grid2 } from "@mui/material";
import { useSelector } from "react-redux";

const ReservedList = () => {
  const roomList = useSelector((store)=> store.roomList)
  console.log(roomList);
  
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={6}>ReservedList page </Grid2>
        <Grid2 size={6}>Hiiii </Grid2>
      </Grid2>
    </Box>
  );
};
export default ReservedList;

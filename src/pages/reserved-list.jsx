import { Box, Grid2 } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";

const ReservedList = () => {
  const roomList = useSelector((store) => store.roomList);
  console.log(typeof roomList);
  // const reservedList = (<Box>
  //   {roomList.map((room) => (
  //     <React.Fragment  key={room.id}>
  //       <RoomCard info={room} />

  //     </React.Fragment>
  // ))}
  // </Box>);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      > </Grid2>
    </Box>
  );
};
export default ReservedList;

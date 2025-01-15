import { Box, Grid2 } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import RoomCard from "../components/RoomCard";

const ReservedList = () => {
  const roomList = useSelector((store) => store.roomList.room);
  const reservedList = (<Box>
    {roomList.map((room) => (
      <React.Fragment  key={room.id}>
        <RoomCard info={room} type={"reservedList"}/>

      </React.Fragment>
  ))}
  </Box>);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      > {reservedList}</Grid2>
    </Box>
  );
};
export default ReservedList;

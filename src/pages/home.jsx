import { Box, Grid2 } from "@mui/material";
import RoomCard from "../components/RoomCard";
import RomeImg from "../assets/images/rome-penthouse.webp"
import SpaImg from "../assets/images/spa-penthouse.webp"
import IndianImg from "../assets/images/india-penthouse.webp"

const RoomInfo = [
  {
    id: 1,
    title: "Roman style room",
    subTitle: "Top VIP - Penthouse",
    img:RomeImg,
    features: "free game club",
    content:
      "The roof of Rome Penthouse in Darvishi Mashhad luxury hotel was designed with inspiration from Italian classical architecture and the glory of ancient Rome. This room offers a luxurious and relaxing atmosphere with warm colors, European art details and luxurious decoration. Stylish furniture, outstanding designs and modern facilities will make your stay unique. Memorable and dreamy moments staying in this amazing room.",
  },
  {
    id: 2,
    title: "SPA room",
    subTitle: "Top VIP - Penthouse",
    img:SpaImg,
    features: "Free Billiards Club",
    content:
      "The roof of Rome Penthouse in Darvishi Mashhad luxury hotel was designed with inspiration from Italian classical architecture and the glory of ancient Rome. This room offers a luxurious and relaxing atmosphere with warm colors, European art details and luxurious decoration. Stylish furniture, outstanding designs and modern facilities will make your stay unique. Memorable and dreamy moments staying in this amazing room.",
  },
  {
    id: 3,
    title: "Indian style room",
    subTitle: "Top VIP - Duplex",
    img:IndianImg,
    features: "Free entry to the aquatic complex",
    content:
      "The roof of Rome Penthouse in Darvishi Mashhad luxury hotel was designed with inspiration from Italian classical architecture and the glory of ancient Rome. This room offers a luxurious and relaxing atmosphere with warm colors, European art details and luxurious decoration. Stylish furniture, outstanding designs and modern facilities will make your stay unique. Memorable and dreamy moments staying in this amazing room.",
  },
  {
    id: 4,
    title: "Irainian style room",
    subTitle: "Top VIP - Duplex",
    img:RomeImg,
    features: "Free nightly snack buffet",
    content:
      "The roof of Rome Penthouse in Darvishi Mashhad luxury hotel was designed with inspiration from Italian classical architecture and the glory of ancient Rome. This room offers a luxurious and relaxing atmosphere with warm colors, European art details and luxurious decoration. Stylish furniture, outstanding designs and modern facilities will make your stay unique. Memorable and dreamy moments staying in this amazing room.",
  },

];
const Home = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 size={6}>Home page</Grid2>
        <Grid2 size={6}>Hiiii </Grid2>
      </Grid2>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent:"center"}} >
      {RoomInfo.map((room)=>(
        <RoomCard key={room.id} title={room.title} subTitle={room.subTitle} content={room.content} img={room.img} featurs={room.features}/>
      ))}
      </Grid2>
    </Box>
  );
};
export default Home;

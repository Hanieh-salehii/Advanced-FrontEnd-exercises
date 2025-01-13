import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions/roomAction";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const RoomCard = ({ info }) => {
  const roomDispatcher = useDispatch();
  const handelReserve = (e, roomId) => {
    console.log(roomId);
    roomDispatcher(addItem(roomId))
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "row", p: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: "350px", height: "255px", objectFit: "cover" }}
        image={info.img}
        alt="room"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          width: "70%",
        }}
      >
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <CardHeader title={info.title} subheader={info.subTitle} />
        <Button onClick={(e)=> {handelReserve(e,info.id)}} variant="outlined" size="medium" color="default" sx={{height:"fit-content", textTransform:"capitalize"}}>Reserve</Button>
        </Box>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {info.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>{info.features}</Typography>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
};
export default RoomCard;

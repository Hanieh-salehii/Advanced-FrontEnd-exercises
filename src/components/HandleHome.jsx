import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../constant/rout";
import { Button } from "@mui/material";

const HandleHome = () => {
const navigate = useNavigate()
const handleHomeroute = () => {
    navigate(HOME_ROUTE)
}
    return (
        <Button onClick={handleHomeroute} sx={{width:"100%",alignItems:"center"}}>
            Home
        </Button>
    )
};
export default HandleHome;
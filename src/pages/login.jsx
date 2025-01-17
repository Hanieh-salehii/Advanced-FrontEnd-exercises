import { Box, Grid2, Typography } from "@mui/material";
import * as yup from "yup";
import { userUrl } from "../constant/api";
import MyForm from "../components/MyForm";
import axios from "axios";
import toast from "react-hot-toast";


const Login = () => {
    const phonRegExp = /^(\+98|0)?9\d{9}$/;
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("name is required!")
        .min(2, "must be at least 2 characters long."),
        phoneNumber: yup
        .string()
        .required("phone number is required!").matches(phonRegExp,"phone number is invalid!")
    });
  const inputs = [
    {
      id: "1",
      name: "name",
      type: "text",
    },
    {
      id: "2",
      name: "phoneNumber",
      type: "number",
    },
  ];
  const onSubmit =async (formData) => {
    try {
      const response = await axios.get(userUrl)
      response.data.map((user)=> {
        if (user.name === formData.name && user.phoneNumber === formData.phoneNumber){
          toast.success("Login was successful.")
        }
        console.log(user.name);
        console.log(formData.name);
        
      })
      
    } catch (error) {
      toast.error("ttry again!")
    }
  };
  return (
    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Box
        sx={{
          width: "95%",
          mx: "auto",
          height: "100vh",
          alignContent: "center",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Login page{" "}
        </Typography>
        <MyForm inputs={inputs} mySubmit={onSubmit} mySchema={schema}/>
      </Box>
    </Grid2>
  );
};
export default Login;

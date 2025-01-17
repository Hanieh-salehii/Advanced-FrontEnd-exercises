import { Box,  Grid2, Typography } from "@mui/material";
import * as yup from "yup";
import { userUrl } from "../constant/api";
import MyForm from "../components/MyForm";
const SignIn = () => {
  const phonRegExp = /^(\+98|0)?9\d{9}$/;
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("name is required!")
      .min(2, "must be at least 2 characters long."),
      lastName: yup
      .string()
      .required("Last name is required!")
      .min(3, "must be at least 3 characters long."),
      phoneNumber: yup
      .string()
      .required("phone number is required!").matches(phonRegExp,"phone number is invalid!")
  });

  // const {
  //   // register,
  //   // handleSubmit,
  //   // watch,
  //   formState: { errors, isValid },
  // } = useForm({
  //   resolver: yupResolver(schema),
  //   mode:"onChange"
  // });

  const inputs = [
    {
      id: "1",
      name: "name",
      type: "text",
    },
    {
      id: "2",
      name: "lastName",
      type: "text",
    },
    {
      id: "3",
      name: "phoneNumber",
      type: "number",
    },
  ];

  const onSubmit = (data) => {
    // console.log(e);
    fetch(userUrl,{
      method: "POST",
      body: JSON.stringify(data)
    })
  };

  //   console.log(typeof inputs[1].name);
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
          Signin page{" "}
        </Typography>
        <MyForm inputs={inputs} mySubmit={onSubmit} mySchema={schema}/>
      </Box>
    </Grid2>
  );
};

export default SignIn;

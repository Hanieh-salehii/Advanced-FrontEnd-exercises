import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userUrl } from "../constant/api";
const MyForm = () => {
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
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
  });

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
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        {inputs.map((fields) => (
          <Box
            key={fields.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "12px",
              textTransform: "capitalize !important",
            }}
          >
            <label>{fields.name}</label>
            <input
              style={{
                marginTop: "4px",
                height: "28px",
                borderRadius: "6px",
                paddingLeft: "8px",
                outline: "none",
                border: "1px solid gray",
              }}
              {...register(fields.name)}
              type={fields.type}
            />
            <Typography
              variant="caption"
              color="warning"
              // sx={{ textTransform: "capitalize" }}
            >
              {errors[fields.name]?.message}
            </Typography>
          </Box>
        ))}
        <Button
          type="submit"
          variant="outlined"
          color="default"
          disabled = {!isValid}
          sx={{ width: "fit-content", margin: "auto", mt: "12px" }}
        >
          submit
        </Button>
      </Box>
    </>
  );
};

export default MyForm;

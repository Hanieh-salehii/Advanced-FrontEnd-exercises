import { Box, Button, Container } from "@mui/material";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };
  const inputs = [
    {
      id: "1",
      name: "name",
      type: "text",
    },
    {
      id: "2",
      name: "last name",
      type: "text",
    },
    {
      id: "3",
      name: "phone number",
      type: "number",
    },
  ];
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
          width: { xs: "100%", sm: "60%" },
        }}
      >
        {inputs.map((fields) => (
          <Box
            key={fields.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "12px",
              textTransform: "capitalize",
            }}
          >
            <label>{fields.name}</label>
            <input
              style={{ marginTop: "4px", height: "28px", borderRadius:"6px", paddingLeft:"8px", border: "1px solid gray" }}
              {...register(fields.name)}
              type={fields.type}
            />
          </Box>
        ))}
        <Button type="submit"> submit </Button>
      </Box>
    </>
  );
};

export default MyForm;

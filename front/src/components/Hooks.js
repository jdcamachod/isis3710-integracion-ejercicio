import { useState } from "react";
import axios from "axios";

const usePostJobForm = (schema) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validate();
    if (!error) {
      console.log("Form submitted!", inputs);
      const http = axios.create({ baseURL: "/offers" });
      http.post("/", inputs).catch((err) => {
        console.log(err);
      });
      window.location.reload(false);
    } else {
      console.log("Errors", error);
      setErrors(error);
    }
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const validate = () => {
    return schema.validate(inputs);
  };

  return { handleSubmit, handleInputChange, errors };
};

export default usePostJobForm;

import React, { useState, useEffect } from "react";
import './auth.css';
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
const Register = () => {
    const navigate = useNavigate();
    const [input, setinput] = useState({
      name: "",
      email: "",
      phone:"",
      gender:"",
      college:"",
      password: "",

    });
    const handleChange = (e) => {
      setinput((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/user/register",
          {
            name: input.name,
            email: input.email,
            phone: input.phone,
            gender: input.gender,
            college: input.college,
            password: input.password,
          }
        );
        if (data.success) {
          toast.success('User Register Succesfully')
          navigate("/login");
        } else {
          toast.error('Some thing Went wrong')
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      document.title = `register`;
    });
  return (
    <>
      <div className="auth-container">
        <img src={logo} alt="Logo" />

        <form onSubmit={handleSubmit}>
          <Box
            maxWidth={450}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
            style={{ background: "#fff" }}
            // marginTop={5}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            borderRadius={5}
          >
            <Typography
              variant="h4"
              sx={{ textTransform: "upperCase" }}
              padding={3}
              textAlign={"center"}

            >
              Register
            </Typography>
            
              <TextField
                placeholder="Name"
                name="name"
                value={input.name}
                margin="normal"
                type="text"
                onChange={handleChange}
              />
              <TextField
                placeholder="Email"
                name="email"
                value={input.email}
                margin="normal"
                type="email"
                onChange={handleChange}
              />
            <TextField
              placeholder="Phone No + Country Code"
              name="phone"
              value={input.phone}
              margin="normal"
              type="phone"
              onChange={handleChange}
            />
            <TextField
              placeholder="Gender"
              name="gender"
              value={input.gender}
              margin="normal"
              type="gender"
              onChange={handleChange}
            />
            <TextField
              placeholder="College Name"
              name="college"
              value={input.college}
              margin="normal"
              type="college"
              onChange={handleChange}
            />
            <TextField
              placeholder="Password"
              name="password"
              value={input.password}
              margin="normal"
              type="password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              sx={{ borderRadius: 3, marginTop: 3 }}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Button
              sx={{ borderRadius: 3, marginTop: 3 }}
              onClick={() => navigate("/login")}
            >
              Already Registerd ? please login
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}

export default Register

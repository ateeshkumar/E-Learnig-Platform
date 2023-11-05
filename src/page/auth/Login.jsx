import React, { useState,useEffect } from 'react'
import './auth.css'
import { useLocation, useNavigate} from 'react-router-dom';
import {Box,Typography,TextField,Button} from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../components/context/auth';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png'
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useAuth();
    const [input, setinput] = useState({
      email: "",
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
          "https://alphapartical-api-v2-l7kz.onrender.com/api/v1/user/login",
          {
            email: input.email,
            password: input.password,
          }
        );
        if (data.success) {
        toast.success(data?.massage)
        console.log(data.user)
           setAuth({
             ...auth,
             user: data?.user,
             token: data?.token,
           });
           localStorage.setItem("auth", JSON.stringify(data));
           navigate(location.state || "/");
          
        } else {
        toast.error("something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      document.title = `login`;
    });
  return (
    <>
      <div className="auth-container">
        <img src={logo} alt="Logo"/>
        <form onSubmit={handleSubmit}>
          <Box
            maxWidth={600}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
            marginTop={5}
            style={{background:'#fff'}}
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
              Login
            </Typography>
            <TextField
              placeholder="Email"
              name="email"
              value={input.email}
              margin="normal"
              type="email"
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
              onClick={() => navigate("/register")}
            >
              Not a user ? please Register
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}

export default Login

import './css/footer.css';
import React, { useState } from "react";
import {
  BsFillSendFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import footer from "../../assets/footer.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Footer = () => {
   const navigate = useNavigate();
   const [input, setInput] = useState({
     email: "",
   });
   const handleChange = (e) => {
     setInput((prevstate) => ({
       ...prevstate,
       [e.target.name]: e.target.value,
     }));
   };
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const { data } = axios.post(
         "https://alphapartical-api-v2.onrender.com/api/v1/content/subscribe",
         {
           email: input.email,
         }
       );
       if (data?.success) {
         toast.success("You are subscribe");
         navigate("/");
       }
      //  toast.success("You are subscribe");
       window.location.reload(false);
     } catch (error) {
       toast.success("Error in posting");
     }
   };
  return (
    <>
      <div className="f-container">
        <div className="f-upper">
          <div className="f-left">
            <h4>NO LIMITED ACCESS</h4>
            <h2>Start using alphapartical.com Today</h2>
            <div className="f-input">
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              <button className="f-btn" onClick={handleSubmit}>
                <BsFillSendFill />
              </button>
            </div>
          </div>
          <div className="f-right">
            <img src={footer} alt="Footer" />
          </div>
        </div>
        <div className="f-lower">
          <div className="f-up">
            <div className="up-1">
              <h2>Alphapartical</h2>
              <p>
                Make the right Data Driven Decisions to move your <br /> study
                fast
              </p>
            </div>
            <div className="up-2">
              <a href="">HTML</a>
              <a href="">CSS</a>
              <a href="">JavaScript</a>
              <a href="">DSA</a>
            </div>
            <div className="up-3">
              <a href="">Term and Conditions</a>
              <a href="">Privacy Policy</a>
              <a href="">Cookie Policy</a>
            </div>
            <div className="up-4">
              <h4>Let's Chat</h4>
              <p>alphapartical.com</p>
              <div className="f-social">
                <a href="">
                  <BsFacebook />
                </a>
                <a href="https://instagram.com/aateeshmaurya">
                  <BsInstagram />
                </a>
                <a href="https://twitter.com/thisisateesh">
                  <BsTwitter />
                </a>
                <a href="https://github.com/ateeshkumar">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="f-down">
            <div className="border-fot"></div>
            <div className="f-down-hr">
              <h3>alphapartical&copy;2023</h3>
              <div className="policy">
                <a href="/term-condition">Term and Condition</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer

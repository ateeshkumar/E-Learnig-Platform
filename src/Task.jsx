import React from "react";
import amazon from "./assets/amazon.png";
import "./task.css";
const Task = () => {
  const handleSubmit = () => {
    alert("data");
  };
  return (
    <>
      <div className="taks-container">
        <div className="img-logo">
          <img src={amazon} alt="" />
        </div>
        <div className="task-form">
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter Your email" />
            <input type="password" placeholder="Enter Your password" />
            <input type="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Task;

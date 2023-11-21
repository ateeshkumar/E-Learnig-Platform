import React from "react";
import { MoonLoader } from "react-spinners";
const CircleLoader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <MoonLoader color="#48ff00" />
      </div>
    </>
  );
};

export default CircleLoader;

import React from 'react'
import {PacmanLoader} from 'react-spinners'
const SimpleLoader = () => {
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
        <PacmanLoader color="#ff00dc" speedMultiplier={1.5} />
      </div>
    </>
  );
}

export default SimpleLoader
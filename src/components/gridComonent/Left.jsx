import React, { useRef } from "react";
import "./css/left.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Left = ({search,add}) => {
    const useref = useRef();
    const showNavbar = () => {
      useref.current.classList.toggle("responsive_nav");
    };
  return (
    <>
      <div className="body-left" ref={useref}>
        {search.map((item, idx) => (
          <Link
            className="left-link"
            to={`/${add}/${item._id}`}
            onClick={showNavbar}
          >{`${idx + 1} - ${item.title}`}</Link>
        ))}
        <button className="nav-btn1 nav-close-btn1" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </div>
      <button className="nav-btn1" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </>
  );
}

export default Left

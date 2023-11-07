import React, { useEffect, useRef, useState } from 'react'
import './css/navbar.css';
import logo from '../../assets/logo.png';
import { Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const navigate = useNavigate();
    const navref = useRef();
    const [auth,setAuth] = useAuth();
    const [dashboard,setDashboard] = useState('')
    const handleLogout = () => {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      toast.success("Logout Successfully");
      navigate("/login");
    };
    const showNavbar = () => {
      navref.current.classList.toggle("responsive_nav");
    };
    useEffect(()=>{
      if(auth?.user?.role===1){
        setDashboard('admin')
      }else{
        setDashboard('user')
      }
    })
  return (
    <>
      <div className="nav-container">
        <div className="left-nav">
          <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        </div>
        <ul className="nav-list" ref={navref}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <button className="dropbtn">
              Engineering{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content">
              <Link to="/html/6526abc3d2b8db051837a443">HTML</Link>
              <Link to="/css/1">CSS</Link>
              {/* <Link to='/javascript'>JavaScript</Link>
              <Link to='/javascript'>Node Js</Link>
              <Link to='/javascript'>React</Link>
              <Link to='/javascript'>React Native</Link> */}
            </div>
          </li>
          {/* <li className="dropdown">
            <button className="dropbtn">
              Finance
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content">
              <Link to="/marketing/1">Marketing</Link>
              <Link to="/accountent/1">Accountent</Link>
              <Link to="/digital-marketing/1">Digital Marketing</Link>
              <Link to="/hr/1">HR</Link>
            </div>
          </li> */}
          {/* <li className="dropdown">
            <button className="dropbtn">
              Competative
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content">
              <Link to="/jeemain/651a9ffa86f5d81f642f45d5">
                Jee Main Question Paper
              </Link>
            </div>
          </li> */}
          <li>
            {" "}
            <Link to="/courses">All Courses</Link>
          </li>
          <li>
            {" "}
            <Link to="/engineering/project">Project</Link>
          </li>
          <li>
            {" "}
            <Link to="/blogs">Blog</Link>
          </li>
          {!auth?.user ? (
            <Link to="/login" className="login-link">
              Sign In/Sign Up
            </Link>
          ) : (
              <li className="dropdown">
                <button className="dropbtn">
                  {dashboard} Dashboard{" "}
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
                <div className="dropdown-content">
                  <Link to={`/dashboard/${dashboard}`}>
                    Dashboard
                  </Link>
                  <Link onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              </li>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CloseIcon />
          </button>
        </ul>
        <button className="nav-btn" onClick={showNavbar}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
}

export default Navbar

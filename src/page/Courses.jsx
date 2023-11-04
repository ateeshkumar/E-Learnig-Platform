import React,{useEffect} from 'react';
import './css/courese.css'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import SecurityIcon from '@mui/icons-material/Security';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
const Courses = () => {
  return (
    <>
      <Layout title="all-courses">
        <div className="courses-header-1">
          <h1>All COURSES</h1>
        </div>
        <div className="all-course-1">
          <div className="courses-1">
            <h1>Engineering</h1>
            <div className="course-container-1">
              <div
                className="en-card"
                onClick={() => navigate("/html/6526abc3d2b8db051837a443")}
              >
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div
                className="en-card"
                onClick={() => navigate("/css/6526abc3d2b8db051837a443")}
              >
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div
                className="en-card"
                onClick={() => navigate("/javascript/6526abc3d2b8db051837a443")}
              >
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
              <div
                className="en-card"
                onClick={() => navigate("/courses/ethical-hacking/1")}
              >
                <SecurityIcon fontSize="80px" className="course-icon" />
                <p>Ethical Hacking</p>
              </div>
            </div>
          </div>
          <div className="courses-1">
            <h1>Finance</h1>
            <div className="course-container-1">
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="courses-1">
            <h1>Competitive Exam</h1>
            <div className="course-container-1">
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
              <div className="en-card">
                <HtmlIcon fontSize="80px" className="course-icon" />
                <p>HTML</p>
              </div>
              <div className="en-card">
                <CssIcon fontSize="80px" className="course-icon" />
                <p>CSS</p>
              </div>
              <div className="en-card">
                <JavascriptIcon fontSize="80px" className="course-icon" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Courses

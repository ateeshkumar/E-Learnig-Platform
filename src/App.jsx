import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Compiler from './page/Compiler';
import Courses from './page/Courses';
import Project from './page/Project';
import ProjectDetails from './page/ProjectDetails';
import EthicalHacking from './page/EthicalHacking';
import Register from './page/auth/Register';
import Login from './page/auth/Login';
import LayoutContent from './components/gridComonent/LayoutContent';
import PrivacyPolicy from './page/PrivacyPolicy';
import TearmCondition from './page/TearmCondition';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codeeditor" element={<Compiler />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/term-condition' element={<TearmCondition/>}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/engineering/project" element={<Project />} />
        <Route path='/:add/:id' element={<LayoutContent/>}/>
        <Route path="/engineering/project-detals/:id" element={<ProjectDetails/>}/>
        <Route path='/courses/ethical-hacking/:id' element={<EthicalHacking/>}/>
        
      </Routes>
    </>
  );
}

export default App

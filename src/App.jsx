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
import VsCodeExtension from './page/Blog/VsCodeExtension';
import Blog from './page/Blog';
import UserDashboard from './page/user/UserDashboard';
import PageNotFound from './page/404';
import { Privateroute } from './components/route/Privateroute';
import AdminRoute from './components/route/AdminRoute';
import AdminDashboard from './page/admin/AdminDashboard';
import OurCommunity from './page/user/OurCommunity';
import AdminAllUser from './page/admin/AdminAllUser';
import AdminProject from './page/admin/AdminProject';
import AdminCreateProject from './page/admin/AdminCreateProject';
import CommunityProjectDetails from './page/user/CommunityProjectDetails';
import GroupProject from './page/user/GroupProject';
import PlacementQuestion from './page/Blog/PlacementQuestion';
import PlacementCoding1 from './page/Blog/PlacementCoding1';
import ProjectForPlacement from './page/Blog/ProjectForPlacement';
import EcommerceWebsite from './page/Blog/EcommerceWebsite';
import LearningPlatform from './page/Blog/LearningPlatform';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codeeditor" element={<Compiler />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TearmCondition />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/student/community" element={<OurCommunity />} />

        {/* blog pages */}
        <Route
          path="blogs/vs-code-extensions-for-developers"
          element={<VsCodeExtension />}
        />
        <Route
          path="blogs/wipro-talent-next-milestone-all-coding-question-cheatsheet"
          element={<PlacementQuestion />}
        />
        <Route
          path="blogs/placement-coding-question-2023"
          element={<PlacementCoding1 />}
        />
        <Route
          path="blogs/top-ptoject-for-placement"
          element={<ProjectForPlacement />}
        />
        <Route
          path="blogs/eCommerce-Website-planning-cheatsheet-using-mern-stack"
          element={<EcommerceWebsite />}
        />
        <Route path="blogs/eLearning-Platform-planning-cheatsheet-using-mern-stack" element={<LearningPlatform/>}/>

        <Route path="/courses" element={<Courses />} />
        <Route path="/engineering/project" element={<Project />} />
        <Route path="/:add/:id" element={<LayoutContent />} />
        <Route
          path="/engineering/project-detals/:id"
          element={<ProjectDetails />}
        />
        <Route
          path="/courses/ethical-hacking/:id"
          element={<EthicalHacking />}
        />
        <Route
          path="/student/community/:slug"
          element={<CommunityProjectDetails />}
        />
        <Route path="/*" element={<PageNotFound />} />

        {/* User Private Route */}
        <Route path="/dashboard" element={<Privateroute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/group/:slug" element={<GroupProject />} />
        </Route>

        {/* Admin Private Route  */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/all-users" element={<AdminAllUser />} />
          <Route path="admin/project-details" element={<AdminProject />} />
          <Route path="admin/create-project" element={<AdminCreateProject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App

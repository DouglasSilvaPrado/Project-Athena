import React from "react";
import { Routes, Route} from "react-router-dom";


// login
import Login from "./components/Login/login.component";
import Register from "./components/Login/register.component";
import Profile from "./components/Login/profile.component";



// pages
import PageHome from "./components/pages/Home/home";
import PageCourses from "./components/pages/Course";
import PageAbout from "./components/pages/About";
import PageContact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
//layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer"


function App()  {
 
  
    return (
        <>
          <Navbar />
            
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/courses" element={<PageCourses />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/contact" element={<PageContact/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/course">
              <Route path=":courseId" element={<Courses />} />
              </Route>
            </Routes>
              <Footer/>
            </>
    );
}

export default App;

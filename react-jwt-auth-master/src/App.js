import React from "react";
import { Switch, Route} from "react-router-dom";


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



function App()  {
 
  
    return (
        <>
          <Navbar />
          
            <Switch>
              <Route exact path={["/", "/home"]} component={PageHome} />
              <Route exact path="/courses" component={PageCourses} />
              <Route exact path="/about" component={PageAbout} />
              <Route exact path="/contact" component={PageContact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exat path="/courses">
                <Route path=":courseId" element={<Courses />} />
              </Route> */}
            </Switch>
        </>

    );
}

export default App;

import React from "react";
import { Switch, Route} from "react-router-dom";



import Login from "./components/Login/login.component";
import Register from "./components/Login/register.component";
import Home from "./components/home.component";
import Profile from "./components/Login/profile.component";
import BoardUser from "./components/Login/board-user.component";
import BoardModerator from "./components/Login/board-moderator.component";
import BoardAdmin from "./components/Login/board-admin.component";
import PageCourses from "./components/pages/Course";

import Navbar from "./components/layout/Navbar";



function App()  {
 
  
    return (
        <>
          <Navbar />
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/courses" component={PageCourses} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </>

    );
}

export default App;

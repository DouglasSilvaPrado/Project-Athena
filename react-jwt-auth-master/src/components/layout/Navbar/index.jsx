import React, { Component } from 'react';
import { Link } from "react-router-dom";

import AuthService from '../../../services/auth.service';
import EventBus from '../../../common/EventBus';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        }
    }
        componentDidMount() {
            const user = AuthService.getCurrentUser();
        
            if (user) {
              this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
              });
            }
            
            EventBus.on("logout", () => {
              this.logOut();
            });
          }
        
          componentWillUnmount() {
            EventBus.remove("logout");
          }
        
          logOut() {
            AuthService.logout();
            this.setState({
              showModeratorBoard: false,
              showAdminBoard: false,
              currentUser: undefined,
            });
          }    
    render() { 
        const { currentUser} = this.state;
        return (
            <>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand">
                        Athena
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/courses"} className="nav-link">
                            Cursos
                        </Link>
                        </li>
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                            {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={this.logOut}>
                            LogOut
                            </a>
                        </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                            Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                            Sign Up
                            </Link>
                        </li>
                        </div>
                    )}
                </nav>
            </>
        );
    }
}
 
export default Navbar;
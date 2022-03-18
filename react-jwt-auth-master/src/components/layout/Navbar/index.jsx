import React, { Component } from 'react';
import { Link } from "react-router-dom";

import AuthService from '../../../services/auth.service';
import EventBus from '../../../common/EventBus';

import "./styles.css"

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
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <Link to={"/"} className="navbar-brand">
                          <img src="https://raw.githubusercontent.com/DouglasSilvaPrado/ProjetoAthena/a1152507e9c1b610b30b5bcf763139ff5cb8c1bb/Squad55/LogoAtena%202.svg" alt="logo escrito athena cor braca e borda rosa" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class=" menu collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to={"/home"} className="nav-link">Home</Link>
                                <Link to={"/courses"} className="nav-link">Cursos</Link>
                                <Link to={"/about"} className="nav-link">Sobre</Link>
                                <Link to={"/contact"} className="nav-link">Contato</Link>        
                            </div>
                            <div  class="navbar-nav">
                                {currentUser ? (
                                        
                                        <>
                                            <Link to={"/profile"} className="nav-link">{currentUser.username}</Link>
                                            <a href="/login" className="nav-link" onClick={this.logOut}>LogOut</a>
                                        </>
                                    ) : (
                                        <>
                                            <Link to={"/login"} className="nav-link">Login</Link>
                                            <Link to={"/register"} className="nav-link">Sign Up</Link>
                                        </>
                                    )}

                            </div>
                        </div>
                    </div>
                </nav>   
            </>
        );
    }
}
 
export default Navbar;
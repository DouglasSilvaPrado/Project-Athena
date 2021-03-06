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
    const { currentUser } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand ms-5">
              <img src="https://raw.githubusercontent.com/DouglasSilvaPrado/ProjetoAthena/a1152507e9c1b610b30b5bcf763139ff5cb8c1bb/Squad55/LogoAtena%202.svg" alt="logo escrito athena cor braca e borda rosa" />
            </Link>
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className=" menu collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-2">
                <Link to={"/"} className="nav-link">Home</Link>
                <Link to={"/courses"} className="nav-link">Cursos</Link>
                <Link to={"/about"} className="nav-link">Sobre</Link>
                <Link to={"/contact"} className="nav-link">Contato</Link>
              </div>
              <div className="navbar-nav me-4">
                {currentUser ? (

                  <>
                    <Link to={"/profile"} className="nav-link">{currentUser.username}</Link>
                    <Link to={"/"} className="nav-link" onClick={this.logOut}>LogOut</Link>
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
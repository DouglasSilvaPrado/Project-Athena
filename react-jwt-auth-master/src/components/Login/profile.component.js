import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div className="container text-white">
        {this.state.userReady ? (
          <div className="container py-5">
            <header className="text-center pb-5">
              <h2 className="py-3">Meu Perfil</h2>
              <h3 className="py-2">
                <strong>{currentUser.username}</strong>
              </h3>
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card rounded-circle"
              />
            </header>

            <div className="row row-cols-1">
              <ul
                className="nav nav-pills mb-3 d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item col" role="presentation">
                  <button
                    className="nav-link active px-5"
                    id="pills-panel-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-panel"
                    type="button"
                    role="tab"
                    aria-controls="pills-panel"
                    aria-selected="true"
                  >
                    Painel
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button
                    className="nav-link px-5"
                    id="pills-details-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-details"
                    type="button"
                    role="tab"
                    aria-controls="pills-details"
                    aria-selected="false"
                  >
                    Detalhes
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button
                    className="nav-link px-5"
                    id="pills-myCourses-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-myCourses"
                    type="button"
                    role="tab"
                    aria-controls="pills-myCourses"
                    aria-selected="false"
                  >
                    Meus Cursos
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button
                    className="nav-link px-5"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Fale Conosco
                  </button>
                </li>
              </ul>
            </div>
            {/* tablist */}

            <div className="tab-content" id="pills-tabContent">

              <div
                className="tab-pane fade show active"
                id="pills-panel"
                role="tabpanel"
                aria-labelledby="pills-panel-tab"
              >
                <div className="container my-5 text-center">
                  <p>Olá, seja bem vindo a sua área do aluno(a)</p>   
                  <p>Na sua área do aluno(a), você pode ver os seus certificados, os cursos em que você está matriculado e outros detalhes da sua conta</p>               
                        
                      
                </div>
                {/*Container Panel*/}
              </div>
              {/* panel */}

              <div
                className="tab-pane fade"
                id="pills-details"
                role="tabpanel"
                aria-labelledby="pills-details-tab"
              >
                <div className="container my-5 text-center">
                  <h1>Detalhes</h1>
                </div>
                {/*Container Details*/}
              </div>
              {/* Details*/}

              <div
                className="tab-pane fade"
                id="pills-myCourses"
                role="tabpanel"
                aria-labelledby="pills-myCourses-tab"
              >
                <div className="container my-5 text-center">
                  <div class="alert alert-success" role="alert">
                    Não há cursos!
                  </div>
                </div>
                {/*Container My courses*/}
              </div>
              {/* My courses */}

              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="container my-5 text-center">
                  <h1>Contato</h1>
                  
                </div>
                {/*container contact us*/}
              </div>
              {/* contact us*/}

            </div>
            {/* tabs-content */}
          </div>
        ) : null}
      </div>
    );
  }
}

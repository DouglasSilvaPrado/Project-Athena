import React from 'react'
import { Link } from "react-router-dom";

function Footer(){
    return(
       
        <footer className="pt-5 mt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2  ">
                    <div className="imput col ">
                        <h2>Sejá um pareceiro</h2>
                        <form action="https://formsubmit.co/douclassNameilvadaprado@gmail.com" method="POST">
                            <div className="form-group mx-auto">
                                <input type="text"
                                       className="form-control my-3"
                                       placeholder="Digite seu nome"
                                       required="" />
                                <input type="text"
                                       className="form-control my-3"
                                       placeholder="Digite seu Email"
                                       required="" />

                                <textarea style={{resize: "none"}} placeholder="Digite sua Mensagem" rows="3" cols="50" name="message" required="" className="form-control my-3"></textarea>
                                <input type="hidden" name="_ captcha" value="false"/>
                                <input type="hidden" name="_ autoresponse" value="Mensagem enviada!"/>
                                <input type="hidden" name="_ next" value="index.html"/>
                                <button className="btn btn-outline-success form-control my-3">Enviar</button>
                            </div>
                        </form>
                    </div>

                    
                    <div className="row row-cols-sm-2 justify-content-between ">
                        <div className="link col d-flex flex-column align-items-center ">
                            <h3 className="mb-4 ">Menu</h3>
                            <ul className="mx-0 px-0">
                            <Link to={"/"} ><li className="py-2">Home</li></Link>
                            <Link to={"/courses"} ><li className="py-2">Cursos</li></Link>
                            <Link to={"/about"}><li className="py-2">Sobre</li></Link>
                            <Link to={"/contact"}><li className="py-2">Contato</li></Link>  
                                 
                            </ul>
                        </div>

                        <div className="rede col">
                            <h3 className="mb-4">Redes Sociais</h3>
                            <ul className="mx-0 px-0 ">
                                <li className="nav-link  py-2">
                                    <a href="#">
                                        <i className="bi bi-facebook pr-2"></i>
                                        FaceBook
                                    </a>
                                </li>
                                <li className="nav-link  py-2">
                                    <a href="#">
                                        <i className="bi bi-instagram pr-2"></i>
                                        Instagram
                                    </a>
                                </li>
                                <li className="nav-link  py-2">
                                    <a href="#">
                                        <i className="bi bi-twitter pr-2"></i>
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <center style={{fontsize:"16px",color:"rgba(0,0,0,0.3)"}}>
                        Imagens e cursos são meramente ilutrativas. Site feito para fiz educativos.
                    </center>
            </div>
       
        </footer>
   
    );
}
export default Footer;
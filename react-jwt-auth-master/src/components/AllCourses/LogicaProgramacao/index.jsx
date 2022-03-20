import React from "react";
import "./styles.css";

function LogicaProgramacao() {
  return (
    <>
      {/* oque e */}
      <div className="container py-5 text-white">
        <h2 className="text-center py-3">Lógica de programação</h2>
        <p className="text-center">
          Lógica de programação é o modo como se escreve um programa de
          computador, um algoritmo. Um algoritmo é uma sequência de passos para
          se executar uma função. Um exemplo de algoritmo, fora da computação, é
          uma receita de bolo.
        </p>
      </div>

      {/* Curso */}
      <div className="container my-5 text-center text-white">
        <div className="container container-text">
          <div className="d-flex row row-cols-sm-1 row-cols-md-2 ">
            <iframe
              className="my-auto col-lg-8 col-md-8 col-sm-12"
              height={400}
              src="https://www.youtube.com/embed/videoseries?list=PLqJK4Oyr5WSglLpxRZM5cAnmMdgsio-Zy"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="my-3 col-lg-4 col-md-4 col-sm-12">
              <h3>
                <a
                  href="https://www.youtube.com/c/ProgrameseufuturoComWagnerGaspar"
                  target="_blank"
                  className="links"
                >
                  Programe seu futuro
                </a>
              </h3>
              <p>
                Curso introdutório de Algoritmos e Lógica de Programação
                utilizando Fluxograma, Scratch e Portugol.
              </p>
              <ul>
                <li>
                  <a className="links" href="#fluxograma">
                    Fluxograma
                  </a>
                </li>
                <li>
                  <a className="links" href="#scratch">
                    Scratch
                  </a>
                </li>
                <li>
                  <a className="links" href="#portugol">
                    Portugol
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* fluxograma */}
      <div className="container my-5 text-center text-white" id="fluxograma">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-auto">
            <h3 className="secondary-color h1 mb-3">Fluxograma</h3>
            <p>
              Um fluxograma nada mais é que uma forma visual de representar
              passos ou etapas de um processo por meio de formas geométricas,
              facilitando bastante a compreensão dos problemas.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 my-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2145/2145546.png"
              className="img-fluid logo-curso my-3"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*Scratch */}
      <div className="container my-5 text-center text-white" id="scratch">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-auto">
            <h3 className="secondary-color h1 mb-3">Scratch</h3>
            <p>
              O Scratch é um ambiente virtual desenvolvido pelo Instituto de
              Tecnologia de Massachusetts (MIT) com o objetivo de ensinar
              programação para crianças e adolescentes. Basicamente o usuário
              precisa arrastar e juntar uma série de blocos, semelhante a um
              quebra-cabeça, montando dessa forma seu programa.{" "}
            </p>
          </div>
          <div className="col-sm-12 col-md-6 my-auto">
            <img
              src="https://static-blog.render.com.br/wp-content/uploads/2015/08/Scratch.png"
              className="img-fluid logo-curso my-3"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Portugol */}
      <div className="container my-5 text-center text-white" id="portugol">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-auto">
            <h3 className="secondary-color h1 mb-3">Portugol</h3>
            <p>
              Portugol é uma linguagem de programação educativa totalmente em
              português, eliminando dessa forma a barreira que a sintaxe de uma
              linguagem profissional, normalmente em inglês, pode impor aos
              iniciantes.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 my-auto">
            <img
              src="https://avatars.githubusercontent.com/u/28770607?v=4"
              className="img-fluid logo-curso my-3"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LogicaProgramacao;

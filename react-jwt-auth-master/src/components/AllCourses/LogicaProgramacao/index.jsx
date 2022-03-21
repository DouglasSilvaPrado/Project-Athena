import React from "react";
import "./styles.css";

import CourseVideo from "../../layout/CourseVideo";
import CourseDescription from "../../layout/CourseDescription";

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
      <CourseVideo 
        video="https://www.youtube.com/embed/videoseries?list=PLqJK4Oyr5WSglLpxRZM5cAnmMdgsio-Zy"
        reference="https://www.youtube.com/c/ProgrameseufuturoComWagnerGaspar"
        channel="Programe seu futuro"
        text="Curso introdutório de Algoritmos e Lógica de Programação
        utilizando Fluxograma, Scratch e Portugol."
        listRef1="#fluxograma"
        listItem1="Fluxograma"

        listRef2="#scratch"
        listItem2="Scratch"

        listRef3="#portugol"
        listItem3="Portugol"
      />
      
      {/* fluxograma */}
      <CourseDescription
        id={"fluxograma"}
        title="Fluxograma"
        description="Um fluxograma nada mais é que uma forma visual de representar
        passos ou etapas de um processo por meio de formas geométricas,
        facilitando bastante a compreensão dos problemas."
        image="https://cdn-icons-png.flaticon.com/512/2145/2145546.png"
      />

     

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

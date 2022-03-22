import React from 'react'
import Jumbotron from '../../layout/Jumbotron';
import Div from '../../layout/Div';
import Equipe from '../../layout/Equipe';

function PageAbout() {
  return (
    <>
      <Jumbotron
        title={'Programa Athena'}
        description={`Projeto Athena visa ajudar meninas de 11 a 17 anos, utilizando cursos com conteúdo estratégicos para aguçar a curiosidade delas no mundo da tecnologia com projetos lúdicos e acessíveis para a população de baixa renda.`}
        image={'https://i.ibb.co/BLyYsYC/sobre-Athena.gif'}
      />

      <div class="container w-75 " >
        <h2 class="h1 text-center my-5">Sobre Athena</h2>
        <p >
          O Projeto Athena nasceu em 2021, fundada por alunos da RecodePro, ao longo do curso desenvolvedor Full Stack.
        </p>
        <p>
          Durante esses seis meses de história, nosso maior compromisso sempre foi com empoderar meninas de 11 a 17 anos. Foi com o apoio da Recode que nós desenvolvemos a vontade de mudar o mundo a nossa volta.
        </p>
        <p >
          Nós acreditamos na igualdade de gênero e que as mulheres são capazes de ocupar posições em qualquer área de tecnologia. Por isso, desenvolvemos soluções digitais para aguçar a curiosidade delas no mundo da tecnologia com projetos lúdicos e acessíveis.
        </p>

        <p >
          Atualmente, somos três alunos. Juntos, acumulamos a experiência em projetos de Tecnologia.
        </p>
        <p>
          Nosso time atua em métodos de trabalho adequados a cada desafio.
        </p>
        <p>
          Nós habilitamos nossas alunas a superarem os maiores desafios da era digital, através da tecnologia e da eficiência.
        </p>
      </div>
      <Div
        title="Equipe" />
      <Equipe />
    </>
  );
}

export default PageAbout;
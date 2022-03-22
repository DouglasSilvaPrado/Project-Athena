import React from 'react'
import Jumbotron from '../../layout/Jumbotron';
import Div from '../../layout/Div';
import Equipe from '../../layout/Equipe';
import BoxAbout from '../../layout/BoxAbout'
import BoxAboutR from '../../layout/BoxAboutR'

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
      <BoxAbout
        title="Missão"
        mensage="Ajudar meninas de 11 a 17 anos de situações de vulnerabilidade apresentando a elas o mundo da tecnologia."
        type="missao"
      />
      <BoxAboutR
        title="Visão"
        mensage=" Aumentar o número de mulheres na área da tecnologia."
        type="visao"
      />
      <BoxAbout
        title="Valores"
        mensage="Igualdade de gênero, inclusão social, valorizar pessoas, produzir sorrisos, elevar a autoestima com responsabilidade e empreendedorismo responsável."
        type="valor"
      />
      <Div
        title="Equipe" />
      <Equipe />
    </>
  );
}

export default PageAbout;
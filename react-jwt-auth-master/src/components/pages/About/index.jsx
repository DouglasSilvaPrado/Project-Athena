import React from 'react'
import Jumbotron from '../../layout/Jumbotron';

function PageAbout() {
    return ( 
        <>
         <Jumbotron
           title={'Programa Athena'}
           description={`Projeto Athena visa ajudar meninas de 11 a 17 anos, utilizando cursos com conteúdo estratégicos para aguçar a curiosidade delas no mundo da tecnologia com projetos lúdicos e acessíveis para a população de baixa renda.`}
           image={'https://i.ibb.co/BLyYsYC/sobre-Athena.gif'} 
          />
        </>
     );
}

export default PageAbout;
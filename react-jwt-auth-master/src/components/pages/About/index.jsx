import React from 'react'
import linkedin from'../../../img/linkedin.svg';
import github from'../../../img/github.svg';
import manoel from'../../../img/img_manoel.svg';
import guilherme from'../../../img/img_guilherme.svg';
import douglas from'../../../img/img_douglas.svg';

function PageAbout() {
    return ( 
        <>
           
<div className="jumbotron jumbotron-fluid  ">
    <div className="container py-5 w-75 mx-auto row row-cols-md-1 row-cols-lg-2 justify-content-center">
        <div className="col my-auto pr-3 ">
            <h1 className="pb-3">Programa Athena</h1>
            <p className="lead">Projeto Athena visa ajudar meninas de 11 a 17 anos, utilizando cursos com conteúdos estratégicos para aguçar a curiosidade delas no mundo da tecnologia com projetos lúdicos e acessíveis para a população de baixa renda.</p>
        </div>

        <div className="video col">
            <div className="video-container">
                <div className="video-foreground">
                    <iframe src="https://www.youtube.com/embed/fXAecPsleVQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=fXAecPsleVQ&mute=1"
                            frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
            </div>

        </div>

    </div>
</div>

<div className="container w-75 " >
    <h2 className="h1 text-center my-5">Sobre Athena </h2>
    <p >
        O Projeto Athena nasceu em 2021, fundada por alunos da RecodePro, ao longo do curso desenvolvedor Full Stack.
    </p>
    <p >
        Durante esses seis meses de história, nosso maior compromisso sempre foi com empoderar mulher 11 a 17 anos. Foi com o apoio da Recode que nos desenvolvemos a vontade de mudar o mundo a nossa volta.
    </p>
    <p >
        Nós acreditamos na igualdade de gênero e que as mulheres são capazes ocupar posições em qualquer área de tecnologia. Por isso, desenvolvemos soluções digitais para aguçar a curiosidade delas no mundo da tecnologia com projetos lúdicos e acessíveis.
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

<div className="container pt-5 ">
    {/* missao*/}
    <div className="container container-text">
        <div className="d-flex row row-cols-sm-1 row-cols-md-2 ">
            <div className="w-50  my-auto texto col">
                <h2>Missão</h2>
                <p className="w-75">
                    Ajudar meninas de 11 a 17 anos de situaçoes de vunerábilidade apresendado à elas o mundo da tecnologia
                </p>
            </div>
            <div className="missao"></div>
        </div>
    </div>
   {/*  visao */}
    <div className="container container-text">
        <div className="d-flex row row-cols-sm-1 row-cols-md-2">
            <div className="visao"></div>
            <div className="w-50 my-auto texto-l col mr-0 text-right ">                
                    <h2>Visão</h2>
                    <div className="d-flex justify-content-end">
                        <p className="w-75 ">
                            Aumentar o número de mulheres na área da tecnologia.
                        </p>
                    </div>               
            </div>
        </div>
    </div>
    {/*valor*/}
    <div className="container container-text col pb-5">
        <div className="d-flex row row-cols-sm-1 row-cols-md-2">
            <div className="w-50  my-auto texto col">
                <h2>Valores</h2>
                <p className="w-75">
                    Iguadade de genero, inclusão social, valorizar pessoas, produzir sorrisos, elevar a autoestima com responsabilidad  e empreendedorismo responsável .
                </p>
            </div>
            <div className="valor"></div>
        </div>
    </div>
</div>

<div className="container d-flex align-items-center justify-content-around mt-5">

    <div className="tracer"></div>
    <h2 className="p-5">Equipe</h2>
    <div className="tracer"></div>


</div>

<div className="container my-5 w-50 ">

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">

        <div className="col">
            <div className="card h-100 border-0 bg-transparent">
                <img src={douglas}
                     className="card-img-top"
                     alt="..." />
                <p className="text-center pt-2">Douglas  Prado</p>
                <ul className="d-flex d-inline justify-content-center mx-0 px-0 ">
                    <li className="p-2">
                        <a href="https://www.linkedin.com/in/douglas-da-silva-prado-2633b8130" target="_blank">
                            <img src={linkedin} alt="Alternate Text" />
                        </a>
                    </li>
                    <li className="p-2">
                        <a href="https://github.com/DouglasSilvaPrado" target="_blank">
                            <img src={github} alt="Alternate Text" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="col">
            <div className="card h-100 border-0 bg-transparent">
                <img src={guilherme}
                     className="card-img-top"
                     alt="..." />
                <p className="text-center pt-2">Guilherme Martins</p>
                <ul className="d-flex d-inline justify-content-center mx-0 px-0 ">
                    <li className="p-2">
                        <a href="https://www.linkedin.com/in/guismartins/" target="_blank">
                            <img src={linkedin} alt="Alternate Text" />
                        </a>
                    </li>
                    <li className="p-2">
                        <a href="https://github.com/GuisMartins" target="_blank">
                            <img src={github}  alt="Alternate Text" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="col">
            <div className="card h-100 border-0 bg-transparent">
                <img src={manoel}
                     className="card-img-top"
                     alt="..." />
                <p className="text-center pt-2">Manoel Silva</p>
                <ul className="d-flex d-inline justify-content-center mx-0 px-0 ">
                    <li className="p-2">
                        <a href="https://www.linkedin.com/in/h-t-43523622a/" target="_blank">
                            <img src={linkedin} alt="Alternate Text" />
                        </a>
                    </li>
                    <li className="p-2">
                        <a href="https://github.com/manoelailson" target="_blank">
                            <img src={github}  alt="Alternate Text" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
        </>
     );
}

export default PageAbout;
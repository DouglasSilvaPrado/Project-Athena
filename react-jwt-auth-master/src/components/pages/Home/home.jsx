import React from 'react';
import parceiro3 from'../../../img/lg_parceiro3.svg';
import parceiro2 from'../../../img/lg_parceiro2.svg';
import parceiro1 from'../../../img/lg_parceiro1.svg';
import logica from'../../../img/logica.svg';
import social from'../../../img/social.svg';
import games from'../../../img/games.svg';

function PageHome() {
  return ( 
    <>
     <div className="jumbotron jumbotron-fluid  ">
    <div className="container py-5 w-75 mx-auto row row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-center">
        <div className=" col my-auto  ">
            <h1 className="pb-3">ATHENA</h1>
            <p className="lead">O programa Athena visa ajudar meninas de 11 a 17 anos de situaçoes de vunerábilidade apresendado à elas o mundo da tecnologia</p>
        </div>

        <div className="video col">
            <div className="video-container">
                <div className="video-foreground">
                    <iframe src="https://www.youtube.com/embed/IBH1sj7SkuM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=IBH1sj7SkuM&mute=1"
                            frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
            </div>

        </div>
    </div>
</div>

<div className="container w-75 mx-auto">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col pb-5">
            <div className="card h-100 ">
                <img src={logica}
                     className="card-img-top"
                     alt="..." />
                <div className="card-body text-primary">
                    <h3 className="card-title">Introdução a logica de programação </h3>

                </div>
            </div>
        </div>
        <div className="col pb-5">
            <div className="card h-100 ">
                <img src={social}
                     className="card-img-top"
                     alt="..." />
                <div className="card-body text-primary">
                    <h3 className="card-title">Social media</h3>

                </div>
            </div>
        </div>
        <div className="col pb-5">
            <div className="card h-100 ">
                <img src={games}
                     className="card-img-top"
                     alt="..." />
                <div className="card-body text-primary">
                    <h3 className="card-title">Introdução a games</h3>

                </div>
            </div>
        </div>
    </div>
</div>

<div className="container d-flex align-items-center justify-content-around mt-5">

    <div className="tracer"></div>
    <h2 className="p-5">Parceiros</h2>
    <div className="tracer"></div>


</div>

<div className="container my-5 w-50">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col pb-5">
            <div className="card h-100 " style={{background:"none", border:"none"}}>
                <img src={parceiro1} 
                     className="card-img-top"
                     alt="..." />

            </div>
        </div>
        <div className="col pb-5">
            <div className="card h-100 " style={{background:"none", border:"none"}}>
                <img src={parceiro2}
                     className="card-img-top"
                     alt="..." />

            </div>
        </div>
        <div className="col pb-5">
            <div className="card h-100 " style={{background:"none", border:"none"}}>
                <img src={parceiro3}
                     className="card-img-top"
                     alt="..." />
                
            </div>
        </div>
    </div>
</div>
    </>
   );
}

export default PageHome;
import React from 'react';

import Jumbotron from '../../layout/Jumbotron';
import MiniCard from '../../layout/MiniCard';

function PageHome() {
  return ( 
    <>
      <Jumbotron
           title={'ATHENA'}
           description={`O programa Athena visa ajudar meninas de 11 a 17 anos em situação de vunerabilidade apresentando a elas o mundo da tecnologia`}
           image={'https://i.ibb.co/ZKkfssp/index-Athena.gif'} 
          />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">

        <div className="col">
          <MiniCard image={'https://raw.githubusercontent.com/DouglasSilvaPrado/ProjetoAthena/a1152507e9c1b610b30b5bcf763139ff5cb8c1bb/Squad55/img_douglas.svg'} title={"Recode"} />
        
        </div>

      </div>
    </>
   );
}

export default PageHome;
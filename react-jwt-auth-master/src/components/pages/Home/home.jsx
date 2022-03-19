import React from 'react';

import Jumbotron from '../../layout/Jumbotron';

function PageHome() {
  return ( 
    <>
      <Jumbotron
           title={'ATHENA'}
           description={`O programa Athena visa ajudar meninas de 11 a 17 anos em situação de vunerabilidade apresentando a elas o mundo da tecnologia`}
           image={'https://i.ibb.co/ZKkfssp/index-Athena.gif'} 
          />
    </>
   );
}

export default PageHome;
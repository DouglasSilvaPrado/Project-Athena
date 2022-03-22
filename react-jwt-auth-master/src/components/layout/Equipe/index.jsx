import React from 'react'
import MiniCard from '../MiniCard';

export default function index() {
  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">

        <div className="col">
          <MiniCard image={'https://raw.githubusercontent.com/DouglasSilvaPrado/ProjetoAthena/a1152507e9c1b610b30b5bcf763139ff5cb8c1bb/Squad55/img_douglas.svg'} title={"Douglas Prado"}
            linkedin={"https://www.linkedin.com/in/douglas-da-silva-prado-2633b8130"}
            github={"https://github.com/DouglasSilvaPrado"}
          />

        </div>
        <div className="col">
          <MiniCard image={'https://i.ibb.co/vx5wv4X/img-guilherme-1.png'} title={"Guilherme Martins"}
            linkedin={"https://www.linkedin.com/in/guismartins/"}
            github={"https://github.com/GuisMartins"}
          />

        </div>
        <div className="col">
          <MiniCard image={'https://i.ibb.co/2Y2JsC8/img-manuel.png'} title={"Manoel Silva"}
            linkedin={"https://www.linkedin.com/in/h-t-43523622a/"}
            github={"https://github.com/manoelailson"}
          />

        </div>

      </div>
    </div>
  )
}

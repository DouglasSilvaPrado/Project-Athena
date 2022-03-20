import React from 'react'

function MiniCard(props) {
    return ( 
        <>
            <div className="card h-100 border-0 bg-transparent">
                <img src={props.image}
                     className="card-img-top"
                     alt="..." />
                <p className="text-center pt-2">{props.title}</p>
                <ul className="d-flex d-inline justify-content-center mx-0 px-0 ">
                    <li className="p-2">
                        <a href="https://www.linkedin.com/in/douglas-da-silva-prado-2633b8130" target="_blank">
                            <img src="~/linkedin.svg" alt="Alternate Text" />
                        </a>
                    </li>
                    <li className="p-2">
                        <a href="https://github.com/DouglasSilvaPrado" target="_blank">
                            <img src="~/github.svg" alt="Alternate Text" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
     );
}

export default MiniCard;
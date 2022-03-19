import React from 'react'

function MiniCard(props) {
    return ( 
        <>
            <div class="card h-100 border-0 bg-transparent">
                <img src={props.image}
                     class="card-img-top"
                     alt="..." />
                <p class="text-center pt-2">{props.title}</p>
                <ul class="d-flex d-inline justify-content-center mx-0 px-0 ">
                    <li class="p-2">
                        <a href="https://www.linkedin.com/in/douglas-da-silva-prado-2633b8130" target="_blank">
                            <img src="~/linkedin.svg" alt="Alternate Text" />
                        </a>
                    </li>
                    <li class="p-2">
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
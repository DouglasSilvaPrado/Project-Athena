import React from 'react'

function MiniCard(props) {
    return (
        <>
            <div className="card h-100 border-0 bg-transparent">
                <img src={props.image}
                    className="card-img-top"
                    alt={props.alt} />
                <p className="text-center pt-2">{props.title}</p>
                <ul className="d-flex d-inline justify-content-center mx-0 px-0 ">
                    <li className="p-2">
                        <a href={props.linkedin} target="_blank">
                            <img src="https://i.ibb.co/YNfgsTS/linkedin.png" alt="Linkedin" />
                        </a>
                    </li>
                    <li className="p-2">
                        <a href={props.github} target="_blank">
                            <img src="https://i.ibb.co/jRNGC0k/github.png" alt="GitHub" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MiniCard;
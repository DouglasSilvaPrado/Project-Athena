import React from 'react'

function MiniCard(props) {
    return (
        <>
            <div className="h-100 border-0 bg-transparent">
                <img src={props.image}
                    className="card-img-top"
                    alt={props.alt} />
                <p className="text-center pt-2">{props.title}</p>
            </div>
        </>
    );
}

export default MiniCard;
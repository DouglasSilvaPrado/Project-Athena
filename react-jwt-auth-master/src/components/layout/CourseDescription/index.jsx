import React from 'react';

function CourseDescription(props) {
    return ( 
        <>
            <div className="container my-5 text-center text-white" id={props.id}>
                <div className="row">
                <div className="col-sm-12 col-md-6 my-auto">
                    <h3 className="secondary-color h1 mb-3">{props.title}</h3>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 my-auto">
                    <img
                    src={props.image}
                    className="img-fluid logo-curso my-3"
                    alt={props.title}
                    />
                </div>
                </div>
            </div>

        </>
     );
}

export default CourseDescription;
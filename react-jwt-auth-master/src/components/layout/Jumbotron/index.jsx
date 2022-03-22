import React from 'react';

function Jumbotron(props) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className='row text-center justify-content-center align-items-center'>
                        <div className="col-sm-12 col-md-6  text-white py-5">
                            <h1 className='pb-3'>{props.title}</h1>
                            <p className="lead">{props.description}</p>
                        </div>{/* texts */}
                        <div className="col-sm-12 col-md-6  py-5">
                            <img src={props.image}
                                className="img-fluid juboteom-video"
                                alt={props.title}

                            />
                        </div> {/* img */}
                    </div> {/*row  */}
                </div>{/* container */}
            </div>{/* jumbotron */}

        </>
    );
}

export default Jumbotron;
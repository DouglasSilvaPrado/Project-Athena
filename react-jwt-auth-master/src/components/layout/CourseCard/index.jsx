import React from 'react';
import { Link } from 'react-router-dom'

import "./styles.css"


function CourseCard({course}) {

    return ( 
        <>
            <div className="card h-100" >
                <img src={course.image} className="card-img-top" alt={course.name}/>
                <div className="card-body">
                    <h5 className="card-title">{course.name}  {`[${course.duration} Horas]`}</h5>
                    <p className="card-text">{course.description}</p>              
                </div>
                <div className="card-footer">
                    <Link to={`/course/${course.id}`}>
                       <div className="btn btn-primary w-100">Começar</div>
                    </Link>
                </div>
            </div>
        </>
     );
}

export default CourseCard;
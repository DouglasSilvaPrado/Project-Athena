import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';

function CourseById({courseId}) {

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/auth/courses/${courseId}`)
            .then((response) => {
                setCourse(response.data);
            })
    }, [courseId]);


    return ( 
        <>
           <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className='row text-center justify-content-center align-items-center'>
                <div className="col-sm-12 col-md-6  text-white py-5">
                    <h1 className='pb-3'>{course.name}</h1>
                    <p className="lead">{course.description}</p>
                </div>{/* texts */}
                <div className="col-sm-12 col-md-6  py-5">
                        <img src={course.image}
                            className="img-fluid"
                            alt="" />
                </div> {/* gif */} 
              </div> {/*row  */}    
            </div>{/* container */}   
          </div>{/* jumbotron */}
        </>
     );
}

export default CourseById;
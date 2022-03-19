import axios from 'axios';
import CourseCard from '../../layout/CourseCard';
import React, { useState, useEffect } from 'react';

import "./styles.css"


function PageCourses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/auth/courses')
      .then((response) => {
        setCourses(response.data.content);
      });
  }, []);
    

    return ( 
        <>

          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className='row text-center justify-content-center align-items-center'>
                <div className="col-sm-12 col-md-6  text-white py-5">
                    <h1 className='pb-3'>ATHENA</h1>
                    <p className="lead">Faça seu caminho, <br /> conheça um novo mundo</p>
                </div>{/* texts */}
                <div className="col-sm-12 col-md-6  py-5">
                        <img src="https://i.ibb.co/4JW5BVY/destaque-Cursos.gif"
                            className="img-fluid"
                            alt="" />
                </div> {/* gif */} 
              </div> {/*row  */}    
            </div>{/* container */}   
          </div>{/* jumbotron */}

          <div className="container">
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-md-6 col-lg-4 mb-3">
                        <CourseCard course={course} />
                    </div>
                )
                )}   
            </div>
        </div>        
            
        </>
     );
}

export default PageCourses;
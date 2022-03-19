import axios from 'axios';
import CourseCard from '../../layout/CourseCard';
import React, { useState, useEffect } from 'react';
import Jumbotron from '../../layout/Jumbotron';

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
          <Jumbotron
           title={'ATHENA'}
           description={'Faça seu caminho, conheça um novo mundo'}
           image={'https://i.ibb.co/4JW5BVY/destaque-Cursos.gif'} 
          />

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
import axios from 'axios';
import CourseCard from '../../layout/CourseCard';
import React, { useState, useEffect } from 'react';




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
          <div className="container">
            <h1>Cursos</h1>
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
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
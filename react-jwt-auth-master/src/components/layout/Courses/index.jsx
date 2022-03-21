import React from 'react'
import { useParams } from 'react-router-dom'
import CourseById from '../CourseById';

function Courses() {
    const params = useParams()
    return ( 
        <>
           <CourseById courseId={`${params.courseId}`} /> 
           {console.log(params)}
        </>
     );
}

export default Courses;
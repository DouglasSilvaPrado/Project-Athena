import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';

import Jumbotron from '../Jumbotron';
import { BASE_URL } from '../../utils/requests';

function CourseById({courseId}) {

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/courses/${courseId}`)
            .then((response) => {
                setCourse(response.data);
            })
    }, [courseId]);


    return ( 
        <>
          <Jumbotron
           title={course.name}
           description={course.description}
           image={course.image}
          />
           
        </>
     );
}

export default CourseById;
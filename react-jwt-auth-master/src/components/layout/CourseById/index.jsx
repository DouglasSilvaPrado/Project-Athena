import {useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

function CourseById({courseId}) {

    const navigate = useNavigate()

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/auth/courses/${courseId}`)
            .then((response) => {
                setCourse(response.data.content);
            })
    }, [courseId]);


    return ( 
        <>
            {console.log(course)}
        </>
     );
}

export default CourseById;
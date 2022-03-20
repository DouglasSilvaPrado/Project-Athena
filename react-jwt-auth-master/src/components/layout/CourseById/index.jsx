import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';

import Jumbotron from '../Jumbotron';
import { BASE_URL } from '../../utils/requests';

//courses
import LogicaProgramacao from '../../AllCourses/LogicaProgramacao';
import SocialMedia from '../../AllCourses/SocialMedia';
import IntroducaoGames from '../../AllCourses/IntroducaoGames';
import GitGithub from '../../AllCourses/GitGithub';
import MarketingDigital from '../../AllCourses/MarketingDigital';
import PixelArt from '../../AllCourses/PixelArt';

function CourseById({courseId}) {

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/courses/${courseId}`)
            .then((response) => {
                setCourse(response.data);
            })
    }, [courseId]);

    var selectdCourse;
    if(course.name === 'Introdução a lógica de programação'){
        selectdCourse = <LogicaProgramacao/>
    }else if(course.name === 'Social Media'){
        selectdCourse = <SocialMedia/>
    }else if(course.name === 'Introdução a games'){
        selectdCourse = <IntroducaoGames/>
    }else if(course.name === 'Introdução a Git e Github'){
        selectdCourse = <GitGithub />
    }else if(course.name === 'Curso Marketing Digital'){
        selectdCourse = <MarketingDigital/>
    }else if(course.name === 'Pixel Art'){
        selectdCourse = <PixelArt/>
    }


    return ( 
        <>
          <Jumbotron
           title={course.name}
           description={course.description}
           image={course.image}
          />
           
           {selectdCourse}
           
        </>
     );
}

export default CourseById;
import React from 'react';

import axios from 'axios';
import CourseCard from '../../layout/CourseCard';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/requests';


import Jumbotron from '../../layout/Jumbotron';
import Div from '../../layout/Div';
import Apoie from '../../layout/Equipe';


function PageHome() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/courses`)
      .then((response) => {
        setCourses(response.data.content);
      });
  }, []);

  return (
    <>
      <Jumbotron
        title={'ATHENA'}
        description={`O programa Athena visa ajudar meninas de 11 a 17 anos em situação de vunerabilidade apresentando a elas o mundo da tecnologia`}
        image={'https://i.ibb.co/ZKkfssp/index-Athena.gif'}
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
      <Div
        title="Apoiadores" />
      <Apoie />
    </>
  );
}

export default PageHome;
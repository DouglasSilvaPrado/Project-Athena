import React from "react";

function CourseIntroduction(props) {
  return (
    <>
      <div className="container py-5 text-white text-center">
        <h2 className="py-3">{props.title}</h2>
        <p>
          {props.introduction}
        </p>
      </div>
    </>
  );
}

export default CourseIntroduction;

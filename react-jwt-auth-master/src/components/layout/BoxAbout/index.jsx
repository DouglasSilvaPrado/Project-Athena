import React from 'react'

export default function index(props) {
  return (
    <div className="container container-text">
      <div className="d-flex row row-cols-sm-1 row-cols-md-2 ">
        <div className="w-50  my-auto texto col">
          <h2>{props.title}</h2>
          <p className="w-75">
            {props.mensage}
          </p>
        </div>
        <div className={props.type}></div>
      </div>
    </div>
  )
}

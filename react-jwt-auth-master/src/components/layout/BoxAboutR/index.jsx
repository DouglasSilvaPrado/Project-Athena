import React from 'react'

export default function index(props) {
  return (
    <div>
      <div className="container container-text">
        <div className="d-flex row row-cols-sm-1 row-cols-md-2">
          <div className={props.type}></div>
          <div className="w-50 my-auto texto-l col mr-0 text-end ">
            <h2 className='text-end'>{props.title}</h2>
            <div className="d-flex justify-content-end">
              <p className="w-75 ">
                {props.mensage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

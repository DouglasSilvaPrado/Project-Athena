import React from 'react'
import './style.css'

export default function index(props) {
  return (
    <div>
      <div class="container d-flex align-items-center justify-content-around mt-5">

        <div class="tracer"></div>
        <h2 class="p-5">{props.title}</h2>
        <div class="tracer"></div>


      </div>
    </div>
  )
}

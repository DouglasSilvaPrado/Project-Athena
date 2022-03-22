import React from 'react'
import MiniCardA from '../MiniCardA'

export default function index() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">

        <div className="col">
          <MiniCardA image={'https://i.ibb.co/0QkHKGG/Ellipse-1.png'} title={"RECODE"}
            alt={'RECODE'}
          />
        </div>
        <div className="col">
          <MiniCardA image={'https://i.ibb.co/Df7RrmJ/Ellipse-1-1.png'} title={"SHELL"}
            alt={'SHELL'}
          />
        </div>
        <div className="col">
          <MiniCardA image={'https://i.ibb.co/CWSSBF9/Ellipse-1-2.png'} title={"ITAÚ"}
            alt={'ITAÚ'}
          />
        </div>
      </div>
    </div>
  )
}

import React from 'react';


function CourseVideo(props) {
  return (
    <>
      <div className="container my-5 text-center text-white">
        <div className="container container-text">
          <div className="d-flex row row-cols-sm-1 row-cols-md-2 ">
            <iframe
              className="my-auto col-lg-8 col-md-8 col-sm-12"
              height={400}
              src={props.video}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="my-3 col-lg-4 col-md-4 col-sm-12">
              <h3>
                <a
                  href={props.reference}
                  target="_blank"
                  className="links"
                >
                  {props.channel}
                </a>
              </h3>
              <p>
                {props.text}
              </p>
              <ul>
                <li>
                  <a className="links" href={props.listRef1}>
                    {props.listItem1}
                  </a>
                </li>
                <li>
                  <a className="links" href={props.listRef2}>
                  {props.listItem2}
                  </a>
                </li>
                <li>
                  <a className="links" href={props.listRef3}>
                  {props.listItem2}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseVideo;

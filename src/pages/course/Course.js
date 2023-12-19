import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Course = ({ course }) => {
  return (
    <MDBRow className="d-inline flex-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <MDBCol className="d-inline-flex p-3">
        <MDBCard>
          <MDBRipple rippleColor="light" rippleTag="div" className="bg-image ">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/textures/small/52.jpg"
              className="rounded-4 shadow-4"
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{course.learningObject}</MDBCardTitle>
            <MDBCardText>${course.price}</MDBCardText>
            <Link to={`/course/${course.id}`} className="course-details">
              View Details
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    /* <div className='courses'>
            <div className="course">
              
                <div className="course-title">
                    <h5 className="cart-name">
                        <Link to={`/course/${course.id}`}>{course.learningObject}</Link>
                    </h5>
                    <div className="course-ratings">
                        <div className="course-rating">
                            <div className="star" style={{ width: `${(course.rating / 5) * 100}%` }}></div>
                        </div>
                    </div>
                    <p className="course-price">${course.price}</p>
                    <Link to={`/course/${course.id}`}  className="course-details">View Details</Link>
                </div>
            </div>
        </div> */
  );
};

export default Course;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const MyCourse = () => {
  const { mycourses } = useSelector((state) => state.mycourses);
  return (
    <MDBCard
      shadow="8"
      border="primary"
      background="white"
      className="align-items-center justify-content-center mb-4 mt-4 w-50"
      alignment="center"
      style={{ height: "200px", margin: "360px" }}
    >
      <MDBCardHeader>My Course</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Create Your Course</MDBCardTitle>
        <Link to="/create/course">CREATE</Link>
        {mycourses.map((course) => (
          <div className="course" key={course.id}>
            <div className="course-name">
              <h5 className="cart-title">
                <Link to={`/mycourse/${course.id}`}>
                  {course.learningObject}
                </Link>
              </h5>
            </div>
          </div>
        ))}
      </MDBCardBody>
    </MDBCard>
  );
};

export default MyCourse;

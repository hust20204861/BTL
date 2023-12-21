import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loader from "../../components/layout/Loader";
import MetaData from "../../components/layout/MetaData";
import {
  getCourseDetails,
  clearErrors,
  getCourseFeedbacks,
} from "../../actions/courseActions";
import { addItemToCart } from "../../actions/cartActions";
import { enrollCourses } from "../../actions/courseActions";
import { MDBTypography, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

const CourseDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { token, userId } = useSelector((state) => state.auth);
  // const { enrolled } = useSelector(state => state.enrollCourses)
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const { error, loading, course } = useSelector(
    (state) => state.courseDetails
  );
  const { feedbacks } = useSelector((state) => state.courseFeedbacks);

  useEffect(() => {
    dispatch(getCourseDetails(id, token));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, id, token]);

  const addToCart = () => {
    dispatch(addItemToCart(id, quantity));
    alert.success("Item Added to Cart");
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  const handleEnrollClick = () => {
    setShowConfirmation(true);
  };
  const handleConfirm = () => {
    dispatch(enrollCourses(id, userId, token));
    setShowConfirmation(false);
  };
  const handleCancel = () => {
    setShowConfirmation(false);
  };

  //show and hide feedbacks
  const handleFeedbacksClick = () => {
    dispatch(getCourseFeedbacks(id, token));
    setShowFeedbacks(true);
  };
  const handleCancelFeedbacks = () => {
    setShowFeedbacks(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <MetaData title={course.learningObject} />
          <div className="courses-details">
            <div className="course-details-name">
            <div className="p-3 mb-2 bg-primary bg-gradient text-white rounded-5">
              <h3>{course.learningObject}</h3>
              <p id="course_id">Course # {course.id}</p>
              </div>
              <hr />
              <hr />
              <div className="course-rating">
                <div
                  className="star"
                  style={{ width: `${(course.rating / 5) * 100}%` }}
                ></div>
              </div>
              <MDBTypography className="lead mb-0 border">
                <p>Description:</p>
                <p>{course.courseDescription}</p>
              </MDBTypography>
              <hr />
              <p id="course_price">${course.price}</p>
              <p id="requiredSkills">{course.requiredSkills}</p>
              <p id="courseFor">{course.courseFor}</p>
              <p id="title">{course.title}</p>
              <p id="subtitle">{course.subtitle}</p>
              <p id="language">{course.language}</p>
              <p id="level">{course.level}</p>
              <p id="category">{course.category}</p>
              <p id="primarilyTaught">{course.primarilyTaught}</p>
              <p id="welcomeMessage">{course.welcomeMessage}</p>
              <p id="congratulationMessage">{course.congratulationMessage}</p>
              <p id="status">{course.status}</p>
              <p id="createdAt">{course.createdAt}</p>
              <p id="updatedAt">{course.updatedAt}</p>
              <hr />
              {/* <button type="button"  disabled={course.sale === 0} onClick={addToCart}>Add to Cart</button> Thêm vào giỏ hàng của bạn 
                            <hr />
                          <button type="button" onClick={handleEnrollClick}>Enroll</button>  Tham gia khóa học  

                        //   
                         */}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <MDBBtn disabled={course.sale === 0} onClick={addToCart}>
                  Add to Cart
                </MDBBtn>
                <MDBBtn onClick={handleEnrollClick}>Enroll</MDBBtn>
              </div>
              <hr />
              <Link onClick={handleFeedbacksClick}>View feedbacks</Link>
              {showFeedbacks && feedbacks ? (
                <div>
                  {feedbacks.data.map((feedback) => (
                    <div key={feedback.id}>
                      <p>Star: {feedback.rating}sao ------ Đánh giá: {feedback.feed_back} </p>

                    </div>
                  ))}
                  <MDBBtn onClick={handleCancelFeedbacks}>Cancel</MDBBtn>
                </div>
              ) : (
                <div>Xem đánh giá của bạn ở đây!</div>
              )}

              {showConfirmation && (
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <p>Are you sure you want to enroll?</p>
                  <MDBBtn onClick={handleConfirm}>OK</MDBBtn>
                  <MDBBtn onClick={handleCancel}>Cancel</MDBBtn>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CourseDetails;

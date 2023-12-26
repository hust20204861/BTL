import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBTypography,
  MDBBtn,
  MDBTextArea,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Box, Button, List, ListItem, Rating, Typography } from "@mui/material";
import { COLOR } from "../../styles/color";
import { useNavigate } from "react-router-dom";

import ListReviews from "../review/ListReviews";
import Loader from "../../components/layout/Loader";
import MetaData from "../../components/layout/MetaData";
import {
  getCourseDetails,
  newFeedback,
  clearErrors,
  getSections,
  getLectures
} from "../../actions/courseActions";
import { Link } from "react-router-dom";
const MyEnrollCourseDetails = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const { error, loading, course } = useSelector(
    (state) => state.courseDetails
  );
  const { sections } = useSelector((state) => state.sections);
  const { lectures } = useSelector(state => state.lectures);
  console.log("sssss", lectures)
  const { discussions } = useSelector(state => state.discussions)
 
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("");
  const [feed_back, setFeed_back] = useState("");

  useEffect(() => {
    dispatch(getCourseDetails(id, token));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, id, token]);
  useEffect(() => {
    dispatch(getLectures(id, token));
  }, [dispatch, id, token]);
  const feedback = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("rating", rating);
    formData.set("time", time);
    formData.set("feed_back", feed_back);
    formData.set("course_id", id);

    const jsonObject = {};
    for (const pair of formData.entries()) {
      jsonObject[pair[0]] = pair[1];
    }
    const jsonData = JSON.stringify(jsonObject);

    dispatch(newFeedback(jsonData, token));
    alert.success("Sent your feedback");
  };
  const [ visible, setVisible ] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  }
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
           
            
              <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: "12px" }}
              onClick={async () => {
                const lectureId = lectures.data.sort((a, b) => a.id - b.id)[0]
                  .id;
                navigate(`/course/${course.id}/${lectureId}`);
              }}
            >
              <Typography variant={"body1"} color={COLOR.white}>
                Watch now
              </Typography>
            </Button>
              <hr/>
              <form>
                <h4>Đánh giá của bạn</h4>
                <MDBInput
                  wrapperClass="mb-4"
                  textarea
                  id="form4Example3"
                  rows={4}
                  label="Feedback:"
                  value={feed_back}
                  onChange={(e) => setFeed_back(e.target.value)}
                />
                <MDBInput
                  id="form4Example1"
                  wrapperClass="mb-4"
                  label="Khóa học được đánh giá bao nhiêu sao?"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                <MDBCheckbox
                  wrapperClass="d-flex justify-content-center mb-4"
                  id="form4Example4"
                  label="Send me a copy of this feedback"
                  defaultChecked
                />
                <MDBBtn type="submit" className="mb-4" block onClick={feedback}>
                  Feedback
                </MDBBtn>
              </form>
              {/* <div className="form-group">

                                    <label htmlFor="name_field">Đánh giá của bạn</label>
                                    <input
                                        type="text"
                                        value={feed_back}
                                        onChange={(e) => setFeed_back(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">Khóa học được đánh giá bao nhiêu sao?</label>
                                    <input
                                        type="text"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                    />
                                </div>
                            <button type="button" onClick={feedback} >feedback</button>
        

                            <hr /> */}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MyEnrollCourseDetails;

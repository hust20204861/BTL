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
import { Box, Typography  } from "@mui/material";

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
import Lecture from "./Lecture";
const MyEnrollCourseDetails = () => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const { error, loading, course } = useSelector(
    (state) => state.courseDetails
  );
  const { sections } = useSelector((state) => state.sections);
  const { lectures } = useSelector(state => state.lectures);
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
    dispatch(getSections(id, token));
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
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const handleClick = (sectionId) => {
    setVisible(!visible);
    setSelectedSectionId(sectionId);
  }
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment >
          <MetaData title={course.learningObject} />
          <div className="courses-details">
            <div className="course-details-name">
              <div className="p-3 mb-2 bg-primary bg-gradient text-white rounded-5">
                <h3>{course.learningObject}</h3>
                <p id="course_id">Course # {course.id}</p>
              </div>
              <MDBTypography className="lead mb-0 border">
                <p>Description:</p>
                <p>{course.courseDescription}</p>
              </MDBTypography>
             
               {/* khi click vào section thì thả xuống các lecture */}
               {/* nếu section không rỗng, in ra các section  */}
              {sections ? (
              <Box>
                    <Box id='section'>
                      {sections.map(section => (
                        // click vào các section thay đổi visible hiệc lecture
                        <Box onClick={() => handleClick(section.id)} key={section.id}>
                        <Typography fontWeight={'bold'} 
                        bgcolor={'#e5e0e0'} 
                        width={'50%'}
                        variant="h6" 
                        border={1} 
                        borderColor={'black'} 
                        marginBottom={1} 
                        height={'30px'}>
                                 {section.name}
                        </Typography>
                        </Box>
                      ))}
                    </Box>
                      {visible &&  (<Box >
                        <Typography fontWeight={'bold'} 
                        bgcolor={'#e3f2fd'} 
                        variant="h6" 
                        width={'50%'}
                        border={1} 
                        borderColor={'black'} 
                        marginTop={1} 
                        height={'60px'}>
                        <Lecture key={selectedSectionId} selectedSectionId={selectedSectionId} id={id}></Lecture>   
                        </Typography>
                         
                                 </Box>)}
              </Box>) : (<Box>Khóa học này chưa có bài giảng</Box>
              )}

            
              <form style={{marginTop: "500px"}}>
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
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MyEnrollCourseDetails;

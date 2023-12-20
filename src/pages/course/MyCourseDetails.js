import React, { Fragment, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../components/layout/Loader'
import MetaData from '../../components/layout/MetaData'
import { getCourseDetails, clearErrors, getCourseFeedbacks } from '../../actions/courseActions'
const MyCourseDetails = () => {

    const { token } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();
    const { feedbacks} = useSelector(state => state.courseFeedbacks)
    const { error, loading, course } = useSelector(state => state.courseDetails)
    useEffect(() => {

        dispatch(getCourseDetails(id, token))
        
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, id, token])

    const [showFeedbacks, setShowFeedbacks] = useState(false);
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
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={course.learningObject} />
                           <hr />
                    <div className="courses-details">
                        <div className="course-details-name">
                            <h3>{course.learningObject}</h3>
                            <hr />
                            <p id="course_id">Course # {course.id}</p>
                            <hr />
                            <div className="course-rating">
                            <div className="star" style={{ width: `${(course.rating / 5) * 100}%` }}></div>
                            </div>

                            <p id="course_price">Price: ${course.price}</p>
                            <p id="requiredSkills">RequiredSkills: ${course.requiredSkills}</p>
                            <p id="courseFor">CourseFor: ${course.courseFor}</p>
                            <p id="title">Title: ${course.title}</p>
                            <p id="subtitle">SubTitle: ${course.subtitle}</p>
                            <p id="language">Language: ${course.language}</p>
                            <p id="level">Level: ${course.level}</p>
                            <p id="category">Catrgory: ${course.category}</p>
                            <p id="primarilyTaught">PrimarilyTaught: ${course.primarilyTaught}</p>
                            <p id="welcomeMessage">WelcomeMessage: ${course.welcomeMessage}</p>
                            <p id="congratulationMessage">CongratulationMessage: ${course.congratulationMessage}</p>
                            <hr />
                            <p id="createdAt">Create at: ${course.createdAt}</p>
                            <p id="updatedAt">Update at: ${course.updatedAt}</p>
                            <p id="status">Status: ${course.status}</p>
                            <h4 className="mt-2">Description:</h4>
                            <p>{course.courseDescription}</p>
                            <hr />
 
                            <Link onClick={handleFeedbacksClick}>View feedbacks</Link>
                            {showFeedbacks && feedbacks? (
                            <div>
                            {feedbacks.data.map((feedback) => (
                               <div key={feedback.id}>
                               <p>Đánh giá: {feedback.feed_back} </p>
                               <p>Star: {feedback.rating} sao </p>
                               </div>
                           ))}
                                 <button type="button" onClick={handleCancelFeedbacks}>Cancel</button>
                            </div>
                            ): ( 
                                <div>Xem đánh giá của bạn ở đây!</div>
                            )} 

                            <Link to={`/update/course/${course.id}`} > Update</Link>

                            <hr />
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default MyCourseDetails

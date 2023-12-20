import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import ListReviews from '../review/ListReviews'
import Loader from '../../components/layout/Loader'
import MetaData from '../../components/layout/MetaData'
import { getCourseDetails, newFeedback, clearErrors, getSections } from '../../actions/courseActions'
const MyEnrollCourseDetails = () => {

    const { token } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();
    const { error, loading, course } = useSelector(state => state.courseDetails)
    const { sections } = useSelector(state => state.sections)
   console.log("df", course)
   console.log("ssss", sections)

   const [rating, setRating] = useState('');
   const [time, setTime] = useState('');
   const [feed_back, setFeed_back] = useState('');

    useEffect(() => {
        dispatch(getCourseDetails(id, token));
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, id, token])
    useEffect(() => {
        dispatch(getSections(id, token));
        console.log('ffff', id, token);
        }, [dispatch, id, token])
    const feedback = (e) => {
        const formData = new FormData();
        formData.set('rating', rating);
        formData.set('time', time);
        formData.set('feed_back', feed_back);
        formData.set('course_id', id);

        const jsonObject = {};
        for (const pair of formData.entries()) {
            jsonObject[pair[0]] = pair[1]
        }
        const jsonData = JSON.stringify(jsonObject);

        dispatch(newFeedback(jsonData, token));
        alert.success('Sent your feedback')
    }

    
    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={course.learningObject} />
                    <div className="courses-details">

                        <div className="course-details-name">
                            <h3>{course.learningObject}</h3>
                            <p id="course_id">Course # {course.id}</p>

                            <hr />

                            <div className="course-rating">
                                <div className="star" style={{ width: `${(course.rating / 5) * 100}%` }}></div>
                             {/* {[...Array(course.rating)].map((_, index) => (
                             <i key={index} className="fas fa-star"></i>
                            ))} */}
                            </div>

                            <hr />

                            <p id="course_price">${course.price}</p>
                            <hr />

                            <p id="requiredSkills">${course.requiredSkills}</p>
                            <p id="courseFor">${course.courseFor}</p>
                            <p id="title">${course.title}</p>
                            <p id="subtitle">${course.subtitle}</p>
                            <p id="language">${course.language}</p>
                            <p id="level">${course.level}</p>
                            <p id="category">${course.category}</p>
                            <p id="primarilyTaught">${course.primarilyTaught}</p>
                            <p id="welcomeMessage">${course.welcomeMessage}</p>
                            <p id="congratulationMessage">${course.congratulationMessage}</p>
                            <hr />
                            <p id="status">${course.status}</p>
                            <h4 className="mt-2">Description:</h4>
                            <p>{course.courseDescription}</p>
                            <hr />
                            <p id="createdAt">${course.createdAt}</p>
                            <p id="updatedAt">${course.updatedAt}</p>
                            <hr />
                           {/* khi click vào section thì thả xuống các lecture */}
                           {sections ? (
                            <h5>
                            {sections.map(section => (
                            <p id="section">{section.name}</p>
                            ))}
                            </h5>):(
                            <div>các bài giảng ở đây</div>
                           )}

                           
                            <button type="button"  >discussion</button>





                          <div className="form-group">
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
        

                            <hr />



                          

                        </div>
                    </div>

                    {course.reviews && course.reviews.length > 0 && (
                        <ListReviews reviews={course.reviews} />
                    )}

                </Fragment>
            )}
        </Fragment>
    )
}

export default MyEnrollCourseDetails

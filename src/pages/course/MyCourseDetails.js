import React, { Fragment, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import ListReviews from '../review/ListReviews'
import Loader from '../../components/layout/Loader'
import MetaData from '../../components/layout/MetaData'
import { getCourseDetails, clearErrors } from '../../actions/courseActions'
const MyCourseDetails = () => {

    const { token } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();

    const { error, loading, course } = useSelector(state => state.courseDetails)
    useEffect(() => {

        dispatch(getCourseDetails(id, token))
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, id, token])
    
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
                            </div>

                            <hr />

                            <p id="course_price">${course.price}</p>
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
                            <p id="createdAt">${course.createdAt}</p>
                            <p id="updatedAt">${course.updatedAt}</p>
                            <p id="status">${course.status}</p>

                            <button type="button"  >discussion</button>
                            <Link to={`/update/course/${course.id}`} > Update</Link>

                            <hr />


                            <hr />

                            <h4 className="mt-2">Description:</h4>
                            <p>{course.courseDescription}</p>
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

export default MyCourseDetails

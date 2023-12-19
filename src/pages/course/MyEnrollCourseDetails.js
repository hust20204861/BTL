import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import ListReviews from '../review/ListReviews'
import Loader from '../../components/layout/Loader'
import MetaData from '../../components/layout/MetaData'
import { getCourseDetails, newReview, clearErrors } from '../../actions/courseActions'
const MyEnrollCourseDetails = () => {

    const { token } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();

    const { error, loading, myenrollcourses } = useSelector(state => state.myenrollcourses)
    useEffect(() => {

        dispatch(getCourseDetails(id, token))
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, id, token])
    const feedback = () => {
        dispatch(newReview(id));
        alert.success('Item Added to Cart')
    }
    
    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={myenrollcourses.learningObject} />
                    <div className="courses-details">

                        <div className="course-details-name">
                            <h3>{myenrollcourses.learningObject}</h3>
                            <p id="course_id">Course # {myenrollcourses.id}</p>

                            <hr />

                            <div className="course-rating">
                                <div className="star" style={{ width: `${(myenrollcourses.rating / 5) * 100}%` }}></div>
                            </div>

                            <hr />

                            <p id="course_price">${myenrollcourses.price}</p>
                            <p id="requiredSkills">${myenrollcourses.requiredSkills}</p>
                            <p id="courseFor">${myenrollcourses.courseFor}</p>
                            <p id="title">${myenrollcourses.title}</p>
                            <p id="subtitle">${myenrollcourses.subtitle}</p>
                            <p id="language">${myenrollcourses.language}</p>
                            <p id="level">${myenrollcourses.level}</p>
                            <p id="category">${myenrollcourses.category}</p>
                            <p id="primarilyTaught">${myenrollcourses.primarilyTaught}</p>
                            <p id="welcomeMessage">${myenrollcourses.welcomeMessage}</p>
                            <p id="congratulationMessage">${myenrollcourses.congratulationMessage}</p>
                            <p id="createdAt">${myenrollcourses.createdAt}</p>
                            <p id="updatedAt">${myenrollcourses.updatedAt}</p>
                            <p id="status">${myenrollcourses.status}</p>

                            <button type="button" onClick={feedback} >feedback</button>
                            <button type="button"  >discussion</button>

                            <hr />


                            <hr />

                            <h4 className="mt-2">Description:</h4>
                            <p>{myenrollcourses.courseDescription}</p>
                            <hr />

                        </div>
                    </div>

                    {myenrollcourses.reviews && myenrollcourses.reviews.length > 0 && (
                        <ListReviews reviews={myenrollcourses.reviews} />
                    )}

                </Fragment>
            )}
        </Fragment>
    )
}

export default MyEnrollCourseDetails

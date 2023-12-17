import React, { Fragment, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import ListReviews from '../review/ListReviews'
import Loader from '../../components/layout/Loader'
import MetaData from '../../components/layout/MetaData'
import { getCourseDetails, newReview, clearErrors } from '../../actions/courseActions'
import { addItemToCart } from '../../actions/cartActions'

const CourseDetails = () => {

    const [quantity, setQuantity] = useState(1)
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
    const addToCart = () => {
        dispatch(addItemToCart(id, quantity));
        alert.success('Item Added to Cart')
    }
    
    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={course.learningObject} />
                    <div className="courses-details">
                        {/* <div className="" id="course_image">
                            <Carousel>
                                        <img className="course-details-img" src={course.courseImageUrl.url} alt={course.title} />
                            </Carousel>
                        </div> */}

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

                            <button type="button"  disabled={course.sale === 0} onClick={addToCart}>Add to Cart</button>
                            <button type="button"  disabled={course.sale === 0} onClick={addToCart}>Enroll</button>

                            <hr />


                            <hr />

                            <h4 className="mt-2">Description:</h4>
                            <p>{course.courseDescription}</p>
                            <hr />
                            {/* <p id="course_seller">Teacher: <strong>{course.seller}</strong></p> */}

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

export default CourseDetails

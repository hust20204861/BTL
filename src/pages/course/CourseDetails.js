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
import { NEW_REVIEW_RESET } from '../../constants/courseConstants'

const CourseDetails = () => {

    const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();

    const { error, loading, course } = useSelector(state => state.courseDetails)
    const { userinfo } = useSelector(state => state.info)
    useEffect(() => {
console.log("sfsdgdsfgfsgfs")

        dispatch(getCourseDetails(id))
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, id])
    const addToCart = () => {
        dispatch(addItemToCart(id, quantity));
        alert.success('Item Added to Cart')
    }


    function setUserRatings() {
        const stars = document.querySelectorAll('.star');

        stars.forEach((star, index) => {
            star.starValue = index + 1;

            ['click', 'mouseover', 'mouseout'].forEach(function (e) {
                star.addEventListener(e, showRatings);
            })
        })

        function showRatings(e) {
            stars.forEach((star, index) => {
                if (e.type === 'click') {
                    if (index < this.starValue) {
                        star.classList.add('orange');

                        setRating(this.starValue)
                    } else {
                        star.classList.remove('orange')
                    }
                }

                if (e.type === 'mouseover') {
                    if (index < this.starValue) {
                        star.classList.add('yellow');
                    } else {
                        star.classList.remove('yellow')
                    }
                }

                if (e.type === 'mouseout') {
                    star.classList.remove('yellow')
                }
            })
        }
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={course.learningObject} />
                    <div className="courses-details">
                        <div className="" id="course_image">
                            {/* <Carousel>
                                {course.images && course.images.map(image => (
                                    <Carousel.Item key={image.public_id}>
                                        <img className="course-details-img" src={image.url} alt={course.title} />
                                    </Carousel.Item>
                                ))}
                            </Carousel> */}
                        </div>

                        <div className="course-details-name">
                            <h3>{course.learningObject}</h3>
                            <p id="course_id">Course # {course.id}</p>

                            <hr />

                            <div className="course-rating">
                                <div className="star" style={{ width: `${(course.rating / 5) * 100}%` }}></div>
                            </div>
                            {/* <span id="course-reviews">({course.numOfReviews} Reviews)</span> */}

                            <hr />

                            <p id="course_price">${course.price}</p>
                            {/* <div className="stockCounter">
                                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                            </div> */}
                            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={course.sale === 0} onClick={addToCart}>Add to Cart</button>

                            <hr />

                            <p>Status: <span id="stock_status" className={course.stock > 0 ? 'greenColor' : 'redColor'} >{course.sale > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

                            <hr />

                            <h4 className="mt-2">Description:</h4>
                            <p>{course.description}</p>
                            <hr />
                            <p id="course_seller">Sold by: <strong>{course.seller}</strong></p>

                            {userinfo ? <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal" onClick={setUserRatings}>
                                Submit Your Review
                            </button>
                                :
                                <div className="alert alert-danger " type='alert'>Login to post your review.</div>
                            }


                            <div className="row mt-2 mb-5">
                                <div className="rating w-50">

                                    <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">

                                                    {/* <ul className="stars" >
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                    </ul>

                                                    <textarea
                                                        name="review"
                                                        id="review" className="form-control mt-3"
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                    >

                                                    </textarea> */}

                                                    {/* <button className="btn my-3 float-right review-btn px-4 text-white" onClick={reviewHandler} data-dismiss="modal" aria-label="Close">Submit</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
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

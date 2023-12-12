import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {
    return (
        <div className='courses'>
            <div className="course">
                <img
                    className="course-img"
                    src={course.images[0].url}
                    alt='course'
                />
                <div className="course-name">
                    <h5 className="cart-title">
                        <Link to={`/product/${course._id}`}>{course.name}</Link>
                    </h5>
                    <div className="ratings">
                        <div className="rating">
                            <div className="star" style={{ width: `${(course.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span id="reviews">({course.numOfReviews} Reviews)</span>
                    </div>
                    <p className="cart-text">${course.price}</p>
                    <Link to={`/product/${course._id}`} id="view" className="view-details">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Course

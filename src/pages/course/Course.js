import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {
  
    return (
        <div className='courses'>
            <div className="course">
                {/* <img
                    className="course-img"
                    src={course.images[0].url}
                    alt='course'
                /> */}
                <div className="course-title">
                    <h5 className="cart-name">
                        <Link to={`/course/${course.id}`}>{course.learningObject}</Link>
                    </h5>
                    <div className="course-ratings">
                        {/* <div className="course-rating">
                            <div className="star" style={{ width: `${(course.rating / 5) * 100}%` }}></div>
                        </div> */}
                        {/* <span id="course-reviews">({course.numOfReviews} Reviews)</span> */}
                    </div>
                    <p className="course-price">${course.price}</p>
                    <Link to={`/course/${course.id}`} className="course-details">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Course

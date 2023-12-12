import React from 'react'
import { Link } from 'react-router-dom'

const myCourse = ({ course }) => {
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
                </div>
            </div>
        </div>
    )
}

export default myCourse

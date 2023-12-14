import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

const myCourse = () => {  
    const { courses } = useSelector(state => state.courses) 

    return (
        <div className='courses'>
            {courses.map(course => (
                <div className="course" key={course.id}>
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
            ))}
        </div>
    )
}

export default myCourse

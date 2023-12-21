import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MyEnrollCourse = () => {  
const { myenrollcourses } = useSelector(state => state.myenrollcourses)
const { userId } = useSelector(state => state.auth)
    return (      
        <div className='mycourses'>
            <h1>Đây là các khóa học của bạn</h1>
            
            {myenrollcourses.map(course => (
                <div className="course" key={course.id}>
                    <div className="course-name">
                        <h5 className="cart-title">
                            <Link to={`/course/enrolled/${userId}/${course.id}`}>{course.learningObject}</Link>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyEnrollCourse

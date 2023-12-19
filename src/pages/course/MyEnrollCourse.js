import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MyEnrollCourse = () => {  
const { myenrollcourses } = useSelector(state => state.myenrollcourses)
    return (      
        <div className='mycourses'>
            {myenrollcourses.map(course => (
                <div className="course" key={course.id}>
                    <div className="course-name">
                        <h5 className="cart-title">
                            <Link to={`/myenrollcourse/${course.id}`}>{course.learningObject}</Link>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyEnrollCourse

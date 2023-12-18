import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MyCourse = () => {  
const { mycourses } = useSelector(state => state.mycourses)
    return (      
        <div className='mycourses'>
<Link to='/create/course'> CREATE YOUR COURSE </Link>
            {mycourses.map(course => (
                <div className="course" key={course.id}>
                    <div className="course-name">
                        <h5 className="cart-title">
                            <Link to={`/mycourse/${course.id}`}>{course.learningObject}</Link>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyCourse

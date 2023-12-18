import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="admin-sidebar">
            <nav id="sidebar">
                <ul className="list-components">
                    <li>
                        <Link to="/dashboard"><i className="admin-dashboard"></i> Dashboard</Link>
                    </li>

                    <li>
                        <a href="#courseSubmenu"  className="courses-menu"><i
                            className="admin-course"></i> Courses</a>
                        <ul  id="courseSubmenu">
                            <li>
                                <Link to="/courses"><i className="course-all"></i> All</Link>
                            </li>

                            <li>
                                <Link to="/create/course"><i className="course-create"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/users"><i className="admin-users"></i> Users</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="admin-reviews"></i> Reviews</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar

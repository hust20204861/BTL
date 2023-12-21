import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">

        <Link to="/dashboard"
           class="list-group-item list-group-item-action py-2 ripple"
           aria-current="true"
        >
          <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
        </Link>
        
        <a class="list-group-item list-group-item-action py-2 ripple active">
          <i class="fas fa-chart-area fa-fw me-3"></i><span>Courses</span>
          <ul id="courseSubmenu" class="collapse show list-group list-group-flush">

          <li >
            <Link to="/courses" class="text-reset">All</Link>
          </li>

          <li >
            <Link to="/create/course" class="text-reset">create</Link>
          </li>

        </ul>

        </a>
        <Link to="/users" class="list-group-item list-group-item-action py-2 ripple active">
          <i class="fas fa-chart-area fa-fw me-3"></i><span>Users</span>
          
        </Link>
        <Link to="/feedbacks" class="list-group-item list-group-item-action py-2 ripple active">
          <i class="fas fa-chart-area fa-fw me-3"></i><span>Feedbacks</span>
        </Link>
       
      </div>
    </div>
  </nav>
        // <div className="admin-sidebar">
        //     <nav id="sidebar">
        //         <ul className="list-components">
        //             <li>
        //                 <Link to="/dashboard"><i className="admin-dashboard"></i> Dashboard</Link>
        //             </li>

        //             <li>
        //                 <a href="#courseSubmenu"  className="courses-menu"><i
        //                     className="admin-course"></i> Courses</a>
                        // <ul  id="courseSubmenu">
                        //     <li>
                        //         <Link to="/courses"><i className="course-all"></i> All</Link>
                        //     </li>

                        //     <li>
                        //         <Link to="/create/course"><i className="course-create"></i> Create</Link>
                        //     </li>
                        // </ul>
        //             </li>

        //             <li>
        //                 <Link to="/users"><i className="admin-users"></i> Users</Link>
        //             </li>

        //             <li>
        //                 <Link to="/admin/reviews"><i className="admin-reviews"></i> Reviews</Link>
        //             </li>

        //         </ul>
        //     </nav>
        // </div>
    )
}

export default Sidebar

import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import MetaData from '../../components/layout/MetaData'
import Loader from '../../components/layout/Loader'
import Sidebar from '../../components/layout/Sidebar'
import { getAdminCourses } from '../../actions/courseActions'
import { allUsers } from '../../actions/userActions'

const Dashboard = () => {

    const dispatch = useDispatch();

    const { courses } = useSelector(state => state.courses)
    const { users, loading } = useSelector(state => state.allUsers)
    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getAdminCourses(token))
        dispatch(allUsers(token))
    }, [dispatch, token])

    return (
        <Fragment>
            <div className="dashboards">
                <div className="sidebar">
                    <Sidebar />
                </div>

                <div className="dash">
                    <h1 >Dashboard</h1>

                    {loading ? <Loader /> : (
                        <Fragment>
                            <MetaData title={'Admin Dashboard'} />


                            <div className="row pr-4">
                                <div className="cards">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="course-length">Courses<br /> <b>{courses && courses.length}</b></div>
                                        </div>
                                        <Link className="to--admin-course" to="/courses">
                                            <span className="view-details">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="user-length">Users<br /> <b>{users && users.length}</b></div>
                                        </div>
                                        <Link className="to-admin-users" to="/users">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}

                </div>
            </div>

        </Fragment >
    )
}

export default Dashboard

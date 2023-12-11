import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useDispatch, useSelector } from 'react-redux'

import { getAdminCourses } from '../../actions/courseActions'
import { allUsers } from '../../actions/userActions'

const Dashboard = () => {

    const dispatch = useDispatch();

    const { courses } = useSelector(state => state.courses)
    const { users, loading } = useSelector(state => state.allUsers)

    let outOfStock = 0;
    courses.forEach(course => {
        if (course.stock === 0) {
            outOfStock += 1;
        }
    })

    useEffect(() => {
        dispatch(getAdminCourses())
        dispatch(allUsers())
    }, [dispatch])

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

                            {/* <div className="dashboard">
                                <div className="cards">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="totalamount">Total Amount<br /> <b>${totalAmount && totalAmount.toFixed(2)}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="row pr-4">
                                <div className="cards">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="course-length">Courses<br /> <b>{courses && courses.length}</b></div>
                                        </div>
                                        <Link className="to--admin-course" to="/admin/products">
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
                                        <Link className="to-admin-users" to="/admin/users">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="cards">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="out-of-stock">Out of Stock<br /> <b>{outOfStock}</b></div>
                                        </div>
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

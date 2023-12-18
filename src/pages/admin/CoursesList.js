import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import MetaData from '../../components/layout/MetaData'
import Loader from '../../components/layout/Loader'
import Sidebar from '../../components/layout/Sidebar'
import { getAdminCourses, deleteCourse, clearErrors } from '../../actions/courseActions'
import { DELETE_COURSE_RESET } from '../../constants/courseConstants'

const CoursesList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector(state => state.auth)

    const { loading, error, courses } = useSelector(state => state.courses);
    const { error: deleteError, isDeleted } = useSelector(state => state.course)

    useEffect(() => {
        dispatch(getAdminCourses(token));

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Course deleted successfully');
            navigate('/courses');
            dispatch({ type: DELETE_COURSE_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, navigate, token])

    const setCourses = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Status',
                    field: 'Status',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        courses.forEach(course => {
            data.rows.push({
                id: course.id,
                name: course.learningObject,
                price: `$${course.price}`,
                status: course.status,
                actions: <Fragment>
                    <Link to={`/update/course/${course.id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteCourseHandler(course.id, token)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

    const deleteCourseHandler = (id, token) => {
        dispatch(deleteCourse(id, token))
    }

    return (
        <Fragment>
            <MetaData title={'All Courses'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Courses</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setCourses()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default CoursesList

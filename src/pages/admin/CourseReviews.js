import React, { Fragment, useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import MetaData from '../../components/layout/MetaData'
import { DELETE_FEEDBACK_RESET } from '../../constants/courseConstants'
import { getAdminCourseFeedbacks, deleteFeedback, clearErrors } from '../../actions/courseActions'

const CourseFeedbacks = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { error, adminfeedbacks } = useSelector(state => state.adminFeedbacks);
    const { isDeleted, error: deleteError } = useSelector(state => state.feedback)
    useEffect(() => {

        dispatch(getAdminCourseFeedbacks(token));

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Feedback deleted successfully');
            dispatch({ type: DELETE_FEEDBACK_RESET })
        }



    }, [dispatch, alert, error, token,  isDeleted, deleteError])

    const deleteFeedbackHandler = (id) => {
        dispatch(deleteFeedback(id, token))
    }

    const setFeedbacks = () => {
        const data = {
            columns: [
                {
                    label: 'Feedback ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Rating',
                    field: 'rating',
                    sort: 'asc'
                },
                {
                    label: 'Feedback',
                    field: 'feed_back',
                    sort: 'asc'
                },
                {
                    label: 'Time',
                    field: 'time',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        adminfeedbacks.data.forEach(feedback => {
            data.rows.push({
                id: feedback.id,
                rating: feedback.rating,
                feed_back: feedback.feed_back,
                time: feedback.time,

                actions:
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteFeedbackHandler(feedback.id, token)}>
                        <i className="fa fa-trash"></i>
                    </button>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Course Feedbacks'} />
            
                    <Fragment>
                        <h1>Feedbacks</h1>
                        {adminfeedbacks ? (
                            <MDBDataTable
                                data={setFeedbacks()}
                                bordered
                                striped
                            />
                        ) : (
                                <p className="mt-5 text-center">No Feedbacks.</p>
                            )}
                    </Fragment>
            

        </Fragment>
    )
}

export default CourseFeedbacks

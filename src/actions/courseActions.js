import axios from 'axios';
import { useSelector } from 'react-redux';

import {
    ALL_COURSES_REQUEST,
    ALL_COURSES_SUCCESS,
    ALL_COURSES_FAIL,
    ADMIN_COURSES_REQUEST,
    ADMIN_COURSES_SUCCESS,
    ADMIN_COURSES_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    NEW_COURSE_FAIL,
    DELETE_COURSE_REQUEST,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAIL,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAIL,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    MY_ENROLL_COURSES_FAIL,
    MY_ENROLL_COURSES_REQUEST,
    MY_ENROLL_COURSES_SUCCESS,
    CLEAR_ERRORS,
    MY_COURSES_REQUEST,
    MY_COURSES_SUCCESS,
    MY_COURSES_FAIL

} from '../constants/courseConstants'

export const getCourses = (keyword = '', currentPage = 1 ) => async (dispatch) => {
    try {

        dispatch({ type: ALL_COURSES_REQUEST })
        // const { token } = useSelector(state => state.auth)
        // const config = {
        //     headers: {
           
        //         'Authorization': `Bearer ${token}` 
        //         }
        //     }

        const link = `/api/v1/course?keyword=${keyword}&page=${currentPage}`
        // if(category) {
        //     link = `/api/v1/course?keyword=${keyword}&page=${currentPage}`
        // }

        // const { data } = await axios.get(link, config)
        const { data } = await axios.get('/api/v1/course')
      
        dispatch({
            type: ALL_COURSES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_COURSES_FAIL,
            payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}

export const newCourse = (courseData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_COURSE_REQUEST })

        const { token } = useSelector(state => state.auth)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            }
        }

        const { data } = await axios.post(`/api/v1/course`, courseData, config)

        dispatch({
            type: NEW_COURSE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete course 
export const deleteCourse = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_COURSE_REQUEST })

        const { token } = useSelector(state => state.auth)
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.delete(`/api/v1/course/${id}`, config)

        dispatch({
            type: DELETE_COURSE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update course 
export const updateCourse = ( id, courseData) => async (dispatch) => {
    try {
     
        dispatch({ type: UPDATE_COURSE_REQUEST })

        const { token } = useSelector(state => state.auth)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`/api/v1/course/${id}`, courseData, config)

        dispatch({
            type: UPDATE_COURSE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_COURSE_FAIL,
            payload: error.response.data.message
        }) 
    }
}

export const getCourseDetails = (id) => async (dispatch) => {
    try {
     
        dispatch({ type: COURSE_DETAILS_REQUEST })
        const { token } = useSelector(state => state.auth)

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
                }
            }
        const { data } = await axios.get(`/api/v1/course/${id}`, config)
        dispatch({
            type: COURSE_DETAILS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }

}

export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const { token } = useSelector(state => state.auth)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`/api/v1/review`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getAdminCourses = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_COURSES_REQUEST })

        const { token } = useSelector(state => state.auth)
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.get(`/api/v1/course`, config)

        dispatch({
            type: ADMIN_COURSES_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: ADMIN_COURSES_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get course feedbacks
export const getCourseReviews = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/feedback?id=${id}`)

        dispatch({
            type: GET_REVIEWS_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: GET_REVIEWS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete course review
export const deleteReview = (id, courseId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_REVIEW_REQUEST })
        const { token } = useSelector(state => state.auth)
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.delete(`/api/v1/feedbacks?id=${id}&courseId=${courseId}`, config)

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data
        })

    } catch (error) {

        console.log(error.response);

        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

//My Courses
export const myCourses = (userId) => async (dispatch) => {
    try {
  
        dispatch({ type: MY_COURSES_REQUEST })
        const { token } = useSelector(state => state.auth)  
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.get(`/api/v1/course/create/list/${userId}`, config)
      
        dispatch({
            type: MY_COURSES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MY_COURSES_FAIL,
            payload: error.response.data.message
        })

    }
}
//my enroll course
export const myEnrollCourses = (id) => async (dispatch) => {
    try {
  
        dispatch({ type: MY_ENROLL_COURSES_REQUEST })
        const { token } = useSelector(state => state.auth)  
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.get(`/api/v1/enroll/user/${id}`, config)
      
        dispatch({
            type: MY_ENROLL_COURSES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MY_ENROLL_COURSES_FAIL,
            payload: error.response.data.message
        })

    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
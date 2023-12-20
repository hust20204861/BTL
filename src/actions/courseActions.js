import axios from 'axios';

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
    NEW_FEEDBACK_REQUEST,
    NEW_FEEDBACK_SUCCESS,
    NEW_FEEDBACK_FAIL,
    GET_FEEDBACKS_REQUEST,
    GET_FEEDBACKS_SUCCESS,
    GET_FEEDBACKS_FAIL,
    DELETE_FEEDBACK_REQUEST,
    DELETE_FEEDBACK_SUCCESS,
    DELETE_FEEDBACK_FAIL,
    MY_ENROLL_COURSES_FAIL,
    MY_ENROLL_COURSES_REQUEST,
    MY_ENROLL_COURSES_SUCCESS,
    CLEAR_ERRORS,
    MY_COURSES_REQUEST,
    MY_COURSES_SUCCESS,
    MY_COURSES_FAIL,
    ENROLL_COURSES_FAIL,
    ENROLL_COURSES_REQUEST,
    ENROLL_COURSES_SUCCESS

} from '../constants/courseConstants'

export const getCourses = (keyword = '') => async (dispatch) => {
    try {

        dispatch({ type: ALL_COURSES_REQUEST })
      

        const link = `/api/v1/course?keyword=${keyword}`
     
        const { data } = await axios.get(link)
      
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
//create course
export const newCourse = (jsonData, token) => async (dispatch) => {
    try {

        dispatch({ type: NEW_COURSE_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            }
        }

        const { data } = await axios.post(`/api/v1/course`, jsonData, config)

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
export const deleteCourse = (id, token) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_COURSE_REQUEST })

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
export const updateCourse = ( id, token, jsonData) => async (dispatch) => {
    try {
     
        dispatch({ type: UPDATE_COURSE_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`/api/v1/course/${id}`, jsonData, config)

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

export const getCourseDetails = (id, token) => async (dispatch) => {
    try {
     
        dispatch({ type: COURSE_DETAILS_REQUEST })
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
//create feedback
export const newReview = (feedbackData, token) => async (dispatch) => {
    try {

        dispatch({ type: NEW_FEEDBACK_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.post(`/api/v1/feedback`, feedbackData, config)

        dispatch({
            type: NEW_FEEDBACK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_FEEDBACK_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getAdminCourses = (token) => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_COURSES_REQUEST })

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
export const getCourseFeedbacks = (id, token) => async (dispatch) => {
    try {

        dispatch({ type: GET_FEEDBACKS_REQUEST })
        const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          };
        const { data } = await axios.get(`/api/v1/feedback/${id}`, config)

        dispatch({
            type: GET_FEEDBACKS_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: GET_FEEDBACKS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete course review
export const deleteReview = (id, token) => async (dispatch) => {
    try {
 
        dispatch({ type: DELETE_FEEDBACK_REQUEST })
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.delete(`/api/v1/feedbacks/${id}`, config)

        dispatch({
            type: DELETE_FEEDBACK_SUCCESS,
            payload: data
        })

    } catch (error) {

        console.log(error.response);

        dispatch({
            type: DELETE_FEEDBACK_FAIL,
            payload: error.response.data.message
        })
    }
}

//My Courses
export const myCourses = (userId, token) => async (dispatch) => {
    try {
  
        dispatch({ type: MY_COURSES_REQUEST })
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
// enroll course
export const enrollCourses = (id, userId, token) => async (dispatch) => {

    try {

        dispatch({ type: ENROLL_COURSES_REQUEST })

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };

        const { data } = await axios.post(`/api/v1/enroll/create/${id}/${userId}`, null, config)
      
        dispatch({
            type: ENROLL_COURSES_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ENROLL_COURSES_FAIL,
            payload: error.response.data.message
        })

    }
}
//my enroll course
export const myEnrollCourses = (userId, token) => async (dispatch) => {
    try {
   
        dispatch({ type: MY_ENROLL_COURSES_REQUEST })

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.get(`/api/v1/course/enrolled/${userId}`, config)
      
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
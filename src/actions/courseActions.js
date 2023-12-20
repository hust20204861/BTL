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
    ENROLL_COURSES_SUCCESS,
    GET_SECTIONS_REQUEST,
    NEW_SECTION_REQUEST,
    NEW_SECTION_FAIL,
    NEW_SECTION_SUCCESS,
    GET_SECTIONS_SUCCESS,
    GET_SECTIONS_FAIL,
    DELETE_SECTION_REQUEST,
    DELETE_SECTION_SUCCESS,
    DELETE_SECTION_FAIL,
    UPDATE_SECTION_REQUEST,
    UPDATE_SECTION_SUCCESS,
    UPDATE_SECTION_FAIL,
    NEW_LECTURE_REQUEST,
    NEW_LECTURE_SUCCESS,
    NEW_LECTURE_FAIL,
    GET_LECTURES_REQUEST,
    GET_LECTURES_SUCCESS,
    GET_LECTURES_FAIL,
    DELETE_LECTURE_REQUEST,
    DELETE_LECTURE_SUCCESS,
    DELETE_LECTURE_FAIL,
    UPDATE_LECTURE_REQUEST,
    UPDATE_LECTURE_SUCCESS,
    UPDATE_LECTURE_FAIL,
    NEW_DISCUSSION_REQUEST,
    NEW_DISCUSSION_SUCCESS,
    NEW_DISCUSSION_FAIL,
    GET_DISCUSSIONS_REQUEST,
    GET_DISCUSSIONS_SUCCESS,
    GET_DISCUSSIONS_FAIL,
    DELETE_DISCUSSION_REQUEST,
    DELETE_DISCUSSION_SUCCESS,
    DELETE_DISCUSSION_FAIL,
    UPDATE_DISCUSSION_REQUEST,
    UPDATE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_FAIL

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
export const newFeedback = (feedbackData, token) => async (dispatch) => {
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


export const getCourseFeedbacks = (course_id , token) => async (dispatch) => {
    try {
        dispatch({ type: GET_FEEDBACKS_REQUEST })
        const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }; 

        // const link = `/api/v1/feedback/filter?page_size=10&page_number=0`
        // if(course_id) {
        //     link = `/api/v1/feedback/filter?page_size=10&page_number=0&course_id=${course_id}`
        //     if(user_id) {
        //         link =  `/api/v1/feedback/filter?page_size=10&page_number=0&course_id=${course_id}&user_id=${user_id}`
        //     }
        //     if(user_id) {
        //         link = `/api/v1/feedback/filter?page_size=10&page_number=0&user_id=${user_id}`
        //     } 
        // }
        //const { data } = await axios.get(link, config) 
        const { data } = await axios.get(`/api/v1/feedback/filter?page_size=10&page_number=0&course_id=${course_id}`, config)
        dispatch({
            type: GET_FEEDBACKS_SUCCESS,
            payload: data,
        })
        console.log("dataaaa", data)
    } catch (error) {
        dispatch({
            type: GET_FEEDBACKS_FAIL,
            payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}

// Get course feedbacks
// export const getAdminCourseFeedbacks = (id, token) => async (dispatch) => {
//     try {

//         dispatch({ type: GET_FEEDBACKS_REQUEST })
//         const config = {
//             headers: {
//               'Authorization': `Bearer ${token}`
//             }
//           };
//         const { data } = await axios.get(`/api/v1/feedback/${id}`, config)

//         dispatch({
//             type: GET_FEEDBACKS_SUCCESS,
//             payload: data
//         })

//     } catch (error) {

//         dispatch({
//             type: GET_FEEDBACKS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// Delete course review
export const deleteFeedback = (id, token) => async (dispatch) => {
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


//new section
export const newSection = (id, title, token) => async (dispatch) => {
    try {

        dispatch({ type: NEW_SECTION_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            }
        }

        const { data } = await axios.post(`/api/v1/section/${id}`, title, config)

        dispatch({
            type: NEW_SECTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_SECTION_FAIL,
            payload: error.response.data.message
        })
    }
}
//get sections
export const getSections = (id, token) => async (dispatch) => {

    try {

        dispatch({ type: GET_SECTIONS_REQUEST })
      
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` 
                }
            }
        console.log("before", id, token)

        const { data } = await axios.get(`api/v1/section/course-id/${id}`, config)
        console.log("after", id, token)
      
        dispatch({
            type: GET_SECTIONS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_SECTIONS_FAIL,
            payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}

// Delete section 
export const deleteSection = (id, token) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_SECTION_REQUEST })

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.delete(`/api/v1/section/${id}`, config)

        dispatch({
            type: DELETE_SECTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_SECTION_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update section
export const updateSection = ( id, token, jsonData) => async (dispatch) => {
    try {
     
        dispatch({ type: UPDATE_SECTION_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`/api/v1/section/${id}`, jsonData, config)

        dispatch({
            type: UPDATE_SECTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_SECTION_FAIL,
            payload: error.response.data.message
        }) 
    }
}


//new lecture
export const newLecture = (json , token) => async (dispatch) => {
    try {

        dispatch({ type: NEW_LECTURE_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            }
        }

        const { data } = await axios.post(`/api/v1/lecture`, json, config)

        dispatch({
            type: NEW_LECTURE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_LECTURE_FAIL,
            payload: error.response.data.message
        })
    }
}
//get lectures
export const getLectures = (id, token) => async (dispatch) => {

    try {

        dispatch({ type: GET_LECTURES_REQUEST })
      
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` 
                }
            }

        const { data } = await axios.get(`api/v1/lecture`, config)
      
        dispatch({
            type: GET_LECTURES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_LECTURES_FAIL,
            payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}

// Delete lecture 
export const deleteLecture = (id, token) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_LECTURE_REQUEST })

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.delete(`/api/v1/lecture/${id}`, config)

        dispatch({
            type: DELETE_LECTURE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_LECTURE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update section
export const updateLecture = (token, jsonData) => async (dispatch) => {
    try {
     
        dispatch({ type: UPDATE_LECTURE_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`/api/v1/lecture`, jsonData, config)

        dispatch({
            type: UPDATE_LECTURE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_LECTURE_FAIL,
            payload: error.response.data.message
        }) 
    }
}


//new discussion
export const newDiscussion = (json , lectureId, userId, token) => async (dispatch) => {
    try {

        dispatch({ type: NEW_DISCUSSION_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            }
        }

        const { data } = await axios.post(`/api/v1/discussion/${lectureId}/${userId}`, json, config)

        dispatch({
            type: NEW_DISCUSSION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_DISCUSSION_FAIL,
            payload: error.response.data.message
        })
    }
}
//get discussions
export const getDiscussions = (lectureId, userId, token) => async (dispatch) => {

    try {

        dispatch({ type: GET_DISCUSSIONS_REQUEST })
      
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` 
                }
            }

        const { data } = await axios.get(`api/v1/discussion/${lectureId}/${userId}`, config)
      
        dispatch({
            type: GET_DISCUSSIONS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_DISCUSSIONS_FAIL,
            payload:  error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}

// Delete lecture 
export const deleteDiscussion = (discussionId, token) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_DISCUSSION_REQUEST })

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const { data } = await axios.delete(`/api/v1/discussion/${discussionId}`, config)

        dispatch({
            type: DELETE_DISCUSSION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_DISCUSSION_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update section
export const updateDiscussion = (discussionId, token, jsonData) => async (dispatch) => {
    try {
     
        dispatch({ type: UPDATE_DISCUSSION_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`/api/v1/discussion/${discussionId}`, jsonData, config)

        dispatch({
            type: UPDATE_DISCUSSION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_DISCUSSION_FAIL,
            payload: error.response.data.message
        }) 
    }
}
//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
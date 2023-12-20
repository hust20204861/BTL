import {
    ALL_COURSES_REQUEST,
    ALL_COURSES_SUCCESS,
    ALL_COURSES_FAIL,
    ADMIN_COURSES_REQUEST,
    ADMIN_COURSES_SUCCESS,
    ADMIN_COURSES_FAIL,
    NEW_COURSE_REQUEST,
    NEW_COURSE_SUCCESS,
    NEW_COURSE_RESET,
    NEW_COURSE_FAIL,
    DELETE_COURSE_REQUEST,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_RESET,
    DELETE_COURSE_FAIL,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_RESET,
    UPDATE_COURSE_FAIL,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    NEW_FEEDBACK_REQUEST,
    NEW_FEEDBACK_SUCCESS,
    NEW_FEEDBACK_RESET,
    NEW_FEEDBACK_FAIL,
    GET_FEEDBACKS_REQUEST,
    GET_FEEDBACKS_SUCCESS,
    GET_FEEDBACKS_FAIL,
    DELETE_FEEDBACK_REQUEST,
    DELETE_FEEDBACK_SUCCESS,
    DELETE_FEEDBACK_RESET,
    DELETE_FEEDBACK_FAIL,
    MY_COURSES_FAIL,
    MY_COURSES_REQUEST,
    MY_COURSES_SUCCESS,
    MY_ENROLL_COURSES_FAIL,
    MY_ENROLL_COURSES_REQUEST,
    MY_ENROLL_COURSES_SUCCESS,
    ENROLL_COURSES_FAIL,
    ENROLL_COURSES_REQUEST,
    ENROLL_COURSES_SUCCESS,
    CLEAR_ERRORS

} from '../constants/courseConstants'

export const coursesReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case ALL_COURSES_REQUEST:
        case ADMIN_COURSES_REQUEST:
            return {
                loading: true,
                courses: []
            }

        case ALL_COURSES_SUCCESS:  
            return {
                loading: false,
                courses: action.payload
            }

        case ADMIN_COURSES_SUCCESS:
            return {
                loading: false,
                courses: action.payload
            }

        case ALL_COURSES_FAIL:
        case ADMIN_COURSES_FAIL:  
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newCourseReducer = (state = { course: {} }, action) => {
    switch (action.type) {

        case NEW_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_COURSE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                course: action.payload.course
            }

        case NEW_COURSE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_COURSE_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const courseReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_COURSE_REQUEST:
        case UPDATE_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_COURSE_FAIL:
        case UPDATE_COURSE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_COURSE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_COURSE_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const courseDetailsReducer = (state = { course: [] }, action) => {
    switch (action.type) {

        case COURSE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                course: []
            }

        case COURSE_DETAILS_SUCCESS:
            return {
                loading: false,
                course: action.payload

            }

        case COURSE_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_FEEDBACK_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_FEEDBACK_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_FEEDBACK_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_FEEDBACK_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const courseReviewsReducer = (state = { review: [] }, action) => {
    switch (action.type) {

        case GET_FEEDBACKS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_FEEDBACKS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload
            }

        case GET_FEEDBACKS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const reviewReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_FEEDBACK_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_FEEDBACK_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_FEEDBACK_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }

 
}

export const myCoursesReducer = (state = { mycourses: [] }, action) => {
    switch (action.type) {
        case MY_COURSES_REQUEST:
            return {
                loading: true,
                mycourses: []
            }

        case MY_COURSES_SUCCESS:  
            return {
                loading: false,
                mycourses: action.payload
            }

        case MY_COURSES_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const enrollCoursesReducer = (state = {}, action) => {
    switch (action.type) {
        case ENROLL_COURSES_REQUEST:
            return {
                loading: true,
                enrolled: false
            }

        case ENROLL_COURSES_SUCCESS:  
            return {
                loading: false,
                enrolled: true
            }

        case ENROLL_COURSES_FAIL:
            return {
                loading: false,
                enrolled: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const myEnrollCoursesReducer = (state = { myenrollcourses: [] }, action) => {
    switch (action.type) {
        case MY_ENROLL_COURSES_REQUEST:
            return {
                loading: true,
                myenrollcourses: []
            }

        case MY_ENROLL_COURSES_SUCCESS:  
            return {
                loading: false,
                myenrollcourses: action.payload
            }

        case MY_ENROLL_COURSES_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


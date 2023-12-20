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
    NEW_SECTION_FAIL,
    NEW_SECTION_REQUEST,
    NEW_SECTION_RESET,
    NEW_SECTION_SUCCESS,
    GET_SECTIONS_FAIL,
    GET_SECTIONS_REQUEST,
    GET_SECTIONS_SUCCESS,
    UPDATE_SECTION_FAIL,
    UPDATE_SECTION_REQUEST,
    UPDATE_SECTION_RESET,
    UPDATE_SECTION_SUCCESS,
    DELETE_SECTION_FAIL,
    DELETE_SECTION_REQUEST,
    DELETE_SECTION_RESET,
    DELETE_SECTION_SUCCESS,
    CLEAR_ERRORS,
    NEW_LECTURE_REQUEST,
    NEW_LECTURE_SUCCESS,
    NEW_LECTURE_FAIL,
    NEW_LECTURE_RESET,
    GET_LECTURES_REQUEST,
    GET_LECTURES_SUCCESS,
    GET_LECTURES_FAIL,
    DELETE_LECTURE_REQUEST,
    UPDATE_LECTURE_REQUEST,
    DELETE_LECTURE_SUCCESS,
    UPDATE_LECTURE_SUCCESS,
    DELETE_LECTURE_FAIL,
    UPDATE_LECTURE_FAIL,
    DELETE_LECTURE_RESET,
    UPDATE_LECTURE_RESET,
    NEW_DISCUSSION_REQUEST,
    NEW_DISCUSSION_SUCCESS,
    NEW_DISCUSSION_FAIL,
    NEW_DISCUSSION_RESET,
    GET_DISCUSSIONS_REQUEST,
    GET_DISCUSSIONS_SUCCESS,
    GET_DISCUSSIONS_FAIL,
    DELETE_DISCUSSION_REQUEST,
    UPDATE_DISCUSSION_REQUEST,
    DELETE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_SUCCESS,
    DELETE_DISCUSSION_FAIL,
    UPDATE_DISCUSSION_FAIL,
    DELETE_DISCUSSION_RESET,
    UPDATE_DISCUSSION_RESET

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
                success: true,
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

export const newFeedbackReducer = (state = {}, action) => {
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

export const courseFeedbacksReducer = (state = { feedback: [] }, action) => {
    switch (action.type) {

        case GET_FEEDBACKS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_FEEDBACKS_SUCCESS:
            return {
                loading: false,
                feedbacks: action.payload
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

export const feedbackReducer = (state = {}, action) => {
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

//new section
export const newSectionReducer = (state = { section: {} }, action) => {
    switch (action.type) {

        case NEW_SECTION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_SECTION_SUCCESS:
            return {
                loading: false,
                // success: action.payload.success,
                section: action.payload
            }

        case NEW_SECTION_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_SECTION_RESET:
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
//get sections
export const sectionsReducer = (state = { sections: [] }, action) => {
    switch (action.type) {
        case GET_SECTIONS_REQUEST:
            return {
                loading: true,
                sections: []
            }

        case GET_SECTIONS_SUCCESS:  
            return {
                loading: false,
                sections: action.payload
            }

        case GET_SECTIONS_FAIL:  
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

export const sectionReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_SECTION_REQUEST:
        case UPDATE_SECTION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_SECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_SECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_SECTION_FAIL:
        case UPDATE_SECTION_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_SECTION_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_SECTION_RESET:
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



//new lecture
export const newLectureReducer = (state = { lecture: {} }, action) => {
    switch (action.type) {

        case NEW_LECTURE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_LECTURE_SUCCESS:
            return {
                loading: false,
                // success: action.payload.success,
                lecture: action.payload
            }

        case NEW_LECTURE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_LECTURE_RESET:
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
//get lectures
export const lecturesReducer = (state = { lectures: [] }, action) => {
    switch (action.type) {
        case GET_LECTURES_REQUEST:
            return {
                loading: true,
                lectures: []
            }

        case GET_LECTURES_SUCCESS:  
            return {
                loading: false,
                lectures: action.payload
            }

        case GET_LECTURES_FAIL:  
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

export const lectureReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_LECTURE_REQUEST:
        case UPDATE_LECTURE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_LECTURE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_LECTURE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_LECTURE_FAIL:
        case UPDATE_LECTURE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_LECTURE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_LECTURE_RESET:
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



//new lecture
export const newDiscussionReducer = (state = { discussion: {} }, action) => {
    switch (action.type) {

        case NEW_DISCUSSION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_DISCUSSION_SUCCESS:
            return {
                loading: false,
                // success: action.payload.success,
                discussion: action.payload
            }

        case NEW_DISCUSSION_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_DISCUSSION_RESET:
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
//get lectures
export const discussionsReducer = (state = { discussions: [] }, action) => {
    switch (action.type) {
        case GET_DISCUSSIONS_REQUEST:
            return {
                loading: true,
                lectures: []
            }

        case GET_DISCUSSIONS_SUCCESS:  
            return {
                loading: false,
                discussions: action.payload
            }

        case GET_DISCUSSIONS_FAIL:  
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

export const discussionReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_DISCUSSION_REQUEST:
        case UPDATE_DISCUSSION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_DISCUSSION_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_DISCUSSION_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_DISCUSSION_FAIL:
        case UPDATE_DISCUSSION_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_DISCUSSION_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_DISCUSSION_RESET:
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
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { 
    coursesReducer, newCourseReducer, courseReducer, courseDetailsReducer,
    enrollCoursesReducer, myEnrollCoursesReducer, myCoursesReducer,
    newFeedbackReducer,courseFeedbacksReducer, feedbackReducer,
    newSectionReducer, sectionsReducer, sectionReducer,
    lectureReducer, lecturesReducer, newLectureReducer,
    newDiscussionReducer, discussionReducer, discussionsReducer
     } from './reducers/courseReducers'
import { authReducer, userReducer,infoReducer, forgotPasswordReducer, allUsersReducer,registerReducer, userDetailsReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    courses: coursesReducer,
    courseDetails: courseDetailsReducer,
    newCourse: newCourseReducer,
    course: courseReducer,
    courseFeedbacks: courseFeedbacksReducer,
    feedback: feedbackReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newFeedback: newFeedbackReducer,
    info:infoReducer,
    register: registerReducer,
    mycourses: myCoursesReducer,
    myenrollcourses: myEnrollCoursesReducer,
    enrollcourse: enrollCoursesReducer,
    newSection: newSectionReducer,
    sections: sectionsReducer,
    section: sectionReducer,
    newLecture: newLectureReducer,
    lectures: lecturesReducer,
    lecture: lectureReducer,
    newDiscussion: newDiscussionReducer,
    discussions: discussionsReducer,
    discussion: discussionReducer
})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    },
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;

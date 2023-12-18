import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { coursesReducer, newCourseReducer, courseReducer, courseDetailsReducer,myCoursesReducer, newReviewReducer, courseReviewsReducer, reviewReducer } from './reducers/courseReducers'
import { authReducer, userReducer,infoReducer, forgotPasswordReducer, allUsersReducer,registerReducer, userDetailsReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    courses: coursesReducer,
    courseDetails: courseDetailsReducer,
    newCourse: newCourseReducer,
    course: courseReducer,
    courseReviews: courseReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newReview: newReviewReducer,
    info:infoReducer,
    register: registerReducer,
    mycourses: myCoursesReducer
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
console.log("initial state = ");
console.log(initialState);
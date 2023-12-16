import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { coursesReducer, newCourseReducer, courseReducer, courseDetailsReducer, newReviewReducer, courseReviewsReducer, reviewReducer } from './reducers/courseReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'
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
    newReview: newReviewReducer
})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    },
    auth: {
        token: localStorage.getItem('user')
          ? JSON.parse(localStorage.getItem('user')).access_token || ''
          : '',
        userId: localStorage.getItem('user')
          ? JSON.parse(localStorage.getItem('user')).user_id || ''
          : '',
      }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;
console.log("initial state = ");
console.log(initialState);
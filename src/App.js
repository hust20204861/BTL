import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import CourseDetails from './pages/course/CourseDetails'
import MyCourse from './pages/course/MyCourse'
import MyEnrollCourseDetails from './pages/course/MyEnrollCourseDetails'
import MyCourseDetails from './pages/course/MyCourseDetails'
// import { myEnrollCourses } from './actions/courseActions'

// Cart Imports
import Cart from './pages/cart/Cart'
import Payment from './pages/cart/Payment'

// Auth or User imports
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Profile from './pages/user/Profile'
import UpdateProfile from './pages/user/UpdateProfile'
import UpdatePassword from './pages/user/UpdatePassword'
import ForgotPassword from './pages/user/ForgotPassword'
import NewPassword from './pages/user/NewPassword'

// Admin Imports
import Dashboard from './pages/admin/Dashboard'
import CoursesList from './pages/admin/CoursesList'
import NewCourse from './pages/course/NewCourse'
import UpdateCourse from './pages/course/UpdateCourse'
import UsersList from './pages/admin/UsersList'
import UpdateUser from './pages/admin/UpdateUser'


import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import axios from 'axios'


// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function App() {

  // const [stripeApiKey, setStripeApiKey] = useState('');

  // useEffect(() => {
  //   store.dispatch(loadUser())

  //   async function getStripApiKey() {
  //     const { data } = await axios.get('/api/v1/stripeapi');

  //     setStripeApiKey(data.stripeApiKey)
  //   }

  //   getStripApiKey();

  // }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/search/:keyword" element={<Home/>} />
          <Route path="/course/:id" element={<CourseDetails/>} exact />
          <Route path="/cart" element={<Cart/>} exact />
          {/* {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Routes>
           <Route path="/payment" element={<Payment/>} />
           </Routes>
            </Elements>
          }  */}
 
          <Route path="/auth/login" element={<Login/>} />
          <Route path="auth/register" element={<Register/>} />
          <Route path="/password/forgot" element={<ForgotPassword/>} exact />
          <Route path="/user/reset_pass" element={<NewPassword/>} exact />
          <Route path="/user/:user_id" element={<Profile/>} exact />
          <Route path="/user/update/:id" element={<UpdateProfile/>} exact />
          <Route path="/user/update_pass" element={<UpdatePassword/>} exact />
 
          </Routes>
        </div>
        <Routes>
        <Route path="/dashboard" isAdmin={true} element={<Dashboard/>} exact />
        <Route path="/courses" isAdmin={true} element={<CoursesList/>} exact />
        <Route path="/create/course" isAdmin={true} element={<NewCourse/>} exact />
        <Route path="/update/course/:id" isAdmin={true} element={<UpdateCourse/>} exact />
        <Route path="/users" isAdmin={true} element={<UsersList/>} exact />
        <Route path="/admin/update/:id" isAdmin={true} element={<UpdateUser/>} exact />
        <Route path="/course/create/list/:userId" element={<MyCourse/>} exact />
        <Route path="/mycourse/:id" element={<MyCourseDetails/>} exact />
        {/* <Route path="/course/enrolled/:userId" element={<myEnrollCourses/>} exact /> */}
        </Routes>

          <Footer />
      </div>
    </Router>
  );
}

export default App;

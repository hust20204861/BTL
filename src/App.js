import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'
import CourseDetails from './components/course/CourseDetails'

// Cart Imports
import Cart from './components/cart/Cart'
import Payment from './components/cart/Payment'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

// Admin Imports
import Dashboard from './components/admin/Dashboard'
import CoursesList from './components/admin/CoursesList'
import NewCourse from './components/admin/NewCourse'
import UpdateCourse from './components/admin/UpdateCourse'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'
import CourseReviews from './components/admin/CourseReviews'


import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import axios from 'axios'


// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function App() {

  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();

  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
          <Route path="/" element={<Home/>} exact />
          {/* <Route path="/search/:keyword" element={<Home/>} /> */}
          <Route path="/product/:id" element={<CourseDetails/>} exact />

          <Route path="/cart" element={<Cart/>} exact />
          {/* {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Routes>
           <Route path="/payment" element={<Payment/>} />
           </Routes>
            </Elements>
          }  */}
 
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/password/forgot" element={<ForgotPassword/>} exact />
          <Route path="/password/reset/:token" element={<NewPassword/>} exact />
          <Route path="/me" element={<Profile/>} exact />
          <Route path="/me/update" element={<UpdateProfile/>} exact />
          <Route path="/password/update" element={<UpdatePassword/>} exact />

          </Routes>
        </div>
        <Routes>
        <Route path="/dashboard" isAdmin={true} element={<Dashboard/>} exact />
        <Route path="/admin/products" isAdmin={true} element={<CoursesList/>} exact />
        <Route path="/admin/product" isAdmin={true} element={<NewCourse/>} exact />
        <Route path="/admin/product/:id" isAdmin={true} element={<UpdateCourse/>} exact />
        <Route path="/admin/users" isAdmin={true} element={<UsersList/>} exact />
        <Route path="/admin/user/:id" isAdmin={true} element={<UpdateUser/>} exact />
        <Route path="/admin/reviews" isAdmin={true} element={<CourseReviews/>} exact />
        </Routes>

        {!loading && (!isAuthenticated || user.role !== 'admin') && (
          <Footer />
        )}
      </div>
    </Router>
  );
}

export default App;

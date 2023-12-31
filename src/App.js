import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import MyCourse from "./pages/course/MyCourse";
import MyEnrollCourseDetails from "./pages/course/MyEnrollCourseDetails";
import MyCourseDetails from "./pages/course/MyCourseDetails";
import MyEnrollCourse from "./pages/course/MyEnrollCourse";
import Website from "./pages/review/Website";

// Cart Imports
import Cart from "./pages/cart/Cart";

// Auth or User imports
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Profile from "./pages/user/Profile";
import UpdateProfile from "./pages/user/UpdateProfile";
import UpdatePassword from "./pages/user/UpdatePassword";
import ForgotPassword from "./pages/user/ForgotPassword";
import NewPassword from "./pages/user/NewPassword";

// Admin Imports
import Dashboard from "./pages/admin/Dashboard";
import CoursesList from "./pages/admin/CoursesList";
import NewCourse from "./pages/course/NewCourse";
import UpdateCourse from "./pages/course/UpdateCourse";
import UsersList from "./pages/admin/UsersList";
import UpdateUser from "./pages/admin/UpdateUser";
import CourseFeedbacks from "./pages/admin/CourseReviews";

import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";
import store from "./store";
import axios from "axios";

// Payment
import PaymentPage from "./pages/payment/Payment";
import CourseScreen from "./pages/CourseVideo/Course";
import CourseDetailScreen from "./pages/CourseDetail/CourseDetails";
import TeacherCoursesPage from "./pages/TeacherCourses/TeacherCourses";
import TeacherCoursePage from "./pages/TeacherCourse";

function App() {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  const currentUrl = window.location.href;

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/home" element={<Home />} exact />
            {/* <Route path="/blog" element={<Blog />} exact /> */}
            <Route path="/" element={<Website />} exact />

            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetailScreen />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/auth/login" element={<Login />} />
            <Route path="auth/register" element={<Register />} />
            <Route path="/user/:user_id" element={<Profile />} exact />
            <Route path="/payment/:courseId" element={<PaymentPage />} />
            <Route path="/user/update/:id" element={<UpdateProfile />} exact />
            <Route
              path="/user/update_pass"
              element={<UpdatePassword />}
              exact
            />
            <Route path="/password/forgot" element={<ForgotPassword />} exact />
            <Route path="/user/reset_pass" element={<NewPassword />} exact />
          </Routes>
        </div>
        <Routes>
          <Route
            path="/course/:courseId/:lectureId"
            element={<CourseScreen />}
            exact
          />
          <Route
            path="/dashboard"
            isAdmin={true}
            element={<Dashboard />}
            exact
          />
          <Route
            path="/courses"
            isAdmin={true}
            element={<CoursesList />}
            exact
          />
          <Route
            path="/feedbacks"
            isAdmin={true}
            element={<CourseFeedbacks />}
            exact
          />
          <Route
            path="/create/course"
            isAdmin={true}
            element={<NewCourse />}
            exact
          />
          <Route
            path="/update/course/:id"
            isAdmin={true}
            element={<UpdateCourse />}
            exact
          />
          <Route path="/users" isAdmin={true} element={<UsersList />} exact />
          <Route
            path="/admin/update/:userId"
            isAdmin={true}
            element={<UpdateUser />}
            exact
          />
          <Route
            path="/course/create/list/:userId"
            element={<MyCourse />}
            exact
          />
          <Route path="/mycourse/:id" element={<MyCourseDetails />} exact />
          <Route
            path="/courses/enrolled/:userId"
            element={<MyEnrollCourse />}
            exact
          />
          <Route
            path="/course/enrolled/:userId/:id"
            element={<MyEnrollCourseDetails />}
            exact
          />
          <Route
            path="/instructor/courses"
            element={<TeacherCoursesPage />}
            exact
          />
          <Route
            path="/instructor/courses/:courseId"
            element={<TeacherCoursePage />}
            exact
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

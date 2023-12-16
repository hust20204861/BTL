import React, { Fragment } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import Search from './Search'
import { loadUser } from '../../actions/userActions'
import { logout } from '../../actions/userActions'
import { myCourses, myEnrollCourses } from '../../actions/courseActions'
import { useEffect } from 'react'

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
const { token, userId, loading } = useSelector(state => state.auth)
 //lấy token được lưu gọi hàm loadUser và lấy dữ liệu

  useEffect(() => {
      dispatch(loadUser(userId, token));   
  }, [userId, token]);
 const { userinfo } = useSelector(state => state.info)
 console.log("dsfdfds", userinfo)


  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully')
  }
  const myEnrollCourseHandle = () => {
    dispatch(myEnrollCourses(userId));
    alert.success('Here is your enroll courses')
  }
  const myCourseHandle = () => {
    dispatch(myCourses(userId));
    alert.success('Here is your courses')
  }
  
  return (
    <Fragment>
       <header>
        <div className="logo">
          <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></Link>
          <h1>Web Learning</h1>
        </div>
        <div className='search'>
          <Search/>
        </div>
        <div className="user">
            <Link to="/cart" id="cart"><svg id = "cartIcon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>

            {token ? (
                       <div>
                        <Link to='/notification' id='notification' ><svg id='notificationIcon' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg></Link>
                        <div className="dropdown">
                        <Link to = {`/course/create/list/${userId}`} id='create-course' onClick={myCourseHandle} >My Course</Link>
                                <figure className="avatar avatar-nav">
                                    <img
                                        // src={user.avatar && user.avatar.url}
                                        alt={userinfo && userinfo.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span className='head-user-name'>{userinfo && userinfo.name}</span>
                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {userinfo && userinfo.role === 'ADMIN' && (
                                    <Link className="dropdown-item" id="head-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" id="head-item" to={`/enroll/user/${userId}`}  onClick={myEnrollCourseHandle} >MyEnrollCourses</Link>
                                <Link className="dropdown-item" id="head-item" to={`/user/${userId}`} >Profile</Link>
                                <Link className="dropdown-item text-danger" id="head-item-logout" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>
                            </div>
                        </div>
                      
                        </div>
                    ) : 
                    
                    !loading &&  <div id = "head-login">
                                         <Link to ='/auth/login' >Login</Link>
                                     </div> 
                                     }
                      
           
        </div>
        
      </header>
    </Fragment>
  )
}

export default Header

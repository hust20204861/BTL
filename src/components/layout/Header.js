import React, { Fragment } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Search from "./Search";
import { loadUser } from "../../actions/userActions";
import { logout } from "../../actions/userActions";
import { myCourses, myEnrollCourses } from "../../actions/courseActions";
import { useEffect } from "react";

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
    alert.success("Logged out successfully");
  };
  const myEnrollCourseHandle = () => {
    dispatch(myEnrollCourses(userId));
    alert.success("Here is your enroll courses");
  };
  const myCourseHandle = () => {
    dispatch(myCourses(userId));
    alert.success('Here is your courses')
  }
  
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <MDBNavbar
          expand="lg"
          light
          style={{ backgroundColor: "#e3f2fd", width: "100%" }}
        >
          <MDBContainer className="inline-row d-flex justify-content-between">
            <MDBNavbarNav className="d-flex flex-row">
              <MDBNavbarBrand href="#" className="row flex">
                <Link to="/">
                  <MDBIcon className="ms-1" size="2x" fab icon="aviato" />
                </Link>
              </MDBNavbarBrand>
            </MDBNavbarNav>
            <div className="d-grid gap-4 d-md-flex justify-content-md-end align-items-center">
              <Link to="/">
                <h5 className="align-items-end">Home</h5>
              </Link>
              <div>
                <Search />
              </div>

              <MDBNavbarLink href="cart">
                <MDBIcon fas icon="shopping-cart" />
              </MDBNavbarLink>
              <MDBNavbarLink href="notification">
                <MDBIcon fas icon="bell" />
              </MDBNavbarLink>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <MDBBtn href="/auth/login">LOGIN</MDBBtn>
                <MDBBtn outline href="/auth/Register">
                  SIGNUP
                </MDBBtn>
              </div>
            </div>
          </MDBContainer>
        </MDBNavbar>
      </div>

      {/* <div className="user">
            
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
                      
           
        </div> */}
    </Fragment>
  );
};

export default Header;

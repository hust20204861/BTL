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
    dispatch(myEnrollCourses(userId, token));
    alert.success("Here is your enroll courses");
  };
  const myCourseHandle = () => {
    dispatch(myCourses(userId, token));
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
              
            </div>
          </MDBContainer>
        </MDBNavbar>
      </div>

      <div className="user">
            
            {token ? (
                       <div>
                                 <MDBNavbarLink href="notification">
                <MDBIcon fas icon="bell" />
              </MDBNavbarLink>
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
                              

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <MDBBtn href="/auth/login">LOGIN</MDBBtn>
                <MDBBtn outline href="/auth/Register">
                  SIGNUP
                </MDBBtn>
              </div>
                                     </div> 
                                     }
                      
           
        </div>
    </Fragment>
  );
};

export default Header;

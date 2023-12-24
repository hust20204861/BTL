import React, { Fragment, useState } from "react";
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
  MDBBadge,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Search from "./Search";
import { loadUser } from "../../actions/userActions";
import { logout } from "../../actions/userActions";
import { myCourses, myEnrollCourses } from "../../actions/courseActions";
import { useEffect } from "react";
import { MDBLink } from "mdbreact";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { token, userId, loading } = useSelector((state) => state.auth);
  //lấy token được lưu gọi hàm loadUser và lấy dữ liệu

  useEffect(() => {
    dispatch(loadUser(userId, token));
  }, [userId, token]);
  const { userinfo } = useSelector((state) => state.info);
  console.log("dsfdfds", userinfo);

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
    alert.success("Here is your courses");
  };
  const [openNav, setOpenNav] = useState(false);

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
              <MDBNavbarBrand href="/" className="row flex">
                <Link to="/">
                  <MDBIcon className="ms-1" size="2x" fab icon="aviato" />
                </Link>
              </MDBNavbarBrand>
            </MDBNavbarNav>
            <div className="d-grid gap-4 d-md-flex justify-content-md-end align-items-center">
              <Link to="/">Web Learning</Link>
              {/* <MDBNavbar expand="lg">
                <MDBContainer fluid>
                  <Link to="/">Home</Link>
                  <MDBNavbarToggler
                    type="button"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setOpenNav(!openNav)}
                  >
                    <MDBIcon icon="bars" fas />
                  </MDBNavbarToggler>
                  <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav>
                      <MDBNavbarItem>
                        <Link to="/course">Course</Link>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <Link to="/blog">Blog</Link>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <Link to="/website">Website</Link>
                      </MDBNavbarItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar> */}
              <div>
                <Search />
              </div>

              <Link to="cart">
                <MDBIcon fas icon="shopping-cart" />
              </Link>
              <Link to="notification">
                <MDBIcon fas icon="bell" />
                <MDBBadge pill notification color="danger">
                  9
                </MDBBadge>
              </Link>
              {token ? (
                // <MDBDropdown className="d-grid gap-4 d-md-flex justify-content-md-end align-items-center">

                //     <MDBDropdownToggle
                //     tag="a"
                //     className="hidden-arrow row d-flex align-items-center nav-link"
                //   ></MDBDropdownToggle>
                //     </MDBDropdown>

                <MDBDropdown className="d-grid gap-4 d-md-flex justify-content-md-end align-items-center">
                  <Link
                    to={`/course/create/list/${userId}`}
                    id="create-course"
                    onClick={myCourseHandle}
                  >
                    My Course
                  </Link>
                  <MDBDropdownToggle
                    tag="a"
                    className="hidden-arrow row d-flex align-items-center nav-link"
                  >
                    <MDBBtn
                      className="mx-2"
                      color="tertiary"
                      rippleColor="light"
                    >
                      <img
                        className="rounded-circle"
                        height="22"
                        width="50"
                        alt={userinfo && userinfo.name}
                        loading="lazy"
                      />
                    </MDBBtn>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {/* {userinfo && userinfo.role === "ADMIN" && (
                          <MDBDropdownItem link href="/dashboard">Dashboard</MDBDropdownItem>
                        )} */}
                    <MDBDropdownItem link>
                      <Link
                        to={`/course/create/list/${userId}`}
                        id="create-course"
                        onClick={myCourseHandle}
                      >
                        My Course
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Link
                        to={`/courses/enrolled/${userId}`}
                        onClick={myEnrollCourseHandle}
                      >
                        MyEnrollCourses
                      </Link>
                    </MDBDropdownItem>

                    <MDBDropdownItem link>
                      <Link to={`/user/${userId}`}>Profile</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Link to={`/user/${userId}`}>Update Profile</Link>
                    </MDBDropdownItem>
                    <div>
                      {userinfo && userinfo.role === "ADMIN" && (
                        <MDBDropdownItem>
                          <Link to="/dashboard">---Dashboard</Link>
                        </MDBDropdownItem>
                      )}
                    </div>
                    <MDBDropdownItem link>
                      <Link to="/" onClick={logoutHandler}>
                        Logout
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              ) : (
                // {token ? (
                //   <div>
                //     <div className="dropdown">

                //       <figure className="avatar avatar-nav">
                //         <img
                //           alt={userinfo && userinfo.name}
                //           className="rounded-circle"
                //         />
                //       </figure>
                //       <span className="head-user-name">
                //         {userinfo && userinfo.name}
                //       </span>

                //       <div
                //         className="dropdown-menu"
                //         aria-labelledby="dropDownMenuButton"
                //       >
                //         {userinfo && userinfo.role === "ADMIN" && (
                //           <Link
                //             className="dropdown-item"
                //             id="head-item"
                //             to="/dashboard"
                //           >
                //             Dashboard
                //           </Link>
                //         )}
                //         <Link
                //           className="dropdown-item"
                //           id="head-item"
                //           to={`/courses/enrolled/${userId}`}
                //           onClick={myEnrollCourseHandle}
                //         >
                //           MyEnrollCourses
                //         </Link>
                //         <Link
                //           className="dropdown-item"
                //           id="head-item"
                //           to={`/user/${userId}`}
                //         >
                //           Profile
                //         </Link>
                //         <Link
                //           className="dropdown-item text-danger"
                //           id="head-item-logout"
                //           to="/"
                //           onClick={logoutHandler}
                //         >
                //           Logout
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                !loading && (
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <MDBBtn href="/auth/login">LOGIN</MDBBtn>
                    <MDBBtn href="/auth/register">SIGNUP</MDBBtn>
                  </div>
                )
              )}
            </div>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </Fragment>
  );
};

export default Header;

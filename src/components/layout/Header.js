import React, { Fragment, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { Box, Button, Typography } from "@mui/material";

import Search from "./Search";
import { loadUser } from "../../actions/userActions";
import { logout } from "../../actions/userActions";
import { myCourses, myEnrollCourses } from "../../actions/courseActions";
import { useEffect } from "react";
import { MDBLink } from "mdbreact";

const Header = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { token, userId, loading } = useSelector((state) => state.auth);
  //lấy token được lưu gọi hàm loadUser và lấy dữ liệu

  useEffect(() => {
    dispatch(loadUser(userId, token));
  }, [userId, token]);
  const { userinfo } = useSelector((state) => state.info);

  //  if(userinfo.avatar) {
  //   const avatar =  userinfo.avatar;
  //  }
  //console.log("bbbb", avatar)

  const logoutHandler = () => {
    window.location.href = window.location.href === "/" ? "/home" : "/";
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
              <MDBNavbarBrand href="/home" className="row flex">
                <Link to="/">
                  <MDBIcon className="ms-1" size="4x" fab icon="react" />
                </Link>
              </MDBNavbarBrand>
            </MDBNavbarNav>
            <div className="d-grid gap-4 d-md-flex justify-content-md-end align-items-center">
              <MDBNavbar expand="lg">
                <MDBContainer fluid>
                  <Link
                    to="/home"
                    style={{
                      color: "#386bc0",
                      fontWeight: "bold",
                      padding: "2px",
                    }}
                  >
                    Home
                  </Link>
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
                      <MDBNavbarItem marginLeft={2}>
                        <Link
                          to="/blog"
                          style={{
                            color: "#386bc0",
                            fontWeight: "bold",
                            padding: "2px",
                            marginLeft: "5px",
                          }}
                        >
                          Blog
                        </Link>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <Link
                          to="/"
                          style={{
                            color: "#386bc0",
                            fontWeight: "bold",
                            padding: "2px",
                            marginLeft: "5px",
                          }}
                        >
                          Website
                        </Link>
                      </MDBNavbarItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>

              <div>
                <Search />
              </div>

              <Link to="cart" style={{ marginLeft: "10px" }}>
                <MDBIcon fas icon="shopping-cart" />
              </Link>
              <Link to="notification" style={{ marginLeft: "10px" }}>
                <MDBIcon fas icon="bell" />
                <MDBBadge pill notification color="danger">
                  9
                </MDBBadge>
              </Link>
              {token ? (
                <MDBDropdown display={"flex"}>
                  <Box display={"flex"}>
                    <Link
                      to={`/course/create/list/${userId}`}
                      id="create-course"
                      onClick={myCourseHandle}
                      style={{ padding: "20px" }}
                    >
                      My Course
                    </Link>
                    <Button
                      onClick={() => navigate("/instructor/courses")}
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      Create course
                    </Button>
                    <Link
                      to={`/instructor/courses`}
                      style={{ padding: "20px" }}
                    ></Link>
                    <MDBDropdownToggle
                      style={{ background: "transparent", boxShadow: "none" }}
                    >
                      <img
                        className="rounded-circle"
                        height="50"
                        width="50"
                        alt={userinfo && userinfo.name}
                        src={
                          "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                        }
                        loading="lazy"
                      />
                      {/* )}  */}
                    </MDBDropdownToggle>
                  </Box>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      {userinfo && userinfo.role === "ADMIN" && (
                        <MDBDropdownItem style={{ marginTop: "10px" }}>
                          <Link to="/dashboard">Dashboard</Link>
                        </MDBDropdownItem>
                      )}
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
                      <Link
                        to="/"
                        style={{ color: "red" }}
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              ) : (
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

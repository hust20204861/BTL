import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

import MetaData from "../../components/layout/MetaData";
import { login, clearErrors } from "../../actions/userActions";
import Loader from "../../components/layout/Loader";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { MDBLink } from "mdbreact";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate, alert]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Login"} />
          <form
            onSubmit={submitHandler}
            className="square rounded-9 shadow-lg mb-4 mt-5 p-4 w-40 center"
            style={{ margin: "360px", paddingLeft: "300px" }}
          >
            <h1>Login</h1>
            <MDBValidation breakpoint="sm">
              <MDBValidationItem
                feedback="Please your email or username"
                invalid
              >
                <MDBInput
                  className="mb-4"
                  type="text"
                  id="validationCustom01"
                  label="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </MDBValidationItem>
              <MDBValidationItem
                tooltip
                feedback="Please your password"
                invalid
              >
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="validationCustom02"
                  required
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </MDBValidationItem>
              <MDBValidationItem tooltip invalid>
                <MDBRow className="mb-4">
                  <MDBCol className="d-flex justify-content-center">
                    <MDBCheckbox
                      id="form2Example3"
                      label="Remember me"
                      defaultChecked
                    />
                  </MDBCol>

                  <MDBCol>
                    <a href="/password/forgot">Forgot password?</a>
                  </MDBCol>
                </MDBRow>
              </MDBValidationItem>
            </MDBValidation>
            <MDBBtn type="submit" className="mb-4" block>
              Sign in
            </MDBBtn>

            <div className="text-center">
              <p>
                Not a member? <a href="/auth/register">Register</a>
              </p>
              <p>or sign up with:</p>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
          </form>

          {/* <div className="login">
            <div className="login-form">
              <form className="form" onSubmit={submitHandler}>
                <h1>Login</h1>
                <div className="login-email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="login-password">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Link to="/password/forgot" className="to-forgot-pass">
                  Forgot Password?
                </Link>

                <button id="login_button" type="submit">
                  LOGIN
                </button>

                <Link to="/auth/register" className="to-create">
                  Create Account
                </Link>
              </form>
            </div>
          </div>
          <div className="border d-flex align-items-center justify-content-center">
            <MDBValidation breakpoint='sm'>
            <MDBValidationItem tooltip className="col-md-4">
              <MDBInput
                
                id="validationCustom01"
                required
                label="Email"
              />
            </MDBValidationItem>
            <MDBValidationItem tooltip className="col-md-4">
              <MDBInput
                
                id="validationCustom02"
                required
                label="Password"
              />
            </MDBValidationItem>
            <MDBValidationItem
              tooltip
              feedback="Please choose a username."
              invalid
              className="col-md-4"
            >
              <MDBInputGroup textBefore="@">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  placeholder="Username"
                  required
                />
              </MDBInputGroup>
            </MDBValidationItem>

            

            <div className="col-12">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </MDBValidation>
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;

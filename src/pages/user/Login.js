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
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBTooltip,
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
      navigate("/");
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

          <div className="login">
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
          {/* <MDBValidation breakpoint='sm'>
            <MDBValidationItem tooltip className="col-md-4">
              <MDBInput
                value={formValue.fname}
                name="fname"
                onChange={onChange}
                id="validationCustom01"
                required
                label="Email"
              />
            </MDBValidationItem>
            <MDBValidationItem tooltip className="col-md-4">
              <MDBInput
                value={formValue.lname}
                name="lname"
                onChange={onChange}
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
          </MDBValidation> */}
    </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;

import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import MetaData from "../../components/layout/MetaData";
import { register, clearErrors } from "../../actions/userActions";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, error, loading } = useSelector((state) => state.register);

  useEffect(() => {
    if (!isError) {
      alert.success("Đăng kí thành công, hãy đăng nhập để trải nghiệm");
      navigate("/auth/login");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isError, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <Fragment>
      <MetaData title={"Register User"} />
      <form
        className="shadow-lg mb-4 mt-4 p-4 w-50 center"
        onSubmit={submitHandler}
        encType="multipart/form-data"
        style={{ margin: "360px", paddingLeft: "300px" }}
      >
        <hr />
        <h1 className="mb-3">Register</h1>
        <MDBValidation>
          <MDBValidationItem feedback="Please enter username.">
            <MDBInput
              className="mb-4"
              type="name"
              id="form3Example3"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </MDBValidationItem>
          <MDBValidationItem feedback="Please enter your email">
            <MDBInput
              className="mb-4"
              type="text"
              id="form3Example3"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </MDBValidationItem>
          <MDBValidationItem feedback="Please enter your password">
            {" "}
            <MDBInput
              className="mb-4"
              type="password"
              id="form3Example4"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </MDBValidationItem>
        </MDBValidation>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Subscribe to our newsletter"
          defaultChecked
        />

        <MDBBtn
          type="submit"
          className="mb-4"
          block
          disabled={loading ? true : false}
        >
          Sign up
        </MDBBtn>

        <div className="text-center">
          <p>
            Have a Account? <a href="/auth/login">Sign in</a>
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
        <hr />
      </form>

      {/* <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Register</h1>

            <div className="form-group">
              <label htmlFor="email_field">Name</label>
              <input
                type="name"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="text"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Register;

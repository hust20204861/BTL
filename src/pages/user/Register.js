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
        className="square rounded-9 shadow-lg mb-4 mt-5 p-4 w-40 center"
        onSubmit={submitHandler}
        encType="multipart/form-data"
      >
        <hr />
        <h1 className="mb-3">Register</h1>
        <MDBValidation>
          <MDBValidationItem feedback='Please enter username.' >
            <MDBInput
              className="mb-4"
              type="name"
              id="form3Example3"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </MDBValidationItem>
          <MDBValidationItem feedback='Please enter your email' >
            <MDBInput
              className="mb-4"
              type="text"
              id="form3Example3"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </MDBValidationItem>
          <MDBValidationItem feedback='Please enter your password' >
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
    </Fragment>
  );
};

export default Register;

import React, { Fragment, useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import MetaData from "../../components/layout/MetaData";
import { forgotPassword, clearErrors } from "../../actions/userActions";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", email);

    dispatch(forgotPassword(formData));
  };

  return (
    <Fragment>
      <MetaData title={"Forgot Password"} />

      <form
        onSubmit={submitHandler}
        className="square rounded-9 shadow-lg mb-4 mt-5 p-4 center"
        style={{ margin: "360px", paddingLeft: "300px", width: "320px" }}
      >
        <h1>Forgot Password</h1>
        <MDBInput
          className="mb-4"
          type="email"
          id="form5Example2"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <MDBBtn type="submit" block disabled={loading ? true : false}>
          Reset Password
        </MDBBtn>
        <br />
        <br />
        <div className="text-center">
          <p>
            or <a href="/auth/login">Login</a>
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>

      {/* <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Forgot Password</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Enter Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button
                            id="forgot_password_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false} >
                            Send Email
                    </button>

                    </form>
                </div>
            </div> */}
    </Fragment>
  );
};

export default ForgotPassword;

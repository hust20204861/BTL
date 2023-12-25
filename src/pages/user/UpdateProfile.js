import React, { Fragment, useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";


import MetaData from '../../components/layout/MetaData'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import { MDBValidation, MDBInput, MDBValidationItem, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'


const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar, setAvatar] = useState("");
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [role, setRole] = useState("");


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [avatar, setAvatar] = useState('')
    const [description, setDescription] = useState('')
    const [money, setMoney] = useState('')
    const [role, setRole] = useState('')


    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token, userId } = useSelector(state => state.auth);
    const { userinfo } = useSelector(state => state.info);
    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {

        if (userinfo) {
            setName(userinfo.name);
            setEmail(userinfo.email);
            setWebsite(userinfo.website);
            setAvatar(userinfo.avatar);
            setDescription(userinfo.description);
            setRole(userinfo.role);
   
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')
            dispatch(loadUser(userId, token));

            navigate(`/auth/login`)

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, navigate, isUpdated, userinfo, token, userId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('website', website);
        formData.set('avatar', avatar);
        formData.set('description', description);
        formData.set('role', role);

        const jsonObject = {};
        for (const pair of formData.entries()) {
            jsonObject[pair[0]] = pair[1]
        }
        const jsonData = JSON.stringify(jsonObject);

        dispatch(updateProfile(userId, jsonData, token))

    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("User updated successfully");
      dispatch(loadUser(userId, token));

      navigate(`/auth/login`);

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, alert, error, navigate, isUpdated, userinfo, token, userId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("website", website);
    formData.set("avatar", avatar);
    formData.set("description", description);
    formData.set("money", money);
    formData.set("role", role);

    const jsonObject = {};
    for (const pair of formData.entries()) {
      jsonObject[pair[0]] = pair[1];
    }
    const jsonData = JSON.stringify(jsonObject);

    dispatch(updateProfile(userId, jsonData, token));
  };

  return (
    <Fragment>
      <MetaData title={"Update Profile"} />
      <br />
      <form
        onSubmit={submitHandler}
        className="border shadow-lg mb-4 mt-5 p-4 "
        style={{ margin: "360px", paddingLeft: "300px", width: "800px" }}
        encType="application/json"
      >
        <MDBRow className=" square border-end">
          <MDBCol md="4" className="d-flex row border-end ">
            <Link>
              {" "}
              <img
                className="rounded-circle"
                alt={userinfo && userinfo.name}
                loading="lazy"
                style={{ height: "180px", width: "180px" }}
              />
            </Link>

            <MDBBtnGroup
              shadow="0"
              vertical
              aria-label="Vertical button group"
              className="start"
              style={{ width: "250px" }}
            >
              <br />

              <MDBBtn color="link">View public</MDBBtn>
              <MDBBtn color="link">Profile</MDBBtn>
              <MDBBtn color="link">Image</MDBBtn>
              <MDBBtn color="link">Account Security </MDBBtn>
              <MDBBtn color="link">Phone Number</MDBBtn>
              <MDBBtn color="link">Payment Method</MDBBtn>
              <MDBBtn color="link">Privacy</MDBBtn>
              <MDBBtn color="link">Notification</MDBBtn>
              <MDBBtn color="link">Close account</MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
          <MDBCol
            md="8"
            className="d-flex row text-center"
            style={{ marginLeft: "18px" }}
          >
            <MDBTypography className="d-flex row text-center ">
              <MDBTypography tag="strong" className="center">
                {" "}
                Public Profile{" "}
              </MDBTypography>
              <MDBTypography tag="small" className="center">
                {" "}
                Add information about yourself{" "}
              </MDBTypography>
            </MDBTypography>
            <hr />
            <form className="text-start">
              <h5 className="text-start">Basic information</h5>
              <MDBInput
                className="mb-4"
                type="text"
                id="form5Example2"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                className="mb-4"
                type="email"
                id="form5Example2"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBTypography tag="small" className="center">
                Add a career headline, such as "Instructor at Udemy" or
                "Architect."{" "}
              </MDBTypography>
              <MDBInput
                className="mb-4"
                type="titile"
                id="form1Example1"
                label="Caption"
              />
              <MDBTypography tag="small" className="center">
                Links and coupon codes are not allowed in this section.{" "}
              </MDBTypography>
              <MDBTextArea label="Message" id="textAreaExample" rows={4} />
              <br />
              <select class="form-select" aria-label="Default select example">
                <option selected>English</option>
                <option value="1">Albanian</option>
                <option value="2">Belarusian</option>
                <option value="3">Cantonese</option>
                <option value="4">Croatian</option>
                <option value="5">Danish</option>
                <option value="6">Finnish</option>
                <option value="7">Vietnamese</option>
                <option value="8">Zulu</option>
              </select>
              <br />

              <MDBBtn type="submit" block disabled={loading ? true : false}>
                Save
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
      </form>

      {/* <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandler}
            encType="application/json"
          >
            <h1 className="mt-2 mb-5">Update Profile</h1>

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

                    <form className="square rounded-9 shadow-lg mb-4 mt-5 p-4 w-40 center" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mb-3">Update Profile</h1>

                        <MDBValidation>
                            <MDBValidationItem feedback='Enter your name'/>
                            <MDBInput
                                type="name"
                                id="form3Example3"
                                label="Name"
                                className="mb-4"
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </MDBValidation>

                        <MDBValidationItem>
                            <MDBValidationItem feedback='Enter your email'/>
                            <MDBInput
                                type="text"
                                id="form3Example3"
                                className="mb-4"
                                label='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </MDBValidationItem>
                        
                            <MDBValidationItem feedback='Enter your website'/>
                            <MDBInput
                                type="text"
                                id="form3Example3"
                                className="mb-4"
                                label='Website'
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        
                       
                            <MDBValidationItem feedback='Enter your avatar'/>
                            <MDBInput
                                type="text"
                                id="form3Example3"
                                className="mb-4"
                                label='Avatar'
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)}
                            />
                       
                       
                            <MDBValidationItem feedback='Enter your description'/>
                            <MDBInput
                                type="text"
                                id="form3Example3"
                                className="mb-4"
                                label='Description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        
                       
                            <MDBValidationItem feedback='Enter your role'>Role</MDBValidationItem>
                            <select
                                        id="form3Example3"
                                        className="mb-4"
                                        name='role'
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="user">user</option>
                                        <option value="admin">admin</option>
                                    </select>
                                    <MDBCheckbox
                                       wrapperClass="d-flex justify-content-center mb-4"
                                       id="form3Example5"
                                       label="Update your profile?"
                                       defaultChecked
                                    />
                        <MDBBtn type="submit" className="mb-4" block disabled={loading ? true : false} >Update</MDBBtn>
                    </form>
              
        </Fragment>
    )
}



export default UpdateProfile;

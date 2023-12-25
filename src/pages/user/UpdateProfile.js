import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";



import MetaData from '../../components/layout/MetaData'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import { MDBValidation, MDBInput, MDBValidationItem, MDBRow, MDBCol, MDBBtnGroup,MDBTypography, MDBTextArea, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'



const UpdateProfile = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [avatar, setAvatar] = useState('')
    const [description, setDescription] = useState('')
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

    }, [dispatch, alert, error, navigate, isUpdated, userinfo, token, userId]);



  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("id", userId)
    formData.set("name", name);
    formData.set("email", email);
    formData.set("website", website);
    formData.set("avatar", avatar);
    formData.set("description", description);
    formData.set("money", 10)
    formData.set("role", "ADMIN");

    const jsonObject = {};
    for (const pair of formData.entries()) {
      jsonObject[pair[0]] = pair[1];
    }
    const jsonData = JSON.stringify(jsonObject);

    dispatch(updateProfile(userId, jsonData, token));
  };

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

  return (
    <Fragment>
      <MetaData title={"Update Profile"} />
      <br />
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

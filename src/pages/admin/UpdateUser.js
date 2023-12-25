import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { MDBValidation, MDBInput, MDBValidationItem, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

import MetaData from '../../components/layout/MetaData'
import Sidebar from '../../components/layout/Sidebar'
import { updateUser, getUserDetails, clearErrors } from '../../actions/userActions'
import { UPDATE_USER_RESET } from '../../constants/userConstants'

const UpdateUser = () => {

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
    const { token } = useSelector(state => state.auth)
    const id = useParams();

    const { error, isUpdated } = useSelector(state => state.user);
    const { user } = useSelector(state => state.userDetails)

    // const userId = id;
console.log("afdgsdajfgksahfjs", id)
    useEffect(() => {

        // console.log(user && user.user_id !== userId);
        // if (user && user.user_id !== userId) {
        //     dispatch(getUserDetails(userId, token))
        // } else {
        //     setName(user.name);
        //     setEmail(user.email);
        //     setRole(user.role)
        // }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')

            navigate('/users')

            dispatch({
                type: UPDATE_USER_RESET
            })
        }

    }, [dispatch, alert, error, navigate, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('website', website);
        formData.set('avatar', avatar);
        formData.set('description', description);
        formData.set('money', money);
        formData.set('role', role);

        const jsonObject = {};
        for (const pair of formData.entries()) {
          jsonObject[pair[0]] = pair[1];
        }
        const jsonData = JSON.stringify(jsonObject);
        dispatch(updateUser(id.userId, token,jsonData ))
    }


    return (
        <Fragment>
            <MetaData title={`Update User`} />
            <div className="row" style={{marginLeft:"700px"}}>
                <div className="col-12 col-md-10">
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                        <form className="square rounded-9 shadow-lg mb-4 mt-5 p-4 w-40 center" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mb-3">Update User</h1>

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
                         <MDBValidationItem>
                            <MDBValidationItem feedback='Enter your money'/>
                            <MDBInput
                                type="text"
                                id="form3Example3"
                                className="mb-4"
                                label='Money'
                                value={money}
                                onChange={(e) => setMoney(e.target.value)}
                            />
                        </MDBValidationItem>
                       
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
                        <MDBBtn type="submit" className="mb-4" block >Update</MDBBtn>
                    </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default UpdateUser

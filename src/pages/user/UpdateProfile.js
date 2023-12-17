import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import MetaData from '../../components/layout/MetaData'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'

const UpdateProfile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [avatar, setAvatar] = useState('')
    // const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

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
            // setAvatarPreview(userinfo.avatar.url)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')
            dispatch(loadUser());

            navigate(`/user/:id`)

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, navigate, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        // formData.set('avatar', avatar);

        dispatch(updateProfile(userId, formData,  token))
    }

    const onChange = e => {
        const reader = new FileReader();

        // reader.onload = () => {
        //     if (reader.readyState === 2) {
        //         setAvatarPreview(reader.result)
        //         setAvatar(reader.result)
        //     }
        // }

        reader.readAsDataURL(e.target.files[0])

    }
    return (
        <Fragment>
            <MetaData title={'Update Profile'} />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mt-2 mb-5">Update Profile</h1>

                        <div className="form-group">
                            <label htmlFor="email_field">Name</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
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
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='avatar mr-3 item-rtl'>
                                        <img
                                            // src={avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept='image/*'
                                        onChange={onChange}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" onSubmit={submitHandler} disabled={loading ? true : false} >Update</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateProfile

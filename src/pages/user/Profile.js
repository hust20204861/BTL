import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../../components/layout/Loader'
import MetaData from '../../components/layout/MetaData'

const Profile = () => {

    const { userinfo, loading } = useSelector(state => state.info)
const { userId } = useSelector(state => state.auth)

  return (
    <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Your Profile'} />

                    <h2 className="my-profile">My Profile</h2>
                    <div className="profile">
                      
                            {/* <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={userinfo.avatar.url} alt={user.name} />
                            </figure> */}
                        <div >
                            <Link to={`/user/update/${userId}`} className="edit-profile">
                                Edit Profile
                            </Link>
                        </div>
                       
                        <div className="ifnomation">
                            <h4>Full Name</h4>
                            <p>{userinfo.name}</p>
                            <hr/>
                            <h4>Email Address</h4>
                            <p>{userinfo.email}</p>
                            <hr/>
                            <h4>Your Website</h4>
                            <p>{userinfo.website}</p>
                            <hr/>
                            <h4>Avatar</h4>
                            <p>{userinfo.avatar}</p>
                            <hr/>
                            <h4>Description</h4>
                            <p>{userinfo.description}</p>
                            <hr/>
                            <h4>Your Money</h4>
                            <p>${userinfo.money}</p>
                            <hr/>
                            <h4>Joined On</h4>
                            <p>{String(userinfo.createdAt).substring(0, 10)}</p>
                         
                        <div >
                            <Link to="/user/update_pass" className="change-password">
                                Change Password
                            </Link>
                            </div>

                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
  )
}

export default Profile

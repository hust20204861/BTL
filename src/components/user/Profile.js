import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)
    // const i = user.avatar.url
    // console.log("ghhfhfd", typeof i)

  return (
    <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Your Profile'} />

                    <h2 className="my-profile">My Profile</h2>
                    <div className="profile">
                      
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                            </figure>
                        <div >
                            <Link to="/me/update" className="edit-profile">
                                Edit Profile
                            </Link>
                        </div>
                       
                        <div className="ifnomation">
                            <h4>Full Name</h4>
                            <p>{user.name}</p>

                            <h4>Email Address</h4>
                            <p>{user.email}</p>

                            <h4>Joined On</h4>
                            <p>{String(user.createdAt).substring(0, 10)}</p>
                         
                        <div >
                            <Link to="/password/update" className="change-password">
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

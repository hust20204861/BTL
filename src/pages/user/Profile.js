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

                            <h4>Email Address</h4>
                            <p>{userinfo.email}</p>

                            <p>{userinfo.website}</p>
                            <p>{userinfo.avatar}</p>
                            <p>{userinfo.description}</p>
                            <p>{userinfo.money}</p>

                            <h4>Joined On</h4>
                            <p>{String(userinfo.createdAt).substring(0, 10)}</p>
                         
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

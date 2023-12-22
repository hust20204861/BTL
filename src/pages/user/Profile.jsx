// import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// import Loader from '../../components/layout/Loader'
// import MetaData from '../../components/layout/MetaData'

// const Profile = () => {

//     const { userinfo, loading } = useSelector(state => state.info)
// const { userId } = useSelector(state => state.auth)

//   return (
//     <Fragment>
//             {loading ? <Loader /> : (
//                 <Fragment>
//                     <MetaData title={'Your Profile'} />

//                     <h2 className="my-profile">My Profile</h2>
//                     <div className="profile">
                      
//                             <figure className='avatar avatar-profile'>
//                                 <img className="rounded-circle img-fluid" src={userinfo.avatar} alt={userinfo.name} />
//                             </figure>
//                         <div >
//                             <Link to={`/user/update/${userId}`} className="btn btn-primary">
//                                 Edit Profile
//                             </Link>
//                         </div>
                       
//                         <div className="ifnomation">
//                             <h4>Full Name</h4>
//                             <p>{userinfo.name}</p>
//                             <hr/>
//                             <h4>Email Address</h4>
//                             <p>{userinfo.email}</p>
//                             <hr/>
//                             <h4>Your Website</h4>
//                             <p>{userinfo.website}</p>
//                             <hr/>
//                             <h4>Avatar</h4>
//                             <p>{userinfo.avatar}</p>
//                             <hr/>
//                             <h4>Description</h4>
//                             <p>{userinfo.description}</p>
//                             <hr/>
//                             <h4>Your Money</h4>
//                             <p>${userinfo.money}</p>
//                             <hr/>
//                             <h4>Joined On</h4>
//                             <p>{String(userinfo.createdAt).substring(0, 10)}</p>
                         
//                         <div >
//                             <Link to="/user/update_pass" className="btn btn-primary">
//                                 Change Password
//                             </Link>
//                             </div>

//                         </div>
//                     </div>
//                 </Fragment>
//             )}
//         </Fragment>
//   )
// }

// export default Profile
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loader from '../../components/layout/Loader';
import MetaData from '../../components/layout/MetaData';
import { Box, Button, Typography } from '@mui/material';
import { Avatar } from '@mui/material';

const Profile = () => {
  const { userinfo, loading } = useSelector((state) => state.info);
  const { userId } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={'Your Profile'} />

          <Box sx={{ marginTop: '2rem' }}>
            <Typography variant="h2" sx={{ mb: '1rem' }}>
              {userinfo.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: '1rem',
              }}
            >
              <Avatar
                src={userinfo.avatar}
                alt={userinfo.name}
                sx={{ width: '200px', height: '200px', mr: '3rem' }}
              />
              <div>
                <Link to={`/user/update/${userId}`}>
                  <Button variant="contained" color="primary">
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </Box>

            <div className="information">
            <Typography variant="h5">Your Biography</Typography>
              <Typography>{userinfo.description}</Typography>
              <hr />
              <Typography variant="h5">Your Website</Typography>
              <Typography>{userinfo.website}</Typography>
              <hr />
              <Typography variant="h5">Email Address</Typography>
              <Typography>{userinfo.email}</Typography>
              <hr />
              <Typography variant="h5">Money</Typography>
              <Typography>${userinfo.money}</Typography>
              <hr />
              <Typography variant="h5">Joined On</Typography>
              <Typography>{String(userinfo.createdAt).substring(0, 10)}</Typography>
              <div>
                <Link to="/user/update_pass">
                  <Button variant="contained" color="primary">
                    Change Password
                  </Button>
                </Link>
              </div>
              <div>
                <Link to={`/courses/enrolled/${userId}`}>
                  <Button variant="contained" color="primary">
                    Khóa học đã tham gia
                  </Button>
                </Link>
              </div>
            </div>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
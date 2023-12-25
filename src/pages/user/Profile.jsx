
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
              <Typography variant="h2" sx={{ mb: '1rem' }}>
              {userinfo.name}
            </Typography>
            </Box>
            <Typography marginLeft={4}>
                <Link to={`/user/update/${userId}`}>
                  <Button variant="contained" color="primary">
                    Edit Profile
                  </Button>
                </Link>
              </Typography>
            <div className="information">
            <Typography variant="h5" style={{marginTop:'20px'}}>Tiểu sử</Typography>
              <Typography>{userinfo.description}</Typography>
              <hr />
              <Typography variant="h5">Website</Typography>
              <Typography>{userinfo.website}</Typography>
              <hr />
              <Typography variant="h5">Email Address</Typography>
              <Typography>{userinfo.email}</Typography>
              <hr />
              <Typography variant="h5">Tài khoản hiện có</Typography>
              <Typography>${userinfo.money}</Typography>
              <hr />
              <Typography variant="h5">Joined On</Typography>
              <Typography>{String(userinfo.createdAt).substring(0, 10)}</Typography>
              <div>
                <Link to="/user/update_pass">
                  <Button variant="contained" color="primary" style={{marginTop:'10px'}}>
                    Change Password
                  </Button>
                </Link>
              </div>
              <div>
                <Link to={`/courses/enrolled/${userId}`} >
                  <Button variant="contained" color="primary" style={{marginTop:'10px'}}>
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
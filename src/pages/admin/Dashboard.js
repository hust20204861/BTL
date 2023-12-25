import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material';

import MetaData from '../../components/layout/MetaData'
import Loader from '../../components/layout/Loader'
import Sidebar from '../../components/layout/Sidebar'
import { getAdminCourses } from '../../actions/courseActions'
import { allUsers } from '../../actions/userActions'

const Dashboard = () => {

    const dispatch = useDispatch();
    const { adminfeedbacks } = useSelector(state => state.adminFeedbacks)
    const { courses } = useSelector(state => state.courses)
    const { users, loading } = useSelector(state => state.allUsers)
    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getAdminCourses(token))
        dispatch(allUsers(token))
    }, [dispatch, token])

    return (
        <Fragment>
            <Box display={'flex'}>
                <Box>
                    <Sidebar />
                </Box>

                <Box>
                    {loading ? <Loader /> : (
                        <Fragment>
                            <MetaData title={'Admin Dashboard'} />
                        <Box display={'flex'} 
                         style={{
                           // backgroundImage: 'url("https://img.lovepik.com/background/20211020/medium/lovepik-colorful-black-blue-background-image_400065267.jpg")',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100vh',
                            width: "2244px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft:'-555px',
                            marginTop: '-240px',
                          }}>
                            <Box padding={10} alignItems={'center'} borderColor={'black'} border={2} marginLeft={5}>
                                <Typography variant='h6'>Courses</Typography>
                                <Typography fontWeight={'bold'}>{courses && courses.length}</Typography>
                                    <Link to="/courses">
                                <Typography bgcolor={'#386bc0'} color='white' padding={"5px"} borderRadius={4} fontWeight={'bold'}>View Details</Typography>
                                    </Link>
                            </Box>

                            <Box  padding={10} alignItems={'center'} borderColor={'black'} border={2}  marginLeft={10}>
                                <Typography variant='h6'>Users</Typography>
                                <Typography fontWeight={'bold'}>{users && users.length}</Typography>
                                    <Link to="/users">
                                <Typography bgcolor={'#386bc0'} color='white' padding={"5px"} borderRadius={4} fontWeight={'bold'}>View Details</Typography>
                                    </Link>
                            </Box>

                            <Box padding={10} alignItems={'center'} borderColor={'black'} border={2}  marginLeft={10}>
                                <Typography variant='h6'>Feedbacks</Typography>
                                <Typography fontWeight={'bold'}>{adminfeedbacks && adminfeedbacks.data.length}</Typography>
                                    <Link to="/feedbacks">
                                <Typography bgcolor={'#386bc0'} color='white' padding={"5px"} borderRadius={4} fontWeight={'bold'}>View Details</Typography>
                                    </Link>
                            </Box>
                        </Box>
                                
                         
                        </Fragment>
                    )}

                </Box>
            </Box>

        </Fragment >
    )
}

export default Dashboard

import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Sidebar = () => {
    return (
        <Box  marginTop={2} marginLeft={3} alignItems={'left'} bgcolor={'white'} width={190}>

        <Link to="/dashboard">
          <Typography variant='h4'>Dashboard</Typography>
        </Link>
        
        <Typography>
          <Typography variant='h5'>Courses</Typography>
          <ul>

          <li >
            <Link to="/courses" class="text-reset">All</Link>
          </li>

          <li >
            <Link to="/create/course" class="text-reset">create</Link>
          </li>

        </ul>
        </Typography>

        <Link to="/users">
        <Typography variant='h5'>Users</Typography>
        </Link>

        <Link to="/feedbacks" >
          <Typography variant='h5'>Feedbacks</Typography>
        </Link>
       
  </Box>
    )
}

export default Sidebar

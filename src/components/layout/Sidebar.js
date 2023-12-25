import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Sidebar = () => {
    return (
        <Box  marginTop={2} marginLeft={3} alignItems={'left'} bgcolor={'#6e9dea'} width={190}>

        <Link to="/dashboard">
          <Typography variant='h4' color={'black'} fontWeight={'bold'}>Quản lý</Typography>
        </Link>
        
        <Typography>
          <Typography variant='h5'color={'black'}>Courses</Typography>
          <ul>

          <li >
            <Link to="/courses" class="text-reset" style={{color:'black'}} >Xem tất cả</Link>
          </li>

          <li >
            <Link to="/create/course" class="text-reset">Tạo mới</Link>
          </li>

        </ul>
        </Typography>

        <Link to="/users">
        <Typography variant='h5' color={'black'}>Users</Typography>
        </Link>

        <Link to="/feedbacks" >
          <Typography variant='h5'color={'black'}>Feedbacks</Typography>
        </Link>
       
  </Box>
    )
}

export default Sidebar

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLectures } from '../../actions/courseActions';
import { Box } from '@mui/material';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const Lecture = ({selectedSectionId, id}) => {
    const { lectures } = useSelector(state => state.lectures)
    const { token } = useSelector(state => state.auth)
    console.log("gggg", id)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLectures(selectedSectionId, token));
    }, [selectedSectionId, token, dispatch])
  return (
    <Box>
        {lectures.data? (
        <Box>
            {lectures.data.map(lecture => (
            <Link to={`/course/${id}/${lecture.id}`}>
        <Typography fontWeight={'bold'} 
                        bgcolor={'#e3f2fd'} 
                        variant="h6" 
                        width={'50%'}
                        border={1} 
                        borderColor={'black'} 
                        marginTop={3} 
                        height={'60px'}>
                          {lecture.name}
        </Typography>
        </Link>
            ))}
        </Box>) : (<Typography>Chưa có bài giảng nào</Typography>)}
       
    </Box>
  )
}

export default Lecture

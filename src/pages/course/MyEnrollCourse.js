import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Box, Button, List, ListItem, Rating, Typography } from "@mui/material";
import { COLOR } from "../../styles/color";

const MyEnrollCourse = () => {  
const { myenrollcourses } = useSelector(state => state.myenrollcourses)
const { userId } = useSelector(state => state.auth)
    return (      
        <div className='mycourses'>
    <Typography variant='h3' textAlign='center'>Khóa học bạn đã tham gia</Typography>
 <Box
  display="flex"
  flexDirection="row"
  flexWrap="wrap"
  justifyContent="space-between"
  width={"100%"}
>
  {myenrollcourses.map((course, index) => (
    <Link to={`/course/enrolled/${userId}/${course.id}`}>
    <Box
      key={index}
      margin={5}
      width="80%"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border={2}
      borderColor={COLOR.gray}
      borderRadius={2}
      padding={2}
      marginBottom={2}
    >
      <Typography variant="h4" color={COLOR.black}>
        {course.title}
      </Typography>
      <Box
        display={'flex'}
        component="img"
        sx={{
          height: 250,
          width: 400,
        }}
        alt="Course Image"
        src={course.courseImageUrl}
      />
      <Box
        display="flex"
        flexDirection="column"
        textAlign="left"
        width="100%"
      >
        <Box display="flex" alignItems="center" marginTop={4}>
          <Typography
            variant="body1"
            color={COLOR.functionYellow.default}
            fontWeight={600}
            marginRight={1}
          >
            {course.rating}
          </Typography>
          <Rating
            name="half-rating"
            defaultValue={parseFloat(course.rating)}
            precision={0.5}
            readOnly
          />
        </Box>
      </Box>
      {/* <Button variant="contained" fullWidth sx={{ marginTop: "12px" }}>
        <Typography variant="body1" color={COLOR.white}>
          Xem khóa học
        </Typography>
      </Button> */}

    </Box>
    </Link>
  ))}
</Box> 
        </div>
    )
}

export default MyEnrollCourse

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
  height={1000}
>
  {myenrollcourses.map((course, index) => (
    <Box
      key={index}
      margin={5}
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      marginBottom={2}
    >
    <Link to={`/course/enrolled/${userId}/${course.id}`} >
    
      <Box
        component="img"
        sx={{
          height: 250,
          width: 400,
          borderRadius:5,
        }}
        alt="Course Image"
        src={course.courseImageUrl}

      />
        <Typography variant="h4"  style={{ color:"blue" ,marginTop:'-260px'} } >
        {course.title}
      </Typography>
    </Link>

      <Box
        display="flex"
        flexDirection="column"
        textAlign="left"
      >
        {/* <Box display="flex" alignItems="center" marginTop={4}>
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
        </Box> */}
      </Box>
      {/* <Button variant="contained" fullWidth sx={{ marginTop: "12px" }}>
        <Typography variant="body1" color={COLOR.white}>
          Xem khóa học
        </Typography>
      </Button> */}

    </Box>
  ))}
</Box> 
        </div>
    )
}

export default MyEnrollCourse

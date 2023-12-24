import React, { Fragment} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, List, ListItem, Rating, Typography } from "@mui/material";
import { COLOR } from "../../styles/color";
import MetaData from "../../components/layout/MetaData";
const MyCourse = () => {
  const { mycourses } = useSelector((state) => state.mycourses);
  return (
    <Fragment>
    <MetaData title={'My Course'} />
    <Box>
    <Typography variant="h2" sx={{ mb: '1rem' }} textAlign={"center"}>
    Khóa học của bạn
    </Typography>
    <Box
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="space-between"
    border= "none"
  >
   
    {mycourses.map((course, index) => (
      <Box
        key={index}
        width="30%"
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
          component="img"
          sx={{
            height: 190,
            width: "100%",
         
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
        <Link to = {`/mycourse/${course.id}`}>
        <Button variant="contained" fullWidth sx={{ marginTop: "12px" }}>
          <Typography variant="body1" color={COLOR.white}>
            Xem khóa học
          </Typography>
        </Button>
        </Link>
      </Box>
    ))}
  </Box>
  <Link  to="/create/course">
  <Button variant="contained" fullWidth sx={{ marginTop: "20px", padding: "20px" }}>
          <Typography variant="body1" color={COLOR.white}>
            Tạo khóa học của bạn
          </Typography>
        </Button>
  </Link>
  </Box>
  </Fragment>
  );
};

export default MyCourse;

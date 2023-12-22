import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, List, ListItem, Rating, Typography } from "@mui/material";
import { COLOR } from "../../styles/color";

const Course = ({ course }) => {
  return (
      <Box 
      display={"flex"} 
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between">
        <Box
          position={"sticky"}
          top={80}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          border={2}
          borderColor={COLOR.gray}
          borderRadius={2}
          padding={2}
          marginLeft={2}
        >
            <Typography variant={"h4"} color={COLOR.black}>
              {course.learningObject}
            </Typography>
          <Box
            component="img"
            sx={{
              height: 192,
              width: 300,
            }}
            alt="Course Image"
            src={course.courseImageUrl}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={"left"}
            width={"100%"}
          >
            <Box display={"flex"} alignItems={"center"} marginTop={4}>
              <Typography
                variant={"body1"}
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
          <Link to={`/course/${course.id}`}>
          <Button
            variant="contained"
            fullWidth
            sx={{ marginTop: "12px" }}
          >
            <Typography variant={"body1"} color={COLOR.white}>
              Xem khóa học
            </Typography>
          </Button>
          </Link>
        </Box>
      </Box>
  );
};

export default Course;

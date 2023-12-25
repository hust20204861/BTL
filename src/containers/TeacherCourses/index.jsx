import React, { useState, useEffect } from "react";
import TeacherLayout from "../../components/layout/Teacher";
import { Box, Button, TextField, Typography } from "@mui/material";
import TeacherHeader from "../../components/TeacherHeader";
import { getTeacherCourses } from "../../apis/teacher";
import { getAccessToken, login } from "../../apis/auth";
import { useSelector } from "react-redux";
import { COLOR } from "../../styles/color";
import { useNavigate } from "react-router-dom";
import { createCourse, deleteCourse } from "../../apis/courses";
import SuccessMessage from "../../components/SuccessMessage";

const TeacherCourses = () => {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();
  const getUserInformation = async () => {
    const res = await login("minhtuyenvp02@gmail.com", "123456");

    return res.user_id;
  };

  const fetchCourses = async () => {
    try {
      const accessToken = await getAccessToken();

      const userId = await getUserInformation();

      const res = await getTeacherCourses(userId, accessToken);

      setCourses(res);
      // const data = await res.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      const accessToken = await getAccessToken();

      const res = await deleteCourse(courseId, accessToken);
      const newCourses = courses.filter((course) => course.id !== courseId);
      setCourses(newCourses);

      // const courses = [...courses];

      // setCourses(res);
      // const data = await res.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateCourse = async () => {
    try {
      const accessToken = await getAccessToken();

      const courseData = {
        learningObject: "",
        requiredSkills: "",
        courseFor: "",
        title: "New Course",
        totalEnroll: 0,
        subtitle: "",
        courseDescription: "",
        language: "",
        level: "",
        category: "",
        primarilyTaught: "",
        courseImageUrl: "https://bom.so/2sHCna",
        promotionalVideoUrl: "",
        price: 0,
        welcomeMessage: "",
        congratulationMessage: "",
        status: "",
        rating: 0,
        sale: 0,
      };

      const newCourse = await createCourse(courseData, accessToken);

      const newCourses = [...courses];
      newCourses.push(newCourse);
      setCourses(newCourses);
      navigate(`/instructor/courses/${newCourse.id}`);
      SuccessMessage("Success", "Create new course successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      paddingX={3}
      paddingY={2}
    >
      <TeacherHeader />
      <Box>
        <Typography variant={"h5"}>Khóa học của bạn</Typography>
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginY={2}
        >
          <TextField placeholder="Tìm khóa học của bạn"></TextField>
          <Button variant="contained" onClick={handleCreateCourse}>
            Tạo khóa học
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection="column" marginTop={2}>
        <Typography variant={"h5"}>Khóa học của bạn</Typography>
        {courses.map((course) => {
          return (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              // padding={2}
              border={2}
              borderColor={COLOR.gray}
              marginY={2}
            >
              <Box display="flex">
                <img src={course.courseImageUrl} width={250} height={200} />
                <Typography marginLeft={2} variant={"h6"}>
                  {course.title}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={2} margin={2}>
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate(`/instructor/courses/${course.id}`);
                  }}
                >
                  Sửa
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  Xóa
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TeacherCourses;

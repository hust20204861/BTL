import { ArrowBack, Check, Edit } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { COLOR } from "../../styles/color";
import { getAccessToken } from "../../apis/auth";
import { getCourse, updateCourse } from "../../apis/courses";
import SuccessMessage from "../../components/SuccessMessage";
import AlertMessage from "../../components/AlertMessage";

const TeacherCourseHeader = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const courseId = window.location.pathname.split("/")[3];
  const [course, setCourse] = useState({});

  const fetchCourseData = async () => {
    try {
      const accessToken = await getAccessToken();

      const response = await getCourse(courseId, accessToken);
      setCourse(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoBack = () => {
    navigate("/instructor/courses");
  };

  const handleSave = async () => {
    if (!course.title)
      return AlertMessage("Warning", "Please enter course title");

    try {
      const accessToken = await getAccessToken();
      await updateCourse(course, accessToken);
      setIsEdit(false);
      SuccessMessage("Success", "Update course successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <Box
      height={"60px"}
      display={"flex"}
      alignItems={"center"}
      gap={"12px"}
      bgcolor={COLOR.dark}
      color={COLOR.white}
      padding={2}
    >
      <Box onClick={handleGoBack}>
        <ArrowBack />
      </Box>
      {isEdit ? (
        <>
          <TextField
            value={course.title}
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
            placeholder="Course title"
            variant="standard"
            sx={{ input: { color: COLOR.white } }}
          />
          <Box display={"flex"} gap={"12px"} onClick={handleSave}>
            <Check />
          </Box>
        </>
      ) : (
        <>
          <Typography variant={"h6"}>{course.title}</Typography>
          <Box display={"flex"} gap={"12px"} onClick={() => setIsEdit(true)}>
            <Edit />
          </Box>
        </>
      )}
    </Box>
  );
};

export default TeacherCourseHeader;

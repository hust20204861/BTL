import React, { useEffect } from "react";
import TeacherLayout from "../../components/layout/Teacher";
import { Box, Button, TextField, Typography } from "@mui/material";
import TeacherHeader from "../../components/TeacherHeader";
import { getTeacherCourses } from "../../apis/teacher";
import { getAccessToken, login } from "../../apis/auth";
import { useSelector } from "react-redux";

const TeacherCourses = () => {
  const getUserInformation = async () => {
    const res = await login("minhtuyenvp02@gmail.com", "123456");

    return res.user_id;
  };

  const fetchCourses = async () => {
    try {
      const accessToken = await getAccessToken();

      const userId = getUserInformation();

      const res = await getTeacherCourses(userId, accessToken);

      console.log(res);
      // const data = await res.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <TeacherLayout>
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
            <Button variant="contained">Tạo khóa học</Button>
          </Box>
        </Box>
      </Box>
    </TeacherLayout>
  );
};

export default TeacherCourses;

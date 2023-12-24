import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TeacherCourseHeader from "./TeacherCourseHeader";
import CourseIntendedLearners from "./CourseIntendedLearners";
import { getCourse } from "../../apis/courses";
import { getAccessToken } from "../../apis/auth";
import CourseLandingPage from "./CourseLandingPage";
import { COLOR } from "../../styles/color";

const TeacherCourse = () => {
  const [courseDetail, setCourseDetail] = useState({});
  const [pageActive, setPageActive] = useState("intended-learners");

  const courseId = window.location.pathname.split("/")[3];

  const fetchCourseData = async () => {
    try {
      const accessToken = await getAccessToken();

      const response = await getCourse(courseId, accessToken);
      setCourseDetail(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <Box width={"100%"}>
      <TeacherCourseHeader courseTitle={courseDetail.title || ""} />
      <Box display={"flex"}>
        <Box
          padding={2}
          borderBottom={pageActive === "intended-learners" ? 2 : 0}
          borderColor={COLOR.blue}
          onClick={() => setPageActive("intended-learners")}
        >
          Course Intended Learners
        </Box>
        <Box
          padding={2}
          borderBottom={pageActive === "landing-page" ? 2 : 0}
          borderColor={COLOR.blue}
          onClick={() => setPageActive("landing-page")}
        >
          Course Landing Page
        </Box>
      </Box>
      {pageActive === "intended-learners" && <CourseIntendedLearners />}
      {pageActive === "landing-page" && <CourseLandingPage />}
    </Box>
  );
};

export default TeacherCourse;

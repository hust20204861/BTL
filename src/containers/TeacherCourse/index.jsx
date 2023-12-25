import { Box } from "@mui/material";
import React, { useState } from "react";
import TeacherCourseHeader from "./TeacherCourseHeader";
import CourseIntendedLearners from "./CourseIntendedLearners";
import CourseLandingPage from "./CourseLandingPage";
import { COLOR } from "../../styles/color";
import CourseCurriculum from "./CourseCurriculum";

const TeacherCourse = () => {
  const [pageActive, setPageActive] = useState("intended-learners");

  return (
    <Box width={"100%"}>
      <TeacherCourseHeader />
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
        <Box
          padding={2}
          borderBottom={pageActive === "curriculum" ? 2 : 0}
          borderColor={COLOR.blue}
          onClick={() => setPageActive("curriculum")}
        >
          Course Curriculum
        </Box>
      </Box>
      {pageActive === "intended-learners" && <CourseIntendedLearners />}
      {pageActive === "landing-page" && <CourseLandingPage />}
      {pageActive === "curriculum" && <CourseCurriculum />}
    </Box>
  );
};

export default TeacherCourse;

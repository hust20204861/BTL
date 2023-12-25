import React, { useEffect, useRef, useState } from "react";
import { getAccessToken } from "../../apis/auth";
import {
  createSection,
  deleteSection,
  getSectionFromCourse,
} from "../../apis/section";
import { getLectureByCourseIdAndSectionId } from "../../apis/lecture";
import { Box, Button, TextField, Typography } from "@mui/material";
import CoursePartCard from "./CoursePartCard";
import CourseCurriculumSection from "./CourseCurriculumSection";
import SuccessMessage from "../../components/SuccessMessage";

const CourseCurriculum = () => {
  const courseId = window.location.pathname.split("/")[3];
  const [courseData, setCourseData] = useState([]);

  const fetchData = async () => {
    try {
      const accessToken = await getAccessToken();
      const response = await getSectionFromCourse(courseId, accessToken);
      console.log(response);
      let course = [];
      const getData = response.map(async (item) => {
        const res = await getLectureByCourseIdAndSectionId(
          courseId,
          item.id,
          accessToken
        );
        course.push({
          sectionId: item.id,
          sectionName: item.name,
          lecture: res.data,
        });
      });
      await Promise.all(getData);
      setCourseData(course.sort((a, b) => a.sectionId - b.sectionId));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteSection = async (sectionId) => {
    try {
      const accessToken = await getAccessToken();
      const resData = await deleteSection({
        sectionId,
        courseId,
        accessToken,
      });
      console.log(sectionId);
      console.log("courseData: ", courseData);
      const newCouseData = courseData.filter(
        (item) => item.sectionId !== sectionId
      );
      console.log("newCouseData: ", newCouseData);

      setCourseData(newCouseData);
      SuccessMessage("Success", "Delete section successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddSection = async () => {
    try {
      const accessToken = await getAccessToken();
      const resData = await createSection({
        courseId,
        sectionData: {
          name: "New Section",
        },
        accessToken,
      });
      const newCouseData = [...courseData];
      newCouseData.push({
        sectionId: resData.id,
        sectionName: resData.name,
        lecture: [],
      });
      setCourseData(newCouseData);
      SuccessMessage("Success", "Create section successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box width={"100%"} paddingX={4} paddingY={2}>
      {courseData.map((item, index) => (
        <CourseCurriculumSection
          key={index}
          sectionData={item}
          sectionIndex={index}
          handleDeleteSection={handleDeleteSection}
        />
      ))}
      <Box width={"100%"} textAlign={"right"}>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={handleAddSection}
        >
          Create new section
        </Button>
      </Box>
    </Box>
  );
};

export default CourseCurriculum;

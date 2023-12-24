import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoursePartCard from "./CoursePartCard";
import { getAccessToken } from "../../apis/auth";
import { getCourse, updateCourse } from "../../apis/courses";
import SuccessMessage from "../../components/SuccessMessage";

const CourseIntendedLearners = () => {
  const [course, setCourse] = useState({});

  const courseId = window.location.pathname.split("/")[3];

  const fetchCourseData = async () => {
    try {
      const accessToken = await getAccessToken();

      const response = await getCourse(courseId, accessToken);
      setCourse({
        ...response,
        learningObject: response.learningObject.split("."),
        requiredSkills: response.requiredSkills.split("."),
        courseFor: response.courseFor,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeLearningObject = (index, value) => {
    const newLearningObject = [...course.learningObject];
    newLearningObject[index] = value;
    setCourse({ ...course, learningObject: newLearningObject });
  };

  const handleChangeCourseRequirement = (index, value) => {
    const newCourseRequirement = [...course.requiredSkills];
    newCourseRequirement[index] = value;
    setCourse({ ...course, requiredSkills: newCourseRequirement });
  };

  const handleSave = async () => {
    try {
      const accessToken = await getAccessToken();
      await updateCourse(
        {
          ...course,
          learningObject: course.learningObject.join("."),
          requiredSkills: course.requiredSkills.join("."),
        },
        accessToken
      );
      SuccessMessage("Success", "Update course successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <Box width={"100%"} paddingX={4} paddingY={2}>
      <CoursePartCard>
        <Typography variant={"h5"} fontWeight={600}>
          Learning Objectives
        </Typography>
        <Divider />
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            What will students learn in your course?
          </Typography>
          <Typography variant={"body1"}>
            You must enter at least 4 learning objectives or outcomes that
            learners can expect to achieve after completing your course.
          </Typography>
          <TextField
            value={course.learningObject?.[0] || ""}
            placeholder="Example: Define the roles and responsibilities of a project manager"
            onChange={(e) => handleChangeLearningObject(0, e.target.value)}
            variant="outlined"
          />
          <TextField
            value={course.learningObject?.[1] || ""}
            placeholder="Example: Estimate project timelines and budgets"
            onChange={(e) => handleChangeLearningObject(1, e.target.value)}
            variant="outlined"
          />
          <TextField
            value={course.learningObject?.[2] || ""}
            placeholder="Example: Identify and manage project risks"
            onChange={(e) => handleChangeLearningObject(2, e.target.value)}
            variant="outlined"
          />
          <TextField
            value={course.learningObject?.[3] || ""}
            placeholder="Example: Complete a case study to manage a project from conception to completion"
            onChange={(e) => handleChangeLearningObject(3, e.target.value)}
            variant="outlined"
          />
        </Box>
      </CoursePartCard>
      <CoursePartCard>
        <Typography variant={"h5"} fontWeight={600}>
          Course Requiment
        </Typography>
        <Divider />
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            What are the requirements or prerequisites for taking your course?
          </Typography>
          <Typography variant={"body1"}>
            List the required skills, experience, tools or equipment learners
            should have prior to taking your course. If there are no
            requirements, use this space as an opportunity to lower the barrier
            for beginners.
          </Typography>
          <TextField
            value={course.requiredSkills?.[0] || ""}
            placeholder="Example: No programming experience needed "
            onChange={(e) => handleChangeCourseRequirement(0, e.target.value)}
            variant="outlined"
          />
          <TextField
            value={course.requiredSkills?.[1] || ""}
            placeholder="Example: Math basics "
            onChange={(e) => handleChangeCourseRequirement(0, e.target.value)}
            variant="outlined"
          />
          <TextField
            value={course.requiredSkills?.[2] || ""}
            placeholder="Example: A computer with internet connection "
            onChange={(e) => handleChangeCourseRequirement(0, e.target.value)}
            variant="outlined"
          />
        </Box>
      </CoursePartCard>

      <CoursePartCard>
        <Typography variant={"h5"} fontWeight={600}>
          Who is the target audience?
        </Typography>
        <Divider />
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            Who is this course for?
          </Typography>
          <Typography variant={"body1"}>
            Write a clear description of the intended learners for your course
            who will find your course content valuable. This will help you
            attract the right learners to your course.
          </Typography>
          <TextField
            value={course.courseFor || ""}
            placeholder="Example: No programming experience needed "
            onChange={(e) =>
              setCourse({ ...course, courseFor: e.target.value })
            }
            variant="outlined"
          />
        </Box>
      </CoursePartCard>

      <Box width={"100%"} textAlign={"right"}>
        <Button variant={"contained"} color={"primary"} onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default CourseIntendedLearners;

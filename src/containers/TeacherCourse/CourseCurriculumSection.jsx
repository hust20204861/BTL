import React, { useState } from "react";
import CoursePartCard from "./CoursePartCard";
import { Box, Button, TextField, Typography } from "@mui/material";
import { getAccessToken } from "../../apis/auth";
import { deleteSection, updateSection } from "../../apis/section";
import SuccessMessage from "../../components/SuccessMessage";
import {
  createLecture,
  deleteLecture,
  updateLecture,
} from "../../apis/lecture";

const CourseCurriculumSection = ({
  sectionData,
  sectionIndex,
  handleDeleteSection,
}) => {
  const courseId = window.location.pathname.split("/")[3];
  const [section, setSection] = useState(sectionData);

  const handleSaveSectionTitle = async () => {
    try {
      const accessToken = await getAccessToken();
      await updateSection({
        sectionId: section.sectionId,
        courseId,
        sectionData: {
          name: section.sectionName,
        },
        accessToken,
      });
      SuccessMessage("Success", "Update section successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveLectureChange = async (lectureData) => {
    try {
      const accessToken = await getAccessToken();
      await updateLecture({
        lectureData,
        accessToken,
      });
      SuccessMessage("Success", "Update Lecture successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddLecture = async () => {
    try {
      const accessToken = await getAccessToken();
      const lectureData = {
        name: "New Lecture",
        video_url: "",
        section_id: section.sectionId,
        course_id: courseId,
      };

      const res = await createLecture({
        lectureData,
        accessToken,
      });
      console.log("res: ", res)

      const newSection = { ...section };
      newSection.lecture.push({
        id: res.data.id,
        name: "New Lecture",
        video_url: "",
        section_id: section.sectionId,
        course_id: courseId,
      });
      newSection.lecture = newSection.lecture.sort((a, b) => a.id - b.id);
      setSection(newSection);
      SuccessMessage("Success", "Create new lecture successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLecture = async (lectureId) => {
    try {
      const accessToken = await getAccessToken();
      await deleteLecture({
        lectureId,
        accessToken,
      });
      const newSection = { ...section };
      newSection.lecture = newSection.lecture.filter(
        (lecture) => lecture.id !== lectureId
      );
      setSection(newSection);
      SuccessMessage("Success", "Delete lecture successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CoursePartCard>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Box display={"flex"} alignItems={"center"} width={"100%"}>
          <Box fontSize={16} fontWeight={600} width={100}>
            Section {sectionIndex + 1}:
          </Box>

          <TextField
            fullWidth
            value={section.sectionName}
            onChange={(e) =>
              setSection({ ...section, sectionName: e.target.value })
            }
          />
        </Box>

        <Box display={"flex"} gap={"4px"}>
          <Button variant={"outlined"} onClick={handleSaveSectionTitle}>
            Save
          </Button>
          <Button
            variant={"outlined"}
            onClick={() => handleDeleteSection(section.sectionId)}
          >
            Delete
          </Button>
        </Box>
      </Box>
      {section.lecture.map((lecture, idx) => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={"100%"}
          marginTop={2}
          border={1}
          padding={1}
          borderColor={"#E0E0E0"}
          bgcolor={"#F5F5F5"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              display={"flex"}
              width={"400px"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"2px"}
            >
              <Box fontSize={16} fontWeight={600} width={100}>
                {`Lecture ${idx + 1}:`}
              </Box>
              <TextField
                fullWidth
                value={lecture?.name || "New Lecture"}
                placeholder="Insert youtube video url ..."
                onChange={(e) => {
                  const newLecture = [...section.lecture];
                  newLecture[idx].name = e.target.value;
                  setSection({ ...section, lecture: newLecture });
                }}
                sx={{ marginTop: "16px" }}
              />
            </Box>
            <Box display={"flex"} gap={"2px"}>
              <Button
                variant={"outlined"}
                onClick={() =>
                  handleSaveLectureChange({
                    id: lecture.id,
                    name: lecture.name,
                    video_url: lecture.video_url,
                    section_id: section.sectionId,
                    course_id: courseId,
                  })
                }
              >
                Save
              </Button>
              <Button
                variant={"outlined"}
                onClick={() => handleDeleteLecture(lecture.id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
          <TextField
            fullWidth
            value={lecture.video_url}
            placeholder="Insert youtube video url ..."
            onChange={(e) => {
              const newLecture = [...section.lecture];
              newLecture[idx].video_url = e.target.value;
              setSection({ ...section, lecture: newLecture });
            }}
            sx={{ marginTop: "16px" }}
          />
        </Box>
      ))}
      <Box width={"100%"} textAlign={"right"} marginTop={2}>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={handleAddLecture}
        >
          Add New Lecture
        </Button>
      </Box>
    </CoursePartCard>
  );
};

export default CourseCurriculumSection;

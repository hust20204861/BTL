import React, { useEffect, useState } from "react";
import { getAccessToken } from "../../apis/auth";
import { getLectureByCourseId, getLecture } from "../../apis/lecture";
import { Box, Typography } from "@mui/material";
import YouTube from "react-youtube";
import { getSectionFromCourse } from "../../apis/section";
import { COLOR } from "../../styles/color";

const Course = () => {
  const lectureId = window.location.pathname.split("/")[3];
  const courseId = window.location.pathname.split("/")[2];
  const [lecture, setLecture] = useState({});
  const [videoId, setVideoId] = useState("");
  const [sectionList, setSectionList] = useState([]);
  const [allLectureList, setAllLectureList] = useState([]);
  const [sectionLectureList, setSectionLectureList] = useState([]);

  const opts = {
    height: "500",
    width: "100%",
  };

  const handleClickLecture = (lectureId) => {
    window.location.href = `/course/${courseId}/${lectureId}`;
  };

  const exactVideoIdFromUrl = (videoUrl) => {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    const videoId = urlParams.get("v");
    return videoId;
  };

  const fetchLectureData = async () => {
    try {
      const accessToken = await getAccessToken();

      const res = await getLecture(lectureId, accessToken);
      setLecture(res.data);
      const lectureVideoId = exactVideoIdFromUrl(res.data.video_url);
      setVideoId(lectureVideoId);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const fetchSectionList = async () => {
    try {
      const accessToken = await getAccessToken();

      const res = await getSectionFromCourse(courseId, accessToken);
      setSectionList(res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const fetchAllLectureData = async () => {
    try {
      const accessToken = await getAccessToken();

      const res = await getLectureByCourseId(courseId, accessToken);
      setAllLectureList(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchLectureData();
    fetchSectionList();
    fetchAllLectureData();
  }, []);

  useEffect(() => {
    const allSectionLectureList = sectionList.map((section) => {
      const sectionLecture = allLectureList.filter(
        (lecture) => lecture.section_id === section.id
      );
      return {
        ...section,
        sectionLecture,
      };
    });

    setSectionLectureList(allSectionLectureList);
  }, [allLectureList, sectionList]);

  return (
    <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Box width={"75%"} display={"flex"} flexDirection={"column"}>
        <YouTube opts={opts} videoId={videoId} style={{ width: "full" }} />

        <Box paddingY={3} paddingX={4} marginTop={2}>
          <Typography variant={"h5"} fontWeight={600}>
            {`Lecture: ${lecture.name}`}
          </Typography>
        </Box>
      </Box>
      <Box width={"24%"}>
        {sectionLectureList.map((section, idx) => (
          <Box key={section.id}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              bgcolor={COLOR.secondary[40]}
              color={COLOR.black[80]}
              padding={2}
              sx={{
                cursor: "pointer",
                "&:hover": { backgroundColor: COLOR.secondary[80] },
              }}
            >
              <Typography variant={"body1"} fontWeight={600}>
                {`${idx + 1}. ${section.name}`}
              </Typography>
            </Box>
            {section.sectionLecture.map((lecture, index) => (
              <Box
                key={lecture.id}
                paddingY={2}
                paddingX={3}
                bgcolor={COLOR.white}
                color={COLOR.black[80]}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: COLOR.secondary[80] },
                }}
                onClick={() => handleClickLecture(lecture.id)}
              >
                <Typography variant={"body2"} fontWeight={400}>
                  {`${index + 1}. ${lecture.name}`}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Course;

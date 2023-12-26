import React, { useEffect, useState } from "react";
import { getCourse, getCourses } from "../../apis/courses";
import { getAccessToken } from "../../apis/auth";
import { Box, Button, List, ListItem, Rating, Typography } from "@mui/material";
import { COLOR } from "../../styles/color";
import { Add, Check } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEnrolledCourses } from "../../apis/enroll";
import { getLectureByCourseId } from "../../apis/lecture";

const DummyData = {
  id: 1,
  learningObject:
    "Master Python. Go from junior/intermediate frontend developer to senior developer. Design and develop enterprise level design systems for high reusable and maintainable component library",
  requiredSkills: "Basic programing. Math skill. English skill",
  courseFor: "Python Beginer",
  title: "Python Botcamp",
  totalEnroll: 0,
  subtitle: "Top 1 Python course",
  courseDescription:
    "Welcome to Python Botcamp, an immersive and hands-on learning experience designed to empower you with the skills and knowledge needed to create intelligent and efficient bots using the Python programming language. In this comprehensive course, you will embark on a journey from the fundamentals of Python to advanced bot development techniques.",
  language: "from zero to hero",
  level: "English",
  category: "All level",
  primarilyTaught: "IT Course",
  courseImageUrl: "https://bom.so/2sHCna",
  promotionalVideoUrl: null,
  price: 50,
  welcomeMessage: "Wellcome",
  congratulationMessage: "Congratulation completed this course",
  status: "Already enroll",
  rating: 4.7,
  sale: 90,
};

const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = useState({});
  const [enrollCourse, setEnrollCourse] = useState([]);
  const courseId = window.location.pathname.split("/")[2];
  const navigate = useNavigate();

  const { userinfo } = useSelector((state) => state.info);

  const fetchEnrollCourse = async () => {
    try {
      const accessToken = await getAccessToken();

      const res = await getEnrolledCourses({
        userId: userinfo.id,
        accessToken,
      });
      setEnrollCourse(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const fetchCourseData = async () => {
    try {
      const accessToken = await getAccessToken();

      const res = await getCourse(courseId, accessToken);
      setCourseDetail(res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchCourseData();
    fetchEnrollCourse();
  }, []);

  return (
    <Box display={"flex"} width={"100%"}>
      <Box width={"60%"} display={"flex"} flexDirection={"column"}>
        <Box bgcolor={COLOR.black[80]} padding={3}>
          <Box>
            <Typography variant={"h4"} color={COLOR.white}>
              {courseDetail.title}
            </Typography>
            <Typography variant={"h6"} color={COLOR.white} marginTop={2}>
              {courseDetail.subtitle}
            </Typography>
            <Box display={"flex"} alignItems={"center"} marginTop={4}>
              <Typography
                variant={"body1"}
                color={COLOR.functionYellow.default}
                fontWeight={600}
                marginRight={1}
              >
                {courseDetail.rating}
              </Typography>
              <Rating
                name="half-rating"
                defaultValue={parseFloat(courseDetail.rating)}
                precision={0.5}
                readOnly
              />
            </Box>
          </Box>
        </Box>
        <Box
          padding={3}
          border={2}
          borderColor={COLOR.gray}
          marginTop={2}
          borderRadius={2}
        >
          <Typography variant={"h5"} color={COLOR.black[80]} fontWeight={600}>
            What you'll learn
          </Typography>
          <List>
            {courseDetail.learningObject?.split(".").map((item, index) => (
              <Box key={index} marginTop={1} display={"flex"}>
                <Check color={COLOR.primary} />
                <Typography variant={"body1"} color={COLOR.text} marginLeft={2}>
                  {item}
                </Typography>
              </Box>
            ))}
          </List>
        </Box>
        <Box padding={3} marginTop={2} borderRadius={2}>
          <Typography variant={"h5"} color={COLOR.black[80]} fontWeight={600}>
            Requirements
          </Typography>

          <List>
            {courseDetail.requiredSkills?.split(".").map((item, index) => (
              <Box key={index} marginTop={1} display={"flex"}>
                <Add color={COLOR.primary} />
                <Typography variant={"body1"} color={COLOR.text} marginLeft={2}>
                  {item}
                </Typography>
              </Box>
            ))}
          </List>
        </Box>
        <Box padding={3} marginTop={2} borderRadius={2}>
          <Typography variant={"h5"} color={COLOR.black[80]} fontWeight={600}>
            Description
          </Typography>
          <Typography variant={"body1"} color={COLOR.text} marginTop={1}>
            {courseDetail.courseDescription}
          </Typography>
        </Box>
      </Box>
      <Box width={"30%"} position={"relative"}>
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
          <Box
            component="img"
            sx={{
              height: 192,
              width: 300,
            }}
            alt="Course Image"
            src={courseDetail.courseImageUrl}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={"left"}
            width={"100%"}
          >
            <Box
              display={"flex"}
              //   justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
            >
              <Typography
                variant={"h4"}
                color={COLOR.black[80]}
                fontWeight={600}
              >
                ${(courseDetail.price * (100 - courseDetail.sale)) / 100}
              </Typography>

              <Typography
                variant={"h5"}
                color={COLOR.subText}
                fontWeight={600}
                marginLeft={1}
                style={{ textDecoration: "line-through" }}
              >
                ${courseDetail.price}
              </Typography>
            </Box>
            <Typography variant={"body1"} color={COLOR.text} marginTop={1}>
              {courseDetail.sale}% off
            </Typography>
          </Box>
          {enrollCourse.find((item) => item.id === courseDetail.id) ? (
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: "12px" }}
              onClick={async () => {
                const accessToken = await getAccessToken();
                const lecture = await getLectureByCourseId(
                  courseDetail.id,
                  accessToken
                );
                const lectureId = lecture.data.sort((a, b) => a.id - b.id)[0]
                  .id;
                console.log(lecture);
                navigate(`/course/${courseDetail.id}/${lectureId}`);
              }}
            >
              <Typography variant={"body1"} color={COLOR.white}>
                Watch now
              </Typography>
            </Button>
          ) : (
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: "12px" }}
              onClick={() => {
                if (!userinfo) navigate("/auth/login");
                else navigate(`/payment/${courseDetail.id}`);
              }}
            >
              <Typography variant={"body1"} color={COLOR.white}>
                Buy now
              </Typography>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetail;

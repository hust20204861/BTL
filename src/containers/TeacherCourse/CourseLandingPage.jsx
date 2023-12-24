import React, { useEffect, useState } from "react";
import { getAccessToken } from "../../apis/auth";
import { getCourse, updateCourse } from "../../apis/courses";
import {
  Box,
  Divider,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CoursePartCard from "./CoursePartCard";
import YouTube from "react-youtube";
import {
  CATEGORY_OPTIONS,
  LANGUAGE_OPTIONS,
  LEVEL_OPTIONS,
  PRICE_TIERS,
} from "../../constants";
import SuccessMessage from "../../components/SuccessMessage";

const CourseLandingPage = () => {
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

  const handleSave = async () => {
    try {
      const accessToken = await getAccessToken();
      await updateCourse(course, accessToken);
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
          Course Landing Page
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
            Course title
          </Typography>
          <Typography variant={"body1"}>
            Your title should be a mix of attention-grabbing, informative, and
            optimized for search
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            placeholder="e.g. The Complete JavaScript Course 2021: From Zero to Expert!"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            Course subtitle
          </Typography>
          <Typography variant={"body1"}>
            Use 1 or 2 related keywords, and mention 3-4 of the most important
            areas that you've covered during your course.
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={course.subtitle}
            onChange={(e) => setCourse({ ...course, subtitle: e.target.value })}
            placeholder="e.g. Master JavaScript with the most complete course on the market! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            Course Description
          </Typography>
          <Typography variant={"body1"}>
            Your course description should be detail and specific.
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={course.courseDescription}
            onChange={(e) =>
              setCourse({ ...course, courseDescription: e.target.value })
            }
            placeholder="e.g. Master JavaScript with the most complete course on the market! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            What is primarily taught in your course?
          </Typography>
          <Typography variant={"body1"}>
            Each individual topic chosen should comprehensively describe your
            course's content without being too broad. E.g. "The Complete Tennis
            Course" should have "Tennis" – not "Tennis Serve" (specific, but not
            comprehensive) and not "Sports" (comprehensive, but not specific).
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={course.primarilyTaught}
            onChange={(e) =>
              setCourse({ ...course, primarilyTaught: e.target.value })
            }
            placeholder="e.g. Tennis"
          />
        </Box>
      </CoursePartCard>

      <CoursePartCard>
        <Typography variant={"h5"} fontWeight={600}>
          Course Landing Page
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
            Course image
          </Typography>
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
            gap={"12px"}
          >
            <img
              src={course.courseImageUrl}
              alt="course image"
              width={560}
              height={315}
            />
            <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
              <Typography variant={"body1"}>
                Upload your course image here. It must meet our course image
                quality standards to be accepted. Important guidelines: 750x422
                pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={course.courseImageUrl}
                onChange={(e) =>
                  setCourse({ ...course, courseImageUrl: e.target.value })
                }
                placeholder="e.g. https://img-b.udemycdn.com/course/240x135/851712_fc61_5.jpg"
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            Promotional video
          </Typography>
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
            gap={"12px"}
          >
            <YouTube
              videoId="n8mNX2YqkUs"
              opts={{ width: "560px", height: "315px" }}
            />

            <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
              <Typography variant={"body1"}>
                Your promo video is a quick and compelling way for students to
                preview what they’ll learn in your course. Students considering
                your course are more likely to enroll if your promo video is
                well-made.
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={course.promotionalVideoUrl || ""}
                onChange={(e) =>
                  setCourse({ ...course, promotionalVideoUrl: e.target.value })
                }
                placeholder="e.g. https://www.youtube.com/watch?v=6E6KXrCVbns"
              />
            </Box>
          </Box>
        </Box>
      </CoursePartCard>

      <CoursePartCard>
        <Typography variant={"h5"} fontWeight={600}>
          Basic info
        </Typography>
        <Divider />
        <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={course.language || 0}
              label="Language"
              onChange={(e) => {
                setCourse({ ...course, language: e.target.value });
              }}
            >
              {LANGUAGE_OPTIONS.map((tier) => (
                <MenuItem key={tier.id} value={tier.value}>
                  {tier.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={course.level || 0}
              label="Level"
              onChange={(e) => {
                setCourse({ ...course, level: e.target.value });
              }}
            >
              {LEVEL_OPTIONS.map((tier) => (
                <MenuItem key={tier.id} value={tier.value}>
                  {tier.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={course.category || 0}
              label="Category"
              onChange={(e) => {
                setCourse({ ...course, category: e.target.value });
              }}
            >
              {CATEGORY_OPTIONS.map((tier) => (
                <MenuItem key={tier.id} value={tier.value}>
                  {tier.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </CoursePartCard>

      <CoursePartCard>
        <Typography variant={"h5"} fontWeight={600}>
          Course Message
        </Typography>
        <Divider />
        <Typography variant={"body1"}>
          Write messages to your students (optional) that will be sent
          automatically when they join or complete your course to encourage
          students to engage with course content. If you do not wish to send a
          welcome or congratulations message, leave the text box blank.
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            Welcome Message
          </Typography>

          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Welcome message ..."
            value={course.welcomeMessage}
            onChange={(e) =>
              setCourse({ ...course, welcomeMessage: e.target.value })
            }
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          marginTop={2}
          gap={"12px"}
        >
          <Typography variant={"h6"} fontWeight={600}>
            Congratulations Message
          </Typography>

          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Congratulation message ..."
            value={course.congratulationMessage}
            onChange={(e) =>
              setCourse({ ...course, congratulationMessage: e.target.value })
            }
          />
        </Box>
      </CoursePartCard>

      <CoursePartCard>
        <Typography variant={"h5"} fontWeight={600}>
          Price
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
            Set a price for your course
          </Typography>
          <Typography variant={"body1"}>
            Please select the currency and the price tier for your course. If
            you’d like to offer your course for free, it must have a total video
            length of less than 2 hours. Also, courses with practice tests can
            not be free.
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={course.price || 0}
              label="Price"
              onChange={(e) => {
                setCourse({ ...course, price: e.target.value });
              }}
            >
              {PRICE_TIERS.map((tier) => (
                <MenuItem key={tier.id} value={tier.price}>
                  {tier.name} - {tier.price}$
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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

export default CourseLandingPage;

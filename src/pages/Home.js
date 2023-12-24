import React, { Fragment, useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, List, ListItem, Rating, Typography } from "@mui/material";
import { COLOR } from "../styles/color";

import MetaData from "../components/layout/MetaData";
import Course from "./course/Course";
import Loader from "../components/layout/Loader";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { getCourses } from "../apis/courses";
import { Button } from "react-bootstrap";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const createSliderWithTooltip = () => {
    return Slider.createSliderWithTooltip;
  };
  const Range = createSliderWithTooltip(Slider.Range);

  const alert = useAlert();
  const { keyword } = useParams();

  const fetchApiGetCourse = async () => {
    try {
      setIsLoading(true);
      const res = await getCourses();
      console.log("response", res);
      setCourses(res);
      setIsLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchApiGetCourse();
  }, []);

  return (
    <Fragment>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/new/slides/032.jpg"
            className="d-block w-100 "
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/new/slides/004.jpg"
            className="d-block w-100 "
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://mdbootstrap.com/img/new/slides/025.jpg"
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img
            src="https://mdbootstrap.com/img/new/slides/026.jpg"
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={5}>
          <img
            src="https://mdbootstrap.com/img/new/slides/029.jpg"
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={6}>
          <img
            src="https://mdbootstrap.com/img/new/slides/040.jpg"
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarousel>

      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Home"} />
          <div>
            <hr />
            <Box textAlign={"left"} ><h2>Học không giới hạn</h2></Box>
            <Typography>Bắt đầu, phát triển hoặc thăng tiến sự nghiệp của bạn với hơn 5.800 khóa học, Chứng chỉ và bằng cấp chuyên môn từ các trường đại học và công ty nổi tiếng quốc tế.</Typography>
            <Typography>Còn chờ gì nữa, hãy bắt đầu ngay thôi!!!</Typography>
            <Link to='/auth/register'>
              <Button>
                Đăng kí miễn phí
              </Button>
            </Link>
          </div>
          <hr />
          <Typography variant={"h4"}>Các khóa học đang hot hiện nay</Typography>

          <Box   
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            >
            {(
              <Box width="25%"
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              borderRadius={2}
              padding={2}
              marginBottom={2}>
                <Box  width="25%">
                  {courses?.map((course) => (
                    <Course key={course.id} course={course} />
                  ))}
                </Box>
              </Box>
            ) &&
            
              courses.map((course) => (
                <Course key={course.id} course={course} />
              ))}
              
          </Box>

          {/* {resPerPage <= coursesCount && (
  <div className="pagination-container">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={coursesCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
)} */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

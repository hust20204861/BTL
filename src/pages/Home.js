import React, { Fragment, useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

import MetaData from "../components/layout/MetaData";
import Course from "./course/Course";
import Loader from "../components/layout/Loader";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { getCourses } from "../apis/courses";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  console.log("dfgfd", courses)
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

          <hr />
          <p><h3>Các khóa học đang hot hiện nay</h3></p>

          <div>
            {(
              <Fragment>
                <div className="course">
                  {courses?.map((course) => (
                    <Course key={course.id} course={course} col={4} />
                  ))}
                </div>
              </Fragment>
            ) &&
              courses.map((course) => (
                <Course key={course.id} course={course} />
              ))}
          </div>

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

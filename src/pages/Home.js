import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

import MetaData from "../components/layout/MetaData";
import { getCourses } from "../actions/courseActions";
import Course from "./course/Course";
import Loader from "../components/layout/Loader";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const createSliderWithTooltip = () => {
    return Slider.createSliderWithTooltip;
  };
  const Range = createSliderWithTooltip(Slider.Range);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { loading, courses, error } = useSelector(state => state.courses) 

useEffect(() => {
dispatch(getCourses())
  if(error) {
    return alert.error(error)
  }
},[dispatch])

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
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Home"} />
          <h3>Học viên đang xem</h3>
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

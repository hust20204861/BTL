import React, { Fragment, useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom';

import MetaData from '../components/layout/MetaData'
import { getCourses } from '../actions/courseActions'
import Course from './course/Course'
import Loader from '../components/layout/Loader'



const Home = () => {

  const [ currentPage, setCurrentPage ] = useState(1);
  const [price, setPrice] = useState([1, 1000])
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)
  const categories = [
    'English',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    "Books",
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home'
]
const createSliderWithTooltip = () => {
  return Slider.createSliderWithTooltip;
};
const Range = createSliderWithTooltip(Slider.Range)

  const alert = useAlert();
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { loading, courses, error, coursesCount, resPerPage } = useSelector(state => state.courses) 

console.log("dfgds", typeof courses)
useEffect(() => {
  if(error) {
    return alert.error(error)
  }
  dispatch(getCourses(keyword, currentPage, category));

}, [dispatch, alert,  error, keyword, currentPage, category]);

function setCurrentPageNo(pageNumber) {
  setCurrentPage(pageNumber)
}


  return (
    <Fragment>
      {loading ? <Loader/> : (
        <Fragment>
        <MetaData title={'Home'} />
<h1>Courses</h1>
 <div>
  {  <Fragment>
                                   {/* <div className="home">
                                        <div className="range">
                                            <Range
                                                marks={{
                                                    1: `$1`,
                                                    1000: `$1000`
                                                }}
                                                min={1}
                                                max={1000}
                                                defaultValue={[1, 1000]}
                                                tipFormatter={value => `$${value}`}
                                                tipProps={{
                                                    placement: "top",
                                                    visible: true
                                                }}
                                                value={price}
                                                onChange={price => setPrice(price)}
                                            />                                       

                                            <div className="categories">
                                                <h4 >
                                                    Categories
                                                </h4>

                                                <ul className="category">
                                                    {categories.map(category => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none'
                                                            }}
                                                            key={category}
                                                            onClick={() => setCategory(category)}
                                                        >
                                                            {category}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
        
                                

                                            <div className="ratings">
                                                <h4>
                                                    Ratings
                                                </h4>

                                                <ul className="pl-0">
                                                    {[5, 4, 3, 2, 1].map(star => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none'
                                                            }}
                                                            key={star}
                                                            onClick={() => setRating(star)}
                                                        >
                                                            <div className="rating-outer">
                                                                <div className="rating-inner"
                                                                    style={{
                                                                        width: `${star * 20}%`
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div> */}

                                 
                                        <div className="coursee">
                                            {courses?.map(course => (
                                                <Course key={course._id} course={course} col={4} />
                                            ))}
                                        </div>                         
                                </Fragment> && courses.map( course => (
       <Course key = {course.id} course={course} />
  ) )} 
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
   
  )
}

export default Home

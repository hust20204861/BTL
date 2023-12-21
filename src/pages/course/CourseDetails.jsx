import React from "react";
import CourseDetail from "../../containers/CourseDetail";
// import Loader from "../../components/layout/Loader";
// import MetaData from "../../components/layout/MetaData";
// import {
//   getCourseDetails,
//   clearErrors,
//   getCourseFeedbacks,
// } from "../../actions/courseActions";
// import { addItemToCart } from "../../actions/cartActions";
// import { enrollCourses } from "../../actions/courseActions";
// import {
//   MDBTypography,
//   MDBBtn,
//   MDBIcon,
//   MDBTextArea,
//   MDBNavbar,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBAccordion,
//   MDBAccordionItem,
// } from "mdb-react-ui-kit";
// import { MDBLink } from "mdbreact";
// import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";

// const CourseDetails = () => {
//   const [quantity, setQuantity] = useState(1);
//   const { token, userId } = useSelector((state) => state.auth);
//   // const { enrolled } = useSelector(state => state.enrollCourses)
//   const dispatch = useDispatch();
//   const alert = useAlert();
//   const { id } = useParams();
//   const { error, loading, course } = useSelector(
//     (state) => state.courseDetails
//   );
//   const { feedbacks } = useSelector((state) => state.courseFeedbacks);

//   useEffect(() => {
//     dispatch(getCourseDetails(id, token));
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, id, token]);

//   const addToCart = () => {
//     dispatch(addItemToCart(id, quantity));
//     alert.success("Item Added to Cart");
//   };

//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [showFeedbacks, setShowFeedbacks] = useState(false);

//   const handleEnrollClick = () => {
//     setShowConfirmation(true);
//   };
//   const handleConfirm = () => {
//     dispatch(enrollCourses(id, userId, token));
//     setShowConfirmation(false);
//   };
//   const handleCancel = () => {
//     setShowConfirmation(false);
//   };

//   //show and hide feedbacks
//   const handleFeedbacksClick = () => {
//     dispatch(getCourseFeedbacks(id, token));
//     setShowFeedbacks(true);
//   };
//   const handleCancelFeedbacks = () => {
//     setShowFeedbacks(false);
//   };

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title={course.learningObject} />
//           <MDBContainer className=" p-4">
//             <MDBNavbar
//               dark
//               bgColor="dark"
//               className="d-flex "
//               style={{ width: "100%", marginLeft: "0" }}
//             >
//               <MDBContainer className="px-4 white">
//                 <h3 style={{ color: "white" }}>{course.learningObject}</h3>
//               </MDBContainer>
//               <MDBContainer className="px-4">
//                 <p id="course_id" style={{ color: "white" }}>
//                   Course # {course.id}
//                 </p>
//               </MDBContainer>
//               <MDBContainer className="px-4">
//                 <p style={{ color: "white" }}>{course.courseDescription}</p>
//               </MDBContainer>
//               <MDBContainer className="px-4">
//                 <div
//                   className="star"
//                   style={{ width: `${(course.rating / 5) * 100}%` }}
//                 ></div>
//               </MDBContainer>
//             </MDBNavbar>
//             <br />
//             <MDBRow className="gx-5 ">
//               <MDBCol md="7">
//                 <MDBTypography className="square border rounded-8 px-4">
//                   <br />
//                   <MDBTypography tag="strong">Nội dung bài học:</MDBTypography>
//                   <p>{course.courseDescription}</p>
//                 </MDBTypography>
//                 <MDBTypography className="square border rounded-8 px-4">
//                   <br />
//                   <MDBTypography tag="strong">
//                     Các công ty hàng đầu cung cấp khóa học cho nhân viên:
//                   </MDBTypography>

//                   <p>{course.courseDescription}</p>
//                 </MDBTypography>
//                 <br />
//                 <h3 className="px-4">NỘI DUNG KHÓA HỌC</h3>
//                 <br />
//                 <MDBAccordion
//                   borderless
//                   initialActive={1}
//                   className="square border rounded-8"
//                 >
//                   <MDBAccordionItem collapseId={1} headerTitle="Chương 1">
//                     <p>intro</p>
//                     <p>saleforce</p>
//                     <p>intro</p>
//                     <p>intro</p>
//                   </MDBAccordionItem>
//                   <MDBAccordionItem collapseId={2} headerTitle="Chương 2">
//                     Anim pariatur cliche reprehenderit, enim eiusmod high life
//                     accusamus terry richardson ad squid. 3 wolf moon officia
//                     aute, non cupidatat skateboard dolor brunch. Food truck
//                     quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//                     sunt aliqua put a bird on it squid single-origin coffee
//                     nulla assumenda shoreditch et. Nihil anim keffiyeh
//                     helvetica, craft beer labore wes anderson cred nesciunt
//                     sapiente ea proident. Ad vegan excepteur butcher vice lomo.
//                     Leggings occaecat craft beer farm-to-table, raw denim
//                     aesthetic synth nesciunt you probably haven't heard of them
//                     accusamus labore sustainable VHS.
//                   </MDBAccordionItem>
//                   <MDBAccordionItem collapseId={3} headerTitle="Chương 3">
//                     Anim pariatur cliche reprehenderit, enim eiusmod high life
//                     accusamus terry richardson ad squid. 3 wolf moon officia
//                     aute, non cupidatat skateboard dolor brunch. Food truck
//                     quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//                     sunt aliqua put a bird on it squid single-origin coffee
//                     nulla assumenda shoreditch et. Nihil anim keffiyeh
//                     helvetica, craft beer labore wes anderson cred nesciunt
//                     sapiente ea proident. Ad vegan excepteur butcher vice lomo.
//                     Leggings occaecat craft beer farm-to-table, raw denim
//                     aesthetic synth nesciunt you probably haven't heard of them
//                     accusamus labore sustainable VHS.
//                   </MDBAccordionItem>
//                 </MDBAccordion>
//                 <br />
//                 <h3 className="px-4">Mô tả</h3>
//                 <br />
//                 <p className="px-4">{course.courseDescription}</p>

//                 {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
//                 <MDBBtn disabled={course.sale === 0} onClick={addToCart}>
//                   Add to Cart
//                 </MDBBtn>
//                 <MDBBtn onClick={handleEnrollClick}>Enroll</MDBBtn>
//               </div>
//               <hr /> */}
//                 <Link onClick={handleFeedbacksClick}>View feedbacks</Link>
//                 {showFeedbacks && feedbacks ? (
//                   <div>
//                     {feedbacks.data.map((feedback) => (
//                       <div key={feedback.id}>
//                         <p>
//                           Star: {feedback.rating}sao ------ Đánh giá:{" "}
//                           {feedback.feed_back}{" "}
//                         </p>
//                       </div>
//                     ))}
//                     <MDBBtn onClick={handleCancelFeedbacks}>Cancel</MDBBtn>
//                   </div>
//                 ) : (
//                   <div>Xem đánh giá của bạn ở đây!</div>
//                 )}

//                 {showConfirmation && (
//                   <div className="d-grid gap-2 d-md-flex justify-content-md-start">
//                     <p>Are you sure you want to enroll?</p>
//                     <MDBBtn onClick={handleConfirm}>OK</MDBBtn>
//                     <MDBBtn onClick={handleCancel}>Cancel</MDBBtn>
//                   </div>
//                 )}
//               </MDBCol>
//               <MDBCol md="5" className="mt-0 ">
//                 <form className=" border px-3 shadow-4 mt-0">
//                   <h3 className="mt-4"> {course.price}</h3>
//                   <div className="d-grid gap-2 d-md-flex justify-content-md-start">
//                     <MDBBtn
//                       disabled={course.sale === 0}
//                       onClick={addToCart}
//                       style={{ backgroundColor: "#9C27B0", width: "500px" }}
//                     >
//                       <MDBTypography tag="strong">Add to Cart</MDBTypography>
//                     </MDBBtn>

//                     <MDBBtn
//                       className="border center"
//                       style={{ color: "#9C27B0", backgroundColor: "white" }}
//                     >
//                       <MDBIcon far size="2x" icon="heart" />
//                     </MDBBtn>
//                   </div>
//                   <MDBBtn
//                     className="border"
//                     style={{
//                       backgroundColor: "white",
//                       color: "black",
//                       width: "100%",
//                       fontWeight: "18px",
//                       marginTop: "12px",
//                     }}
//                   >
//                     <MDBTypography tag="strong"> Mua ngay</MDBTypography>
//                   </MDBBtn>
//                   <p
//                     style={{
//                       fontSize: "12px",
//                       textAlign: "center",
//                       marginTop: "6px",
//                     }}
//                   >
//                     Đảm bảo hoàn tiền trong 30 ngày
//                   </p>
//                   <MDBTypography tag="strong">Khóa học bao gồm:</MDBTypography>
//                   <div className="d-grid gap-4 d-md-flex justify-content-md-center px-4">
//                     <MDBTypography tag="u" className=" stretched-link">
//                       Chia sẻ
//                     </MDBTypography>
//                     <MDBTypography tag="u" className=" stretched-link">
//                       Tặng khóa học này
//                     </MDBTypography>
//                   </div>
//                   <MDBTypography
//                     tag="u"
//                     className="d-md-flex justify-content-md-center stretched-link mb-4"
//                   >
//                     Áp dụng coupon
//                   </MDBTypography>
//                 </form>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };
const CourseDetailScreen = () => {
  return <CourseDetail />;
};

export default CourseDetailScreen;

// export default CourseDetails;

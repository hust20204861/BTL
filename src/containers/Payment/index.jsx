import React, { useState, useEffect } from "react";
import { enrollCourses } from "../../actions/courseActions";
import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { COLOR } from "../../styles/color";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { getCourseFeedbacks } from "../../actions/courseActions";
import { getAccessToken, getMe, getUserId } from "../../apis/auth";
import { getCourse } from "../../apis/courses";
import { buyCourse } from "../../apis/enroll";
import SuccessMessage from "../../components/SuccessMessage";

const Payment = () => {

  const navigate = useNavigate();

  // ông làm lại hàm lấy courseDetail với id cho tôi với
  const [courseDetail, setCourseDetail] = useState({});
  const courseId = window.location.pathname.split("/")[2];

  const fetchCourseData = async () => {
    try {
      const accessToken = await getAccessToken();

      const res = await getCourse(courseId, accessToken);
      setCourseDetail(res);
      console.log("res: ", res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  const dispatch = useDispatch();
  const { userId, token } = useSelector((state) => state.auth);
  console.log("userId: ", userId);

  const handlePayment = async () => {
    try {
      const accessToken = await getAccessToken();
      const userId = await getUserId();
      const res = await buyCourse({
        userId,
        courseId,
        accessToken,
      });

      SuccessMessage("Success", "Mua khóa học thành công");
      navigate("/home");
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const { feedbacks } = useSelector((state) => state.courseFeedbacks);
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const handleFeedbacksClick = async () => {
    const accessToken = await getAccessToken();
    dispatch(getCourseFeedbacks(courseId, accessToken));
    setShowFeedbacks(true);
  };
  const handleCancelFeedbacks = () => {
    setShowFeedbacks(false);
  };
  return (
    <div>
      <MetaData title={"Payment"} />
      <Typography
        variant="h3"
        marginTop={20}
        marginLeft={"500px"}
        fontWeight={"bold"}
        color={COLOR.white}
      >
        Mở khóa học
      </Typography>

      <div
        style={{
          backgroundImage:
            'url("https://img.lovepik.com/background/20211020/medium/lovepik-colorful-black-blue-background-image_400065267.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "2154px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-555px",
          marginTop: "-240px",
        }}
      >
        <Box display={"flex"}>
          <Box marginTop={10} marginLeft={-10}>
            <Typography color={COLOR.white}>
              Sở hữu khóa học{" "}
              <Typography fontWeight="bold" display="inline" color={COLOR.blue}>
                đầy đủ và chi tiết nhất{" "}
              </Typography>{" "}
              bạn có thể tìm thấy trên internet
            </Typography>
            {/* {courseDetail.name}  */}

            <Typography color={COLOR.white}>
              Có tới{" "}
              <Typography
                display="inline"
                fontWeight={"bold"}
                color={COLOR.blue}
              >
                hàng trăm bài giảng{" "}
              </Typography>
              trong mỗi khóa học giúp bạn nắm vững kiến thức nền tảng
            </Typography>

            <Box bgcolor={"#202425"} padding={3} borderRadius={3}>
              <Typography variant="h5" color={COLOR.white}>
                Giá bán:{" "}
              </Typography>
              <Typography
                style={{ textDecoration: "line-through" }}
                color={COLOR.red}
              >
                ${courseDetail.price}
              </Typography>
              <Typography fontWeight="bold" color={COLOR.lightGreen}>
                {" "}
                ${(courseDetail.price * (100 - courseDetail.sale)) / 100}
              </Typography>
              <hr
                style={{
                  borderColor: "white",
                  fontWeight: "bold",
                  borderWidth: "2px",
                }}
              />
              <Typography variant="h5" color={COLOR.white}>
                Tổng tiền:
              </Typography>
              <Typography fontWeight="bold" variant="h4" color={COLOR.blue}>
                ${(courseDetail.price * (100 - courseDetail.sale)) / 100}
              </Typography>
            </Box>

            <Button
              onClick={handlePayment}
              style={{
                background: "#6a4ed2",
                width: "650px",
                color: "white",
                marginTop: "5px",
                borderRadius: 3,
              }}
            >
              Mua khóa học
            </Button>
          </Box>

          <Box
            marginTop={10}
            marginLeft={5}
            bgcolor={"#202425"}
            borderColor={COLOR.blue}
            border={5}
            paddingLeft={5}
            paddingRight={5}
          >
            <Typography
              fontWeight={"bold"}
              variant="h5"
              color={COLOR.blue}
              marginBottom={2}
              marginTop={2}
            >
              Bạn sẽ nhận được gì?
            </Typography>
            <Typography color={COLOR.blue} marginBottom={1}>
              Truy cập toàn bộ khóa học name
            </Typography>
            <Typography color={COLOR.blue} marginBottom={1}>
              Hơn 1000 lecture bài giảng
            </Typography>
            <Typography color={COLOR.blue} marginBottom={1}>
              Kênh hỏi đáp riêng tư
            </Typography>
            <Typography color={COLOR.blue} marginBottom={1}>
              Đáp án cho mọi thử thách
            </Typography>
            <Typography color={COLOR.blue} marginBottom={1}>
              Nhận chứng chỉ khi hoàn thành
            </Typography>
            <Typography color={COLOR.blue} marginBottom={1}>
              Cập nhật khóa học cho tương lai
            </Typography>
            <Typography color={COLOR.blue} marginBottom={1}>
              Mua một lần, học mãi mãi
            </Typography>
          </Box>
        </Box>
        <Box marginTop={"750px"} marginLeft={-100}>
          <Typography variant="h3">Bạn sẽ học được những gì?</Typography>
          <Typography>
            Bạn sẽ có những trải nghiệm tốt nhất với những giáo viên hàng đầu
            được tuyển{" "}
          </Typography>
          <Typography>
            chọn kĩ càng, cùng với lượng kiến thức chuyên môn khổng lồ, bạn sẽ
            tự tin hơn
          </Typography>
          <Typography>
            khi gặp các vấn đề trong công việc và có thể giải quyết dễ dàng!
          </Typography>
          <Typography>Hãy nhanh tay đăng kí!!!</Typography>

          <Box>
            <Link color={COLOR.white} onClick={handleFeedbacksClick}>
              Một số đánh giá từ học viên
            </Link>
            {showFeedbacks && feedbacks ? (
              <div>
                {feedbacks.data.map((feedback) => (
                  <div key={feedback.id}>
                    <Typography>Star: {feedback.rating}sao.</Typography>
                    <Typography display="inline">
                      Đánh giá: {feedback.feed_back}
                    </Typography>
                  </div>
                ))}
                <Link onClick={handleCancelFeedbacks}>Cancel</Link>
              </div>
            ) : (
              <Link color={COLOR.white}>(nhấn để xem)</Link>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Payment;

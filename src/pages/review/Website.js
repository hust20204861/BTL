import { Button } from "react-bootstrap"
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from "@mui/material";
import MetaData from '../../components/layout/MetaData';
import { COLOR } from "../../styles/color";
const Website = () => {
  return (
<Fragment>
<MetaData title={"Website"} />
    <Box>
     <Typography variant={"h2"}>Bắt đầu sự nghiệp mới của bạn với Chứng chỉ Chuyên nghiệp trên Aviato</Typography>
     <Typography variant='h5'>Chứng chỉ Chuyên nghiệp cung cấp chương trình đào tạo trực tuyến linh hoạt được thiết kế để chuẩn bị cho bạn làm việc trong các lĩnh vực có tốc độ tăng trưởng cao.</Typography>
     <Typography variant='h5'>Với đội ngũ giáo viên được tuyển chọn và được đánh giá qua các khóa học đã giảng dạy, đảm bảo mang lại cho bạn 1 trải nghiệm không thể quên</Typography>
     <Typography variant='h5'>Với tỷ lệ tìm được việc làm sau khi tham gia khóa học của chúng tôi lên đến 90%, chúng tôi tự tin rằng là 1 trong những trang web đào tạo về công nghệ thông tin hàng đầu Việt Nam cho đến thời điểm này</Typography>
     <Typography variant='h5'>Hãy đến với chúng tôi! Trao niềm tin, nhận tài lộc!</Typography>
     <Box>
        <img src="https://watermark.lovepik.com/photo/20211209/large/lovepik-image-display-of-english-foreign-teachers-picture_501713039.jpg" />
     </Box>
    <Link to='/home'>
        <Button>
        <Typography variant={"body1"}>
             Khám phá ngay {">>>"}
        </Typography>
        </Button>
    </Link>
     <Box>Một số hình ảnh tiêu biểu khi nhận chứng nhận sau khóa học</Box>

    </Box>
 </Fragment>
  )
}

export default Website
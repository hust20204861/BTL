import { Box, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "../../styles/color";

const TeacherHeader = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <Box
      display={"flex"}
      justifyContent={"end"}
      width={"100%"}
      position={"relative"}
      bgcolor={COLOR.background}
    >
      <Box
        padding={2}
        onClick={() => (window.location.href = "/")}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <Typography
          color={COLOR.text}
          fontSize={16}
          fontWeight={500}
          sx={{
            "&:hover": {
              color: COLOR.lightBlue,
              cursor: "pointer",
            },
          }}
        >
          Học viên
        </Typography>
      </Box>
      {isHover && (
        <Box
          position={"absolute"}
          top={50}
          right={20}
          border={2}
          borderColor={COLOR.gray}
          borderRadius={2}
          padding={2}
          bgcolor={COLOR.white}
          color={COLOR.text}
          width={200}
          zIndex={2000}
        >
          <Typography>Chuyển sang chế độ xem của học viên tại đây.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TeacherHeader;

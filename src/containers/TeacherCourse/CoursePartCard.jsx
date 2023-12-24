import { Box } from "@mui/material";
import React from "react";
import { COLOR } from "../../styles/color";

const CoursePartCard = ({ children }) => {
  return (
    <Box
      width={"100%"}
      border={1}
      borderColor={COLOR.charcoal}
      borderRadius={4}
      paddingX={4}
      paddingY={2}
      boxShadow={2}
      marginY={3}
    >
      {children}
    </Box>
  );
};

export default CoursePartCard;

import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar";

const TeacherLayout = ({ children }) => {
  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flexDirection={"row"}>
      <Box width={"15%"} height={"100%"}>
        <Sidebar />
      </Box>
      <Box width={"85%"} height={"100%"}>
        {children}
      </Box>
    </Box>
  );
};

export default TeacherLayout;

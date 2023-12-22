import { Box } from "@mui/material";
import React from "react";
import { COLOR } from "../../styles/color";
import SideBarData from "./SidebarData";

const Sidebar = () => {
  return (
    <Box width={"full"} bgcolor={COLOR.black.default}>
      {SideBarData.map((data) => {
        return (
          <Box
            key={data.id}
            display={"flex"}
            alignItems={"center"}
            padding={2}
            // marginTop={2}
            color={COLOR.white}
            sx={{
              "&:hover": {
                backgroundColor: COLOR.light,
                cursor: "pointer",
              },
            }}
          >
            <Box>{data.icon}</Box>
            <Box marginLeft={2}>{data.name}</Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Sidebar;

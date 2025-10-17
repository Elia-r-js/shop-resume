import { Box } from "@mui/material";
import React from "react";
// import TopNavbar from "./Header/topnavbar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <Box>
      <Header/>
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

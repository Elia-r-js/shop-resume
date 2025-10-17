import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Searchbar from "./searchbar";
import Buttonpages from "./Buttonpages";
import UserSetting from "./usersetting";

export default function TopNavbar() {



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
    <Stack sx={{ ml: 5 }} direction="row" gap={2} alignItems={"center"}>
                <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: " flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            3MAK.
          </Typography>
      <Buttonpages/>
      <Searchbar/>
      <UserSetting/>
    </Stack>
    

      </Container>
    </AppBar>
  );
}

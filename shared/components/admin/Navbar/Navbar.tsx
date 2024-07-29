import React, { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { AccountCircle, Mail as MailIcon } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, ListItem } from "@mui/material";
import Modal from "../../admin/Modal/Modal";


// Custom theme with Tailwind colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#38394E", // darkBlue2
    },
    secondary: {
      main: "#EC5CF8", // lightPink
    },
    error: {
      main: "#EB5757", // lightRed
    },
  },
  shape: {
    borderRadius: 9, // Overall border radius for buttons and app bar
  },
});

const iconColor = "#C7C7C7"; // grayText

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <ListItem>
      <ThemeProvider theme={theme}>
        <AppBar
          className=" "
          position="fixed"
          color="primary"
          sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Image
                  src="/images/svg/Logo.svg"
                  alt="logo"
                  width={90}
                  height={40}
                />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}></Button>
              </Box>

              <MenuItem>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 50 }}
                  onClick={openDrawer} // Drawer-ı açan funksiyanı buraya əlavə edin
                >
                  ADD PRODUCT
                </Button>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  sx={{ ml: 2, borderRadius: 50, color: iconColor }}
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon sx={{ color: iconColor }} />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  sx={{ ml: 2, borderRadius: 50, color: iconColor }}
                >
                  <AccountCircle sx={{ color: iconColor }} />
                </IconButton>
                <Typography variant="body1" color="inherit">
                  Admin
                </Typography>
              </MenuItem>
            </Toolbar>
          </Container>
        </AppBar>
        <Modal open={isDrawerOpen} handleClose={closeDrawer} /> 
      </ThemeProvider>
    </ListItem>
  );
}

export default Navbar;


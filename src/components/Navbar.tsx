import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, Grid } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import SendIcon from "@mui/icons-material/Send";

type MenuItem = {
  location: string;
  icon: any;
};

const Navbar: React.FC = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [showNavbar, setShowNavbar] = useState(false);
  const menu: MenuItem[] = [
    {
      location: "Home",
      icon: <HomeIcon />,
    },
    {
      location: "About",
      icon: <PersonIcon />,
    },
    {
      location: "Skills",
      icon: <AssignmentIcon />,
    },
    {
      location: "Portfolio",
      icon: <BusinessCenterIcon />,
    },
    {
      location: "Qualification",
      icon: <SchoolIcon />,
    },
    {
      location: "Contact Me",
      icon: <SendIcon />,
    },
  ];
  useEffect(() => {
    if (desktop) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [desktop]);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "2.5rem",
          background: "#ffff",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "hsl(250, 60%, 99%)",
          boxShadow: "0 -1px 4px rgba(0,0,0,.15)",
          borderRadius: "1rem 1rem 0 0",
          zIndex: "2",
          [theme.breakpoints.up("lg")]: {
            top: "0",
            height: "5rem",
            padding: "2rem",
            borderRadius: "0",
          },
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            marginLeft: "1em",
            "&:hover": {
              color: "gray",
            },
          }}
        >
          Pontus
        </Typography>
        {!desktop && (
          <Box
            sx={{
              "&:hover": {
                color: "gray",
              },
            }}
          >
            {!showNavbar ? (
              <GridViewIcon
                onClick={toggleNavbar}
                sx={{
                  margin: "0.5em",
                  position: "relative",
                  zIndex: "2",
                  cursor: "pointer",
                }}
              />
            ) : (
              <CloseIcon
                onClick={toggleNavbar}
                sx={{
                  margin: "0.5em",
                  position: "relative",
                  zIndex: "2",
                  cursor: "pointer",
                }}
              />
            )}
          </Box>
        )}
        {showNavbar && (
          <Grid
            container
            sx={{
              textAlign: "center",
              background: "#ffff",
              height: "30vh",
              padding: "1em 0 1em 0",
              position: "fixed",
              alignContent: "space-around",
              bottom: "0",
              borderRadius: "1rem 1rem 0 0",
              boxShadow: "0 -1px 4px rgba(0,0,0,.15)",
              backgroundColor: "hsl(250, 60%, 99%)",
              [theme.breakpoints.up("lg")]: {
                top: "0",
                position: "relative",
                height: "100%",
                justifyContent: "flex-end",
                borderRadius: "0",
                boxShadow: "0",
              },
            }}
          >
            {menu.map((link: MenuItem, index) => {
              return (
                <Grid
                  sx={{
                    height: "80px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      color: "gray",
                    },
                    [theme.breakpoints.up("lg")]: {
                      minWidth: "150px",
                    },
                  }}
                  key={index}
                  item
                  xs={4}
                  lg={1}
                >
                  {!desktop && <Box>{link.icon}</Box>}
                  <Link href='#'>
                    <Typography>{link.location}</Typography>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;

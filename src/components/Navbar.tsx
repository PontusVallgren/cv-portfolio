import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, Grid, Button, Slide } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

type NavbarProps = {
  refProfile: any;
  refAbout: any;
  refPortfolio: any;
  toggle: (value: string) => void;
};

type MenuItem = {
  location: string;
  icon: any;
  ref: any;
};

const Navbar: React.FC<NavbarProps> = ({
  refProfile,
  refAbout,
  refPortfolio,
  toggle,
}) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = (ref: any, button: string) => {
    window.scrollTo({
      top: desktop ? ref.offsetTop - 80 : ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    if (showNavbar && !desktop) {
      setShowNavbar(!showNavbar);
    }
    if (button == "Skills" || button == "Portfolio") {
      toggle(button);
    }
  };

  const menu: MenuItem[] = [
    {
      location: "Home",
      icon: <HomeIcon />,
      ref: refProfile.current,
    },
    {
      location: "About",
      icon: <PersonIcon />,
      ref: refAbout.current,
    },
    {
      location: "Skills",
      icon: <AssignmentIcon />,
      ref: refPortfolio.current,
    },
    {
      location: "Portfolio",
      icon: <BusinessCenterIcon />,
      ref: refPortfolio.current,
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
          [theme.breakpoints.up("sm")]: {
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
            color: "text.primary",
            "&:hover": {
              color: "action.active",
            },
          }}
        >
          Pontus
        </Typography>

        {!desktop && (
          <Box
            sx={{
              color: "text.primary",
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
          <Slide direction='up' in={showNavbar}>
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
                [theme.breakpoints.up("sm")]: {
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
                      color: "text.primary",
                      "&:hover": {
                        color: "action.active",
                      },
                      [theme.breakpoints.up("sm")]: {
                        minWidth: "150px",
                      },
                    }}
                    key={index}
                    item
                    xs={6}
                    sm={1}
                  >
                    {!desktop && (
                      <Box
                        onClick={() => handleScroll(link.ref, link.location!)}
                      >
                        {link.icon}
                      </Box>
                    )}
                    <Typography
                      onClick={() => handleScroll(link.ref, link.location!)}
                      sx={{
                        color: "text.primary",
                        "&:hover": {
                          color: "action.active",
                        },
                      }}
                    >
                      {link.location}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Slide>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;

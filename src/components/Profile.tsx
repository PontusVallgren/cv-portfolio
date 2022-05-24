import React, { RefObject, useRef } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

type ProfileProps = {
  refProfile: RefObject<HTMLButtonElement>;
};

const Profile: React.FC<ProfileProps> = ({ refProfile }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      ref={refProfile}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10rem",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
          justifyContent: "center",
        },
      }}
    >
      <Avatar
        alt='avatar'
        src='https://i.imgur.com/z5qJY4B.png'
        sx={{
          width: 165,
          height: 165,
          border: "double .35rem #1976d2",
          marginBottom: "1rem",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          [theme.breakpoints.up("md")]: {
            alignItems: "flex-start",
            marginLeft: "2rem",
          },
        }}
      >
        <Typography variant='h4' component='h1' color='text.primary'>
          Pontus Vallgren
        </Typography>
        <Typography variant='caption' component='h2' color='text.secondary'>
          Junior Developer
        </Typography>
        <Box sx={{ marginTop: "0.5rem" }}>
          <Link href='https://github.com/PontusVallgren' passHref>
            <a target='_blank' style={{ marginRight: ".5rem" }}>
              <GitHubIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "secondary.light",
                  },
                }}
                color='secondary'
              />
            </a>
          </Link>
          <Link
            href='https://www.linkedin.com/in/pontus-vallgren-438a3621b/'
            passHref
          >
            <a target='_blank' style={{ marginLeft: ".5rem" }}>
              <LinkedInIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "secondary.light",
                  },
                }}
                color='secondary'
              />
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

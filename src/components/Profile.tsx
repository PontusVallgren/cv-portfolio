import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const Profile: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10rem",
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
      <Typography variant='h4' component='h1'>
        Pontus Vallgren
      </Typography>
      <Typography variant='subtitle2' component='h2'>
        Junior Developer
      </Typography>
      <Box sx={{ marginTop: "0.5rem" }}>
        <Link href='https://github.com/PontusVallgren' passHref>
          <a target='_blank'>
            <GitHubIcon sx={{ cursor: "pointer", marginRight: "0.25rem" }} />
          </a>
        </Link>
        <Link
          href='https://www.linkedin.com/in/pontus-vallgren-438a3621b/'
          passHref
        >
          <a target='_blank'>
            <LinkedInIcon sx={{ cursor: "pointer", marginLeft: "0.25rem" }} />
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default Profile;

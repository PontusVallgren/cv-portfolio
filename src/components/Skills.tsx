import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Skills: React.FC = () => {
  const theme = useTheme();
  const frontendSkills = [
    "JavaScript",
    "React",
    "TypeScript",
    "HTML",
    "CSS/SASS",
    "Material UI",
    "NextJS",
    "Git",
  ];
  const backendSkills = [
    "NodeJs",
    "REST API",
    "SSR",
    "MongoDB",
    "Jest",
    "Deployment",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
          justifyContent: "center",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "350px",
          height: "300px",
          flexWrap: "wrap",
        }}
      >
        <Typography variant='h5'>Frontend developer</Typography>
        {frontendSkills.map((item, index) => {
          return (
            <ListItem key={index} sx={{ width: "170px", height: "50px" }}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          );
        })}
      </List>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "350px",
          height: "300px",
          flexWrap: "wrap",
        }}
      >
        <Typography variant='h5'>Backend developer</Typography>
        {backendSkills.map((item, index) => {
          return (
            <ListItem key={index} sx={{ width: "170px", height: "50px" }}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={item}></ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Skills;

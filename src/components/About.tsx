import React from "react";
import { Box, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "400px",
        margin: "0 auto",
        padding: "2em",
      }}
    >
      <Typography variant='h3'>About Me</Typography>
      <Typography variant='subtitle2' sx={{ marginBottom: "0.5em" }}>
        My introduction
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        mollitia quisquam officia architecto hic nihil eum dolore veritatis
        totam inventore alias necessitatibus ea earum suscipit aut, vitae animi
        dignissimos consequuntur!
      </Typography>
    </Box>
  );
};

export default About;

import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";

type AboutProps = {
  refAbout: any;
};

const About: React.FC<AboutProps> = ({ refAbout }) => {
  return (
    <Box
      ref={refAbout}
      sx={{
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "2em",
      }}
    >
      <Typography variant='h4' color='text.primary'>
        About Me
      </Typography>
      <Typography
        variant='subtitle2'
        color='text.secondary'
        sx={{ marginBottom: "0.5em" }}
      >
        My introduction
      </Typography>
      <Typography variant='body1' color='text.primary'>
        Hello I’m Pontus, i’m 29 years old and half through my study to become a
        system developer in JavaScript and Java at Lernia Yrkeshögskola. I’m
        located in Skellefteå Sweden, but I’m not unavailable to move for the
        right opportunity. On my spare time I’m an eager reader about everything
        from biographies to history. I love to learn and that’s one thing that I
        love about developing, there are never enough things to learn. Please
        check out some of my code and see if i could be a resource for your
        company. Don’t hesitate to contact me for more information, I would love
        hearing from you!
      </Typography>
    </Box>
  );
};

export default About;

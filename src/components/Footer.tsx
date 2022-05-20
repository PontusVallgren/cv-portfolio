import React from "react";
import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        background: "hsl(250, 60%, 99%)",
        boxShadow: "0 -1px 4px rgba(0,0,0,.15)",
        borderRadius: "1rem 1rem 0 0",
      }}
    >
      <CopyrightIcon fontSize='small' sx={{ color: "text.secondary" }} />
      <Typography variant='caption' component='p' color='text.secondary'>
        Pontus Vallgren
      </Typography>
    </Box>
  );
};

export default Footer;

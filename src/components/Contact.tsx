import React, { useState } from "react";
import { Stack, Button, Modal, Typography, Box } from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Contact: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    width: "350px",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Stack direction='row' spacing={1.5} sx={{ justifyContent: "center" }}>
      <Button
        size='large'
        variant='contained'
        endIcon={<DownloadIcon />}
        disabled
      >
        <a href='/test.pdf' download>
          Download CV
        </a>
      </Button>
      <Button
        color='secondary'
        size='large'
        variant='contained'
        onClick={toggleModal}
      >
        Contact
      </Button>
      <Modal open={open} onClose={toggleModal}>
        <Stack spacing={1} sx={style}>
          <Typography variant='h6' component='h2'>
            Contact Information
          </Typography>
          <Typography sx={{ display: "flex" }}>
            <EmailIcon /> Pontus.wallgren92@gmail.com
          </Typography>
          <Typography sx={{ display: "flex" }}>
            <PhoneIphoneIcon /> +46 73-8480569
          </Typography>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Contact;

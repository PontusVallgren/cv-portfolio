import React, { useState } from "react";
import { useRouter } from "next/router";
import { Stack, Button, Modal, Typography, Box } from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

const Contact: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    // Bygg API för att ladda ner CV PDF
    router.push("/api/hello");
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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
        onClick={handleClick}
      >
        Download CV
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
          <Typography>Email: Pontus.wallgren92@gmail.com</Typography>
          <Typography>Phone: 073-8480569</Typography>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Contact;

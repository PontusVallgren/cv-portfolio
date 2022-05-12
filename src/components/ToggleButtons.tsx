import React, { SyntheticEvent } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

type ToggleButtonsProps = {
  toggle: (value: string) => void;
  buttonInUse: string;
};

const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  toggle,
  buttonInUse,
}) => {
  const handleToggle = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    toggle(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "1em 0" }}>
      <ToggleButtonGroup
        color='primary'
        size='large'
        value={buttonInUse}
        exclusive
        onChange={handleToggle}
      >
        <ToggleButton value='portfolio'>Portfolio</ToggleButton>
        <ToggleButton value='skills'>Skills</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ToggleButtons;

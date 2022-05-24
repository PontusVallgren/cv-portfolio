import React, { RefObject, SyntheticEvent } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

type ToggleButtonsProps = {
  toggle: (value: string) => void;
  buttonInUse: string;
  refPortfolio: RefObject<HTMLButtonElement>;
};

const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  toggle,
  buttonInUse,
  refPortfolio,
}) => {
  const handleToggle = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    toggle(value);
  };

  return (
    <Box
      ref={refPortfolio}
      sx={{ display: "flex", justifyContent: "center", margin: "2.5rem 0" }}
    >
      <ToggleButtonGroup
        color='primary'
        size='large'
        value={buttonInUse}
        exclusive
        onChange={handleToggle}
      >
        <ToggleButton value='Portfolio'>Portfolio</ToggleButton>
        <ToggleButton value='Skills'>Skills</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ToggleButtons;

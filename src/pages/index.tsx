import type { NextPage } from "next";
import { useRef, useState } from "react";
import Profile from "../components/Profile";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import ToggleButtons from "../components/ToggleButtons";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";

const Home: NextPage = () => {
  const theme = useTheme();
  const [button, setButton] = useState<string>("Portfolio");
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));
  const refProfile = useRef(null);
  const refAbout = useRef(null);
  const refPortfolio = useRef(null);

  const handleChange = (value: string) => {
    setButton(value);
  };

  return (
    <Box>
      <Profile refProfile={refProfile} />
      <About refAbout={refAbout} />
      <Contact />
      <ToggleButtons
        toggle={handleChange}
        buttonInUse={button}
        refPortfolio={refPortfolio}
      />
      {button == "Portfolio" ? <Portfolio /> : <Skills />}
      <Navbar
        toggle={handleChange}
        refProfile={refProfile}
        refAbout={refAbout}
        refPortfolio={refPortfolio}
      />
      {desktop && <Footer />}
    </Box>
  );
};

export default Home;

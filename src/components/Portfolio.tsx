import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import DataFile from "../assets/DataFile.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProjectItem = {
  id: string;
  name: string;
  description: string;
  demoURL: string;
  githubURL: string;
  image: string;
};

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const ProjectData: ProjectItem[] = DataFile;
  return (
    <Box>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        style={{ width: "95vw" }}
      >
        {ProjectData.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "none",
                  margin: "0 0 2rem 0",
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    justifyContent: "center",
                  },
                }}
              >
                <CardMedia
                  component='img'
                  image={item.image}
                  alt='Picture of project'
                  sx={{
                    width: "265px",
                    borderRadius: ".5rem",
                    [theme.breakpoints.up("md")]: {
                      width: "350px",
                      height: "240px",
                      objectFit: "contain",
                    },
                    [theme.breakpoints.up("lg")]: {
                      width: "600px",
                      height: "350px",
                    },
                  }}
                />
                <CardContent
                  sx={{
                    maxWidth: "300px",
                    [theme.breakpoints.up("md")]: {
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "2rem",
                    },
                    [theme.breakpoints.up("lg")]: {
                      maxWidth: "450px",
                    },
                  }}
                >
                  <Typography variant='h5' color='text.primary'>
                    {item.name}
                  </Typography>
                  <Typography variant='body2' sx={{ margin: "0.5rem 0" }}>
                    {item.description}
                  </Typography>
                  <Box>
                    <Button
                      target='_blank'
                      href={item.demoURL}
                      variant='contained'
                      disabled={item.demoURL === "disabled"}
                      sx={{
                        maxWidth: "90px",
                        marginRight: "1rem",
                      }}
                    >
                      Demo
                    </Button>
                    <Button
                      target='_blank'
                      href={item.githubURL}
                      variant='outlined'
                      sx={{
                        maxWidth: "90px",
                      }}
                    >
                      Github
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Portfolio;

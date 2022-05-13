import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import ProjectData from "../assets/projectData.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio: React.FC = () => {
  const theme = useTheme();
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
                  margin: "0 0 3rem 0",
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
                  <Typography variant='h5'>{item.name}</Typography>
                  <Typography variant='subtitle2' sx={{ margin: "0.5rem 0" }}>
                    {item.description}
                  </Typography>
                  <Button
                    target='_blank'
                    href={item.demoURL}
                    variant='contained'
                    sx={{
                      maxWidth: "90px",
                    }}
                  >
                    Demo
                  </Button>
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

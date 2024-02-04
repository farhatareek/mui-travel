"use client"
import React, { useRef, useState } from 'react';
import Camp1 from "../public/camp1.jpg"
import Camp2 from "../public/camp2.jpg"
import Camp3 from "../public/winter-camping-landscape-with-tent.jpg"
import user1 from "../public/user1.jpg"
import user2 from "../public/user2.jpg"
import user3 from '../public/happy-bearded-man-business-clothes-looking-camera.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MapIcon from '@mui/icons-material/Map';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation, A11y } from 'swiper/modules';
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

export default function Carosel() {
  return (
    <>
    <Grid sx={{position:"relative", marginTop:{xs:"50px"}}} item xs={12} md={10} sm={10}>
    <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        slidesPerView={1.5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, A11y]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="parallax-bg"
          data-swiper-parallax="-20%" style={{
            backgroundImage:
              `url(${Camp1.src})`,
          }} >
          </div>
          
          <Box variant='h4' sx={{display:"flex"}} className="subtitle" data-swiper-parallax="-200">
          <MapIcon sx={{zIndex:"10", width:"55px" , height:"55px" , backgroundColor:"#008000",padding:"10px" ,borderRadius:"50%"}}/>
            <Typography sx={{fontWeight:"bold", fontSize:{sm:"25px", xs:"16px"},marginTop:"10px",paddingLeft:"10px"}}>
            MUILINK Camp
            </Typography>
          </Box>
          <div className="text" data-swiper-parallax="-100">
          <Typography sx={{paddingLeft:"70px"}}>
          Prigen, Pasuruan
          </Typography>
          </div>
          <Box className='-space-x-4' sx={{position:"absolute", bottom:"15px",justifyContentA:"end",alignContent:"end", display:"flex"}}> 
                <Avatar  sx={{border:"1px solid #fff", paddingLeft:"-10px"}} alt="Remy Sharp" src={user1.src} />
                <Avatar sx={{border:"1px solid #fff"}} alt="Remy Sharp" src={user2.src} />
                <Avatar sx={{border:"1px solid #fff"}} alt="Remy Sharp" src={user3.src} />
                <Box >
                <Typography sx={{paddingLeft:"30px",fontWeight:"bold",paddingTop:"10px" ,fontSize:"15px"}}>
                  50 + Joined
                  </Typography>
                </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <div className="parallax-bg"
          data-swiper-parallax="-23%" style={{
            backgroundImage:
              `url(${Camp2.src})`,
          }} >
          </div>
          <Box variant='h4' sx={{display:"flex"}} className="subtitle" data-swiper-parallax="-200">
          <MapIcon sx={{zIndex:"10", width:"55px" , height:"55px" , backgroundColor:"#008000",padding:"10px" ,borderRadius:"50%"}}/>
            <Typography sx={{fontWeight:"bold", fontSize:{sm:"25px", xs:"16px"},marginTop:"10px",paddingLeft:{sm:"10px", xs:"0"}}}>
            MUILINK Camp
            </Typography>
          </Box>
          <div className="text" data-swiper-parallax="-200">
          <Typography sx={{paddingLeft:"70px"}}>
          Prigen, Pasuruan
          </Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="parallax-bg"
          data-swiper-parallax="-23%" style={{
            backgroundImage:
              `url(${Camp3.src})`,
          }} >
          </div>
          <Box variant='h4' sx={{display:"flex"}} className="subtitle" data-swiper-parallax="-200">
          <MapIcon sx={{zIndex:"10", width:"55px" , height:"55px" , backgroundColor:"#008000",padding:"10px" ,borderRadius:"50%"}}/>
            <Typography sx={{fontWeight:"bold", fontSize:{sm:"25px", xs:"16px"},marginTop:"10px",paddingLeft:"10px"}}>
            MUILINK Camp
            </Typography>
          </Box>
          <div className="text" data-swiper-parallax="-200">
          <Typography sx={{paddingLeft:"70px"}}>
          Prigen, Pasuruan
          </Typography>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* the card box */}
      <Box sx={{display:"flex", justifyContent:{xs:"center"}}}>
      <Card sx={{ maxWidth: {sm:600, xs:250},
        zIndex:"2",
        padding:"20px",
        color:"#fff" ,
        margin:{xs:"auto 29px"},
        position:{sm:"absolute", xs:"relative"},
        bottom:"-50px" ,
        left:{sm:"50%"}, 
        borderRadius:"20px",
        backgroundColor:"#008000"}}>
      <CardContent>
        <Typography sx={{ fontSize: {sm:30, xs:20} }}  gutterBottom>
        Feeling Lost And Not Knowing The Way?
        </Typography>
        <Typography sx={{fontSize:{sm:16, xs:10}, mt:1.5}} component="p">
        Starting from the anxiety of the
        climbers when visiting a new climbing location,
        the possibility of getting lost is very large. 
        That's why we are here for those of you who want to start an adventure
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:"#000"}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    </>
  );
}

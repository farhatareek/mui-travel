import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, ImageList, ImageListItem, Typography } from '@mui/material'
import SatelliteIcon from '@mui/icons-material/Satellite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Image from 'next/image';
import phones from '../public/phone.png'
import bgImage from '../public/feature-bg.png'

function Features() {
    return (
    <>
    <Grid  sx={{ mt:{sm:20, xs:15}}} container  justifyContent='space-between' >
    <Grid sx={{paddingLeft:{xs:"40px"},backgroundImage:`url(${bgImage.src})`, backgroundSize:"cover"}} item  sm={4}>
    <Image className='phone-features' src={phones.src} alt='phone' height={740} width='400'/>
    </Grid>
    <Grid  item xs={12}  sm={8} sx={{color:"#000",position:"relative", top:{sm:"120px", xs:"0"}}} >
    <Grid item xs={10} sm={8}>
    <Typography variant='h4' sx={{fontWeight:"bold", mb:10, textAlign:"center"}}>
        Our Features
    </Typography>
    </Grid>
    
    {/* firts fetures box  */}
    <Grid sx={{display:{sm:"flex", xs:"block"},paddingLeft:{xs:"30px"}, justifyContent:"space-around"}}>
    <Grid item xs={10} sm={4} md={4}>
    <Box sx={{backgroundColor:"#008000",
    width:{sm:"70px",xs:"30px"},
    position:"relative" ,
    display:"flex",
    height:{sm:"70px",xs:"30px"},
    borderRadius:"50%",
    justifyContent:"center"}}>
    <SatelliteIcon  sx={{color:"#fff",fontSize:{sm:"35px",xs:"15px"}, position:"absolute", top:"25%"}}/>
    </Box>
    <Typography variant="h4" sx={{fontWeight:"bold", mt:5 }} gutterBottom>
    Real Maps Can Be Offline
    </Typography>
    <Typography variant='p' sx={{color:"rgb(123 123 123)"}}>
    We provide a solution for you to be able to use our application when climbing,
    yes offline maps you can use at any time there is no signal at the location
    </Typography>
    </Grid>
    <Grid item xs={10} sm={4} md={4}>
    <Box sx={{backgroundColor:"#008000",
    marginTop:"20px",
    width:{sm:"70px",xs:"30px"},
    position:"relative" ,
    display:"flex",
    height:{sm:"70px",xs:"30px"},
    borderRadius:"50%",
    justifyContent:"center"}}>
    <CalendarMonthIcon sx={{color:"#fff",fontSize:{sm:"35px",xs:"15px"}, position:"absolute", top:"25%"}}/>
    </Box>
    <Typography variant="h4" sx={{fontWeight:"bold", mt:5 ,}} gutterBottom>
    Set An Adventure Schedule
    </Typography>
    <Typography variant='p' sx={{color:"rgb(123 123 123)"}}>
    Schedule an adventure with friends. On holidays,
    there are many interesting offers from Hilink.
    That way, there's no more discussion
    </Typography>
    </Grid>
    </Grid>
    {/*  secound features box   */}

    <Grid sx={{display:{sm:"flex", xs:"block"} ,paddingLeft:{xs:"30px"},justifyContent:"space-around", mt:6}}>
    <Grid item xs={10} sm={4} md={4}>
    <Box sx={{backgroundColor:"#008000",
    width:{sm:"70px",xs:"30px"},
    position:"relative" ,
    display:"flex",
    height:{sm:"70px",xs:"30px"},
    borderRadius:"50%",
    justifyContent:"center"}}>
    <ViewInArIcon  sx={{color:"#fff",fontSize:{sm:"35px",xs:"15px"}, position:"absolute", top:"25%"}}/>
    </Box>
    <Typography variant="h4" sx={{fontWeight:"bold", mt:5 , }} gutterBottom>
    Real Maps Can Be Offline
    </Typography>
    <Typography variant='p' sx={{color:"rgb(123 123 123)"}}>
    We provide a solution for you to be able to use our application when climbing,
    yes offline maps you can use at any time there is no signal at the location
    </Typography>
    </Grid>
    <Grid item xs={10} sm={4} md={4}>
    <Box sx={{backgroundColor:"#008000",
    marginTop:"20px",
    width:{sm:"70px",xs:"30px"},
    position:"relative" ,
    display:"flex",
    height:{sm:"70px",xs:"30px"},
    borderRadius:"50%",
    justifyContent:"center"}}>
    <AddLocationIcon sx={{color:"#fff",fontSize:{sm:"35px",xs:"15px"}, position:"absolute", top:"25%"}}/>
    </Box>
    <Typography variant="h4" sx={{fontWeight:"bold", mt:5 ,}} gutterBottom>
    Set An Adventure Schedule
    </Typography>
    <Typography variant='p' sx={{color:"rgb(123 123 123)"}}>
    Schedule an adventure with friends. On holidays,
    there are many interesting offers from Hilink.
    That way, there's no more discussion
    </Typography>
    </Grid>
    </Grid>
    </Grid>
    </Grid>
    </>
    )
}

export default Features
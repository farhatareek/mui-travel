import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, ImageList, ImageListItem, Typography } from '@mui/material'
import { Star } from '@mui/icons-material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Btn from './btn'
import  camplogo  from "../public/12995.png"
import Image from 'next/image';




function FirstComponents() {

    return (
    <>
    <Box >
    <Container maxWidth={false}>
    <Grid container spacing={1} sx={{ display:"flex", justifyContent:{sm:'flex-start', xs:"center"}}}  >
    <Grid item xs={10} sm={6} md={6}>
    <Typography
            variant="h1"
            component="div"
            sx={{ margin:{sm:"30px 0 30px 0", xs:"0"} ,fontSize:{sm:"88px", xs:"52px"},paddingLeft:{sm:"30px" , xs:"0"} ,fontWeight:"700"}}
            >
            MUI<span style={{color:"#008000"}}>LINK</span> Camp Area
            </Typography>
            <Typography
            component="div"
            color="rgb(123 123 123)"
            sx={{ display: { sm: 'block' } ,fontSize:"16px",marginBottom:"20px",paddingLeft:{sm:"40px" , xs:"0"} ,}}
            >
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature.
            We can help you on an adventure around the world in just one app
            </Typography>
            <Grid item xs={12} sm={10} md={10} sx={{paddingLeft:{sm:"30px" , xs:"0"},display:{sm:"flex"},}}>
            <Box>
            <IconButton  sx={{color:"#FFC000"}} >
            <Star/>
            </IconButton>
            <IconButton  sx={{color:"#FFC000"}} >
            <Star/>
            </IconButton>
            <IconButton  sx={{color:"#FFC000"}} >
            <Star/>
            </IconButton>
            <IconButton  sx={{color:"#FFC000"}} >
            <Star/>
            </IconButton>
            <IconButton  sx={{color:"#FFC000"}} >
            <Star/>
            </IconButton>
            </Box>
            <Box>
            <Typography sx={{paddingTop:"8px",  fontSize:"20px"}}>
            <span style={{fontWeight:"bold"}}> 198k</span> Excellent Reviews
            </Typography>
            </Box>
            </Grid>
            <Grid sx={{display:{sm:"flex", xs:"block"}, justifyContent:"flex-start"}}  >
              <Btn 
                title="Download App"
                varient="contained"
                type="button"
                color="success"
            />
            <Box  sx={{display:"flex",marginTop:{sm:"20px",xs:"10px"}, justifyContent:"center",mb:5}} >
            <PlayCircleIcon sx={{color:"#008000",cursor:"pointer",marginTop:{sm:"0", xs:"5px"},fontSize:{sm:"50px", xs:"30px"}}}  />
            <Typography sx={{fontSize:"20px",marginTop:{sm:"10px", xs:"5px"}, cursor:"pointer"}}>
            How to work
            </Typography>
            </Box>
            </Grid>
            </Grid>
            <Grid item  position="relative" >
            <Card sx={{ maxWidth: 300,
              textTransform:"capitalize",
              marginTop:"30px" ,
              borderRadius:"15px" ,
              position:{sm:"absolute",xs:"relative"},
              color:"#fff", 
              backgroundColor:"#272626"}}>
      <CardContent>
        <Typography sx={{ fontSize: 15 }}  gutterBottom>
          Location 
        </Typography>
        <Typography sx={{ fontSize: 30 }}  component="div">
        all over the world
        </Typography>
        <Typography sx={{ fontSize: 15 ,mt: 1.5 }} >
          clients 
        </Typography>
        <Typography sx={{ fontSize: 30 }}>
          more than 198k 
        </Typography>
      </CardContent>
          </Card>
            <Image style={{paddingLeft:"60px"}} className='mapImage' alt='map' src={camplogo} width="600" height="600" />
            </Grid>
            </Grid>
            </Container>
            </Box>
      </>
    )
}

export default FirstComponents
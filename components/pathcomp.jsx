import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, ImageList, ImageListItem, Typography } from '@mui/material'
import { Star } from '@mui/icons-material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Btn from './btn'
import  camplogo  from "../public/winter-camping-landscape-with-tent.jpg"
import Image from 'next/image';




function Pathcomp() {

    return (
    <>
    <Box sx={{ display:"flex", mt:{sm:30, xs:15}, paddingLeft:{sm:"30px" , xs:"0"}}}>
    <Container maxWidth={false}>
    <Grid container spacing={1} justifyContent='flex-start' >
    <Grid item xs={10} sm={6} md={6}>
    <Typography sx={{color:"#008000",fontSize:"20px", paddingLeft:{sm:"30px" , xs:"0"}}}>
    WE ARE HERE FOR YOU
    </Typography>
    <Typography variant='h2' sx={{fontWeight:"bold",marginTop:"15px", paddingLeft:{sm:"30px" , xs:"0"}}}>
        Guide You to Easy Path
    </Typography>
    </Grid>
    <Grid item xs={10} sm={6} md={6}  position="relative" >
        <Typography sx={{paddingLeft:{sm:"150px", xs:"0"}, color:"rgb(123 123 123)"}}>
        Only with the hilink application you will no longer get lost and get lost again,
        because we already support offline maps when there is no internet connection in the field.
        Invite your friends, relatives and friends to
        have fun in the wilderness through the valley and reach the top of the mountain
        </Typography>
    </Grid>
            </Grid>
            </Container>
            </Box>
    <Grid sx={{backgroundImage:`url(${camplogo.src})`,
    marginTop:"90px",
    backgroundRepeat:"no-repeat",
    display:"flex",
    justifyContent:{xs:"center", sm:"flex-start"},
    backgroundSize:"cover",
    height:{sm:"70vh", xs:"30vh"}, width:"100%"}} item xs={10} sm={10}>
    <Box >
    <Card sx={{ maxWidth: {sm:300, xs:250},
        textTransform:"capitalize",
        borderRadius:"20px",
        top:"50px",
        left:{sm:"50px", xs:"0px"},
        bottom:"50px" ,
        position:{sm:"relative", xs:"relative"}, 
        color:"#000",
        backgroundColor:"#fff"}}>
    <CardContent>
        <Typography sx={{ fontSize: 15 , color:"rgb(162 162 162)"}}  gutterBottom>
        Destination
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight:"bold" }}  component="div">
        Aguas Calientes
        </Typography>
        <Typography sx={{ fontSize: 15, color:"rgb(162 162 162)" ,mt: 1.5 }} >
        Start track
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight:"bold" }}>
        Wonorejo Pasuruan
        </Typography>
        </CardContent>
        </Card>
    </Box>
    </Grid>
    </>
    )
}

export default Pathcomp
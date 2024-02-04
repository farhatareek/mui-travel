import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import Image from 'next/image';
import phones from '../public/phones.png'
import bgImage from '../public/pattern.png'

function DownloadApp() {
    return (
    <>
    <Grid  sx={{
    backgroundImage:`url(${bgImage.src})`,
    justifyContent:{sm:"space-between", xs:"center"},
    mt:{sm:30, xs:15},
    }} 
    container   >
    <Grid  item xs={10}  sm={7} sx={{color:"#fff",position:"relative", top:{sm:"120px", xs:"0"}}} >
        <Typography className='appHeding' variant="h2" gutterBottom sx={{margin:"50px",fontWeight:"bold"}}>
        Get for free now!
        </Typography>
        <Typography variant='p' sx={{margin:"50px",paddingBottom:"10px"}}>
        Available on iOS and Android
        </Typography>
        <Box sx={{display:{sm:"flex"},mt:{xs:3} }}>
        <Button sx={{backgroundColor:"#fff",width:{xs:"100%"}, margin:{sm:"50px", xs:"0"}, borderRadius:"30px"}}>
        <AppleIcon sx={{color:"#008000", fontSize:"30px"}}/>
        <Typography sx={{fontSize:"16px",fontWeight:"bold",padding:"15px 10px 10px 10px", color:"#008000"}}>
        App Store
        </Typography>
        </Button>
        <Button sx={{backgroundColor:"transparent",width:{xs:"100%"} ,border:"1px solid #fff",margin:{sm:"50px", xs:"10px 0 60px 0 "}, borderRadius:"30px" ,}}>
        <AndroidIcon sx={{color:"#fff", fontSize:"30px"}}/>
        <Typography sx={{fontSize:"16px",fontWeight:"bold",padding:"15px 10px 10px 10px",  color:"#fff"}}>
        App Store
        </Typography>
        </Button>
        </Box>
    </Grid>
    <Grid className='phonesComponents' sx={{display:"flex"}} item xs={10} sm={5}>
    <Image className='phones' src={phones.src} alt='phone' height={640} width='400'/>
    </Grid>
    </Grid>
    </>
    )
}

export default DownloadApp
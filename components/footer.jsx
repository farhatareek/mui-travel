import React from 'react'
import { Box, Grid, Link, Typography, Container, IconButton, Toolbar, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};
const currentYear = new Date().getFullYear()



export default function Footer() {
  return (
    <Box
    sx={{
      bgcolor: 'background.paper',
      color: '#000',
      py: 3,
    }}
  >
    <Container maxWidth={false}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={3}>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } ,paddingLeft:{sm:"40px" , xs:"0"} ,fontWeight:"bold"}}
          >
            MUI<span style={{color:"#008000"}}>LINK</span>
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}}  gutterBottom>
            PRODUCT
          </Typography>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Features</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Integrations</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Pricing</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">FAQ</Link>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}} gutterBottom>
            COMPANY
          </Typography>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">About Us</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Careers</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Privacy Policy</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Terms of Service</Link>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}} gutterBottom>
            DEVELOPERS
          </Typography>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Public API</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Documentation</Link>
          <Link href="#" sx={{textDecoration:"none"}} color="inherit" display="block">Guides</Link>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}} gutterBottom>
            SOCIAL MEDIA
          </Typography>
          <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
            <InstagramIcon />
          </IconButton>
        </Grid>
        
      </Grid>
      <Toolbar/>
      <Typography sx={{borderBottom:"#e5e7eb solid 1px", margin:{sm:"20px"}}}></Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
        © {currentYear} Company Co. All rights reserved.
      </Typography>
    </Container>
  </Box>
  )
}

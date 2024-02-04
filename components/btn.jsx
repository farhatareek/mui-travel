import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { Grid } from '@mui/material';

export default function Btn({title , varient , type, color ,icon , bgcolorbtn}) {
  return (
    <Grid item xs={12} md={6} sm={6} sx={{ '& button': { m: 0 } , paddingLeft:{sm:"30px", xs:"0"}, marginTop:"20px" }}>
        <div>
        <Button color={color} type={type}   sx={{ width:"100%" ,backgroundColor:{bgcolorbtn},fontWeight:"bold",borderRadius:"30px"}} size='large'  variant={varient} >
          {icon && <Image src={icon.src} alt={title} height={24} width={24}/>}
          {title}
        </Button>
      </div>
        </Grid>
  );
}
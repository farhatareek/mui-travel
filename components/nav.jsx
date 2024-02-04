'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

const drawerWidth = 240;
const navItems = [{label:'Home', href:'/'}, 
{label:'How MuiLink Work ?', href:"/about"},
{label:'Service', href:'/service'},
{label:'Pricing', href:'/pricing'},
{label:'Contact Us', href:"/contact"}
];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
        MUI
    </Typography>
    <Divider />
    <List sx={{justifyContent:"center"}}>
        {navItems.map((item) => (
        <ListItem sx={{}} key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item.label} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
        <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
            <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' , }}>
      <CssBaseline />
      <AppBar sx={{display:"flex",padding:"15px 0 15px 0", backgroundColor:"#fff", color:"#000"}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } ,paddingLeft:{sm:"40px", xs:"0"} ,fontWeight:"bold"}}
          >
            MUI<span style={{color:"#008000"}}>LINK</span>
          </Typography>
          <Box sx={{ flexGrow: 1,gap:"40px",display: { xs: 'none', md: 'flex' }}}>
            {navItems.map((item) => (
                <Link key={item.label} style={{color:"#000", textDecoration:"none", }} property={item.label} href={item.href}>
                {item.label}
                </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0,paddingRight:{sm:"40px", xs:"0"}, display: { xs: 'none', md: 'flex' } }}>
          <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <nav >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}



export default Navbar;
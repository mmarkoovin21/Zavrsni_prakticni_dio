import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../assets/1650496476404.jpg';

function Header() {
  return (
    <header className="header">
      <MenuIcon sx={{ fontSize: 45 }}/>
      <Typography variant="h4" sx={{ width: '99%'}}>
        Course Manager
      </Typography>
      <Avatar alt="mmarkovin21" src={avatarImage} sx={{ width: 45, height: 45 }}/>
    </header>
  );
}

export default Header;
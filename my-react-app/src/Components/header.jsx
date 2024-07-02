import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ProfileMenu from './ProfileMenu';
import avatarImage from '../assets/1650496476404.jpg';

function Header({ toggleDrawer }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    handleClose();
  };

  return (
    <header className="header">
      <IconButton onClick={toggleDrawer}>
        <MenuIcon sx={{ fontSize: 32, color: 'white' }} />
      </IconButton>
      <Typography variant="h4" sx={{ width: '99%' }}>
        Course Manager
      </Typography>
      <Avatar
        alt="mmarkovin21"
        src={avatarImage}
        sx={{ width: 45, height: 45, cursor: 'pointer' }}
        onClick={handleAvatarClick}
      />
      <ProfileMenu anchorEl={anchorEl} open={open} handleClose={handleClose} handleLogout={handleLogout} />
    </header>
  );
}

export default Header;
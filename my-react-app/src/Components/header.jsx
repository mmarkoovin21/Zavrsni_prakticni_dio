import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ProfileMenu from './ProfileMenu';
import { useUser } from '../UserContext';

function Header({ toggleDrawer }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    setUser(null);
    navigate('/');
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
        alt={user?.username}
        src={user?.profilePicture}
        sx={{ width: 45, height: 45, cursor: 'pointer' }}
        onClick={handleAvatarClick}
      />
      <ProfileMenu anchorEl={anchorEl} open={open} handleClose={handleClose} handleLogout={handleLogout} />
    </header>
  );
}

export default Header;
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { useUser } from '../UserContext';

function ProfileMenu({ anchorEl, open, handleClose, handleLogout}) {
  const { user } = useUser();
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          border: '1px solid #ddd',
          borderRadius: '5px',
        },
      }}
    >
      <MenuItem>
        <Typography variant="h6">{user?.name}</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">{user?.type}</Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText>Postavke</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText>Profil</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText>Odjava</ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default ProfileMenu;
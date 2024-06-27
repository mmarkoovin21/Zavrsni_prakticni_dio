import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SidebarListAdmin from './SidebarListAdmin';

const PersistentSidebar = ({ open, handleDrawerClose }) => {
  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          style: {
            backgroundColor: '#B3E5FC',
        }}} 
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <SidebarListAdmin />
      </Drawer>
    </div>
  );
};

export default PersistentSidebar;
import React from 'react';
import { Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PersistentSidebar = ({ open, handleDrawerClose, children }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      PaperProps={{
        style: {
          backgroundColor: '#B3E5FC',
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </div>
      {children}
    </Drawer>
  );
};

export default PersistentSidebar;

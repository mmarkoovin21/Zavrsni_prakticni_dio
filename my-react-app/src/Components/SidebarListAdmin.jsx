import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';

function SidebarListAdmin({ toggleDrawer }) {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  const items = [
    { name: 'Početna', path: '/pocetna-admin' },
    { name: 'Akademska Godina', path: '/pocetna-admin' },
    { name: 'Dnevnik aktivnosti', path: '/pocetna-admin' },
  ];

  const dropdownItems = [
    { name: 'Akademske godine', path: '/ak-godine' },
    { name: 'Nastavnici', path: '/dodjeljivanje-nastavnika' },
    { name: 'Predmeti', path: '/izvodjenje-redmeta' },
  ];

  return (
    <List>
      {items.filter(item => item.name !== 'Dnevnik aktivnosti').map((item) => (
        <ListItem 
          key={item.name} 
          component={Link} 
          to={item.path}
          sx={{ color: 'black' }}
          onClick={toggleDrawer}
        >
          <ListItemText primary={item.name} />
          <ListItemIcon>
            <ArrowForwardIos />
          </ListItemIcon>
        </ListItem>
      ))}
      <ListItem onClick={handleClick}>
        <ListItemText primary="Katalozi" />
        <ListItemIcon style={{ transform: rotate ? 'rotate(90deg)' : 'none' }}>
          <ArrowForwardIos />
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {dropdownItems.map((dropdownItem) => (
            <ListItem 
              key={dropdownItem.name} 
              component={Link} 
              to={dropdownItem.path} 
              sx={{ pl: 4, color: 'black' }} 
              onClick={toggleDrawer}
            >
              <ListItemText primary={dropdownItem.name} />
              <ListItemIcon>
                {dropdownItem.icon} 
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Collapse>
      {items.filter(item => item.name === 'Dnevnik aktivnosti').map((item) => (
        <ListItem 
          key={item.name} 
          component={Link} 
          to={item.path} 
          sx={{color: 'black' }} 
          onClick={toggleDrawer}
        >
          <ListItemText primary={item.name} />
          <ListItemIcon>
            <ArrowForwardIos />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarListAdmin;

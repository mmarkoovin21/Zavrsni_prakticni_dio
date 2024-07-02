import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';

function SidebarListProfesor({ toggleDrawer }) {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  const items = [
    { name: 'Početna', path: '/pocetna-profesor' },
    { name: 'Katalozi', path: '/pocetna-profesor' },
  ];

  const dropdownItems = [
    { name: 'Upisi studenta', path: '/pocetna-profesor' },
    { name: 'Upisani studenti', path: '/pocetna-profesor' },
    { name: 'Elementi praćenja', path: '/pocetna-profesor' },
    { name: 'Bodovna skala', path: '/pocetna-profesor' },
    { name: 'Pregled rezultata studenata', path: '/pregled-rezultata-studenta' },
    { name: 'Unos rezultata studenata', path: '/unos-rezultata-studenta' },
    { name: 'Kopiranje podataka kolegija', path: '/pocetna-profesor' },
  ];

  return (
    <List>
      {items.filter(item => item.name !== 'Katalozi').map((item) => (
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
        <ListItemText primary="Administracija kolegija" />
        <ListItemIcon style={{ transform: rotate ? 'rotate(90deg)' : 'none' }}>
          <ArrowForwardIos />
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {dropdownItems.filter(dropdownItem => dropdownItem.name !== 'Administracija kolegija').map((dropdownItem) => (
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
      {items.filter(item => item.name === 'Katalozi').map((item) => (
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

export default SidebarListProfesor;

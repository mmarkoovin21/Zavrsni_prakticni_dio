import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

function SidebarListAdmin() {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  const items = [
    { name: 'Početna', path: '/pocetna-admin' },
    { name: 'Akademska Godina', path: '/ak-godina' },
    { name: 'Dnevnik aktivnosti', path: '/pocetna-admin' },
  ];

  const dropdownItems = [
    { name: 'Akademske godine', path: '/akademske-godine' },
    { name: 'Predmeti', path: '/predmeti' },
    { name: 'Nastavnici', path: '/nastavnici' },
  ];

  return (
    <List>
      {items.filter(item => item.name !== 'Dnevnik aktivnosti').map((item) => (
        <ListItem key={item.name} component={Link} to={item.path}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
      {/* Katalozi and its dropdown */}
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Katalozi" />
        <ListItemIcon style={{ transform: rotate ? 'rotate(90deg)' : 'none' }}>
          <ArrowForwardIos />
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {dropdownItems.map((dropdownItem) => (
            <ListItem key={dropdownItem.name} component={Link} to={dropdownItem.path} sx={{ pl: 4 }}>
              <ListItemText primary={dropdownItem.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <Divider />
      {/* Dnevnik aktivnosti */}
      {items.filter(item => item.name === 'Dnevnik aktivnosti').map((item) => (
        <ListItem key={item.name} component={Link} to={item.path}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarListAdmin;
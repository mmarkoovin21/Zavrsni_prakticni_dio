import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function SidebarListAdmin() {
  const items = [
    { name: 'Početna', path: '/pocetna-admin' },
    { name: 'Akademska Godina', path: '/ak-godina' },
    { name: 'Katalozi', path: '/pocetna-admin' },
    { name: 'Dnevnik aktivnosti', path: '/pocetna-admin' },
  ];

  return (
    <List>
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          <ListItem component={Link} to={item.path}>
            <ListItemText primary={item.name} sx={{ mr: 2 }}/>
            <ListItemIcon >
              <ArrowForwardIos />
            </ListItemIcon>
          </ListItem>
          {index === items.length - 2  && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}

export default SidebarListAdmin;
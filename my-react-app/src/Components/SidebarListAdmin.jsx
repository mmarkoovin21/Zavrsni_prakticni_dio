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
    { name: 'Početna', path: '/home' },
    { name: 'Akademska Godina', path: '/academic-year' },
    { name: 'Katalozi', path: '/catalogs' },
    { name: 'Dnevnik aktivnosti', path: '/activity-log' },
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
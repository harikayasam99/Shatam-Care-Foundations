import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const navItems = {
  admin: [
    'CareSeeker List',
    'Caregiver List',
    'Upload Courses',
    'Emergency Received',
  ],
  careseeker: [
    'Find Caregivers',
    'My Requests',
    'Profile',
  ],
  caregiver: [
    'Available Jobs',
    'My Applications',
    'Profile',
  ],
};

export default function Navbar({ role }) {
  const menuItems = navItems[role] || [];

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap component="div">
          ElderCare NGO
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'row', p: 0, m: 0 }}>
          {menuItems.map((text) => (
            <ListItem key={text} sx={{ width: 'auto', px: 2 }}>
              <Typography variant="body1" color="inherit">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../components/Navbar';

export default function AdminDashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Navbar role="careseeker" />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8 }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the Admin Dashboard
        </Typography>
        <Typography variant="body1">
          Use the header navigation to manage CareSeekers, Caregivers, Courses, and Emergency requests.
        </Typography>
      </Box>
    </Box>
  );
}

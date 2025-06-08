import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2E3B55' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Charity Trust
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Campaigns</Button>
          <Button color="inherit">Contact</Button>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Join.Care.Earn</Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
import { Box, Typography, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      py: 3, 
      px: 2, 
      backgroundColor: 'primary.main', // Changed to default MUI primary color
      color: 'white' 
    }}>
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', mb: 2 }} />
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Charity Trust. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, flexWrap: 'wrap' }}>
        {['About', 'Campaign', 'Home Travel', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'].map((item, index) => (
          <Typography key={index} variant="body2" sx={{ mx: 1, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
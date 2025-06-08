import React from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import bgImage from './assets/background.jpg'; // Adjust the import path if needed

const LoginStepOne = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: 4,
          padding: 5,
          width: '100%',
          maxWidth: 500,
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        }}
      >
        <Stack spacing={3}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: '#fff' }}
          >
            Welcome Back
          </Typography>

          <TextField
            placeholder="Email address"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                borderRadius: 1,
                input: { padding: '12px', color: '#fff' },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ddd' },
                '&:hover fieldset': { borderColor: '#fff' },
                '&.Mui-focused fieldset': { borderColor: '#1D9BF0' },
              },
              '& input': { color: '#fff' },
              '& .MuiInputBase-input::placeholder': {
                color: '#ccc',
                opacity: 1,
              },
            }}
          />

          <TextField
            placeholder="Password"
            type="password"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                borderRadius: 1,
                input: { padding: '12px', color: '#fff' },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ddd' },
                '&:hover fieldset': { borderColor: '#fff' },
                '&.Mui-focused fieldset': { borderColor: '#1D9BF0' },
              },
              '& input': { color: '#fff' },
              '& .MuiInputBase-input::placeholder': {
                color: '#ccc',
                opacity: 1,
              },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: '9999px',
              backgroundColor: '#1D9BF0',
              color: '#fff',
              fontWeight: 600,
              textTransform: 'none',
              paddingY: 1.2,
              '&:hover': {
                backgroundColor: '#1A8CD8',
              },
            }}
          >
            Log In
          </Button>

          <Typography variant="body2" align="center" sx={{ color: '#fff' }}>
            Don’t have an account?{' '}
            <Typography
              component="span"
              sx={{ color: '#1D9BF0', cursor: 'pointer', fontWeight: 500 }}
            >
              Sign up
            </Typography>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginStepOne;

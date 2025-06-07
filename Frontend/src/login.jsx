import React from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

const LoginStepOne = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: '100%',
          maxWidth: 400,
        }}
      >
        <TextField
          placeholder="Email address"
          variant="outlined"
          fullWidth
          InputProps={{
            sx: {
              borderRadius: 1,
              input: { padding: '12px' },
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ccc' },
              '&:hover fieldset': { borderColor: '#999' },
              '&.Mui-focused fieldset': { borderColor: '#1D9BF0' },
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
              input: { padding: '12px' },
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ccc' },
              '&:hover fieldset': { borderColor: '#999' },
              '&.Mui-focused fieldset': { borderColor: '#1D9BF0' },
            },
          }}
        />

        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: '9999px',
            color: '#1D9BF0',
            borderColor: '#1D9BF0',
            paddingX: 4,
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(29, 155, 240, 0.1)',
              borderColor: '#1D9BF0',
            },
          }}
        >
          Log In
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
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
  );
};

export default LoginStepOne;

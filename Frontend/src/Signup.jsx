import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Stack,
} from '@mui/material';
import bgImage from './assets/background.jpg'; // Adjust if path changes

const LoginFormWithType = () => {
  const [type, setType] = useState('');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
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
            Log In
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

          <FormControl fullWidth>
            <InputLabel sx={{ color: '#ccc' }}>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Type"
              sx={{
                color: '#fff',
                borderRadius: 1,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fff',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1D9BF0',
                },
                '.MuiSelect-icon': { color: '#fff' },
              }}
            >
              <MenuItem value="Caretaker">Caretaker</MenuItem>
              <MenuItem value="CareSeeker">CareSeeker</MenuItem>
            </Select>
          </FormControl>

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

export default LoginFormWithType;

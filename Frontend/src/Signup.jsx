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

const LoginFormWithType = () => {
  const [type, setType] = useState('');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        // removed backgroundColor: '#000'
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
              color: '#000', // changed from white to black text
              // removed backgroundColor: '#000'
              borderRadius: 1,
              input: { padding: '12px' },
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ccc' }, // lighter border
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
              color: '#000',
              // removed backgroundColor: '#000'
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

        <FormControl fullWidth>
          <InputLabel sx={{ color: '#555' }}>Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
            sx={{
              color: '#000',
              // removed backgroundColor: '#000',
              borderRadius: 1,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#999',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1D9BF0',
              },
              '.MuiSelect-icon': { color: '#000' },
            }}
          >
            <MenuItem value="Caretaker">Caretaker</MenuItem>
            <MenuItem value="CareSeeker">CareSeeker</MenuItem>
          </Select>
        </FormControl>

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

        <Typography
          variant="body2"
          align="center"
          sx={{ color: '#444', mt: 2 }}
        >
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

export default LoginFormWithType;

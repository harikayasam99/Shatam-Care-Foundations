import React from 'react';
import { Box, Container } from '@mui/material';
import CareGiverProfileForm from '../components/Profile/CareGiverProfileForm';
import CareSeekerProfileForm from '../components/Profile/CareSeekerProfileForm';

const ProfilePage = ({ role = 'caregiver' }) => {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // TODO: Implement API call to save profile data
  };

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {role === 'caregiver' ? (
          <CareGiverProfileForm onSubmit={handleSubmit} />
        ) : (
          <CareSeekerProfileForm onSubmit={handleSubmit} />
        )}
      </Box>
    </Container>
  );
};

export default ProfilePage;

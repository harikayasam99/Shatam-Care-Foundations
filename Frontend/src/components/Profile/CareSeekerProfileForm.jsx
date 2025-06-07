import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  Chip,
  IconButton,
  MenuItem,
} from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

const CareSeekerProfileForm = ({ initialData, onSubmit }) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialData?.name || '',
      age: initialData?.age || '',
      gender: initialData?.gender || '',
      address: {
        city: initialData?.address?.city || '',
        state: initialData?.address?.state || '',
        country: initialData?.address?.country || '',
      },
      medicalConditions: initialData?.medicalConditions || [],
      language: initialData?.language || [],
    },
  });

  const [newCondition, setNewCondition] = React.useState('');
  const [newLanguage, setNewLanguage] = React.useState('');

  const handleAddCondition = () => {
    if (newCondition && !watch('medicalConditions').includes(newCondition)) {
      setValue('medicalConditions', [...watch('medicalConditions'), newCondition]);
      setNewCondition('');
    }
  };

  const handleRemoveCondition = (conditionToRemove) => {
    setValue(
      'medicalConditions',
      watch('medicalConditions').filter((condition) => condition !== conditionToRemove)
    );
  };

  const handleAddLanguage = () => {
    if (newLanguage && !watch('language').includes(newLanguage)) {
      setValue('language', [...watch('language'), newLanguage]);
      setNewLanguage('');
    }
  };

  const handleRemoveLanguage = (langToRemove) => {
    setValue(
      'language',
      watch('language').filter((lang) => lang !== langToRemove)
    );
  };

  return (
    <Paper elevation={2} sx={{ p: 4, maxWidth: 900, mx: 'auto', my: 4 }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
        Care Seeker Profile
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="age"
              control={control}
              rules={{ required: 'Age is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Age"
                  type="number"
                  fullWidth
                  error={!!errors.age}
                  helperText={errors.age?.message}
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="gender"
              control={control}
              rules={{ required: 'Gender is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Gender"
                  fullWidth
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Paper variant="outlined" sx={{ p: 3, mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                Address
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Controller
                    name="address.city"
                    control={control}
                    rules={{ required: 'City is required' }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="City"
                        fullWidth
                        error={!!errors.address?.city}
                        helperText={errors.address?.city?.message}
                        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Controller
                    name="address.state"
                    control={control}
                    rules={{ required: 'State is required' }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="State"
                        fullWidth
                        error={!!errors.address?.state}
                        helperText={errors.address?.state?.message}
                        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Controller
                    name="address.country"
                    control={control}
                    rules={{ required: 'Country is required' }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Country"
                        fullWidth
                        error={!!errors.address?.country}
                        helperText={errors.address?.country?.message}
                        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper variant="outlined" sx={{ p: 3, mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                Medical Conditions
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <TextField
                  size="medium"
                  value={newCondition}
                  onChange={(e) => setNewCondition(e.target.value)}
                  placeholder="Add a medical condition"
                  fullWidth
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
                <Button
                  onClick={handleAddCondition}
                  variant="contained"
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {watch('medicalConditions').map((condition) => (
                  <Chip
                    key={condition}
                    label={condition}
                    onDelete={() => handleRemoveCondition(condition)}
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper variant="outlined" sx={{ p: 3, mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                Languages
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <TextField
                  size="medium"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  placeholder="Add a language"
                  fullWidth
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
                <Button
                  onClick={handleAddLanguage}
                  variant="contained"
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {watch('language').map((lang) => (
                  <Chip
                    key={lang}
                    label={lang}
                    onDelete={() => handleRemoveLanguage(lang)}
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
              fullWidth
            >
              Save Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CareSeekerProfileForm;

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

const CareGiverProfileForm = ({ initialData, onSubmit }) => {
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
      location: initialData?.location || '',
      languages: initialData?.languages || [],
      experience: initialData?.experience || '',
      specializations: initialData?.specializations || [],
      about: initialData?.about || '',
    },
  });

  const [newLanguage, setNewLanguage] = React.useState('');
  const [newSpecialization, setNewSpecialization] = React.useState('');

  const handleAddLanguage = () => {
    if (newLanguage && !watch('languages').includes(newLanguage)) {
      setValue('languages', [...watch('languages'), newLanguage]);
      setNewLanguage('');
    }
  };

  const handleRemoveLanguage = (langToRemove) => {
    setValue(
      'languages',
      watch('languages').filter((lang) => lang !== langToRemove)
    );
  };

  const handleAddSpecialization = () => {
    if (newSpecialization && !watch('specializations').includes(newSpecialization)) {
      setValue('specializations', [...watch('specializations'), newSpecialization]);
      setNewSpecialization('');
    }
  };

  const handleRemoveSpecialization = (specToRemove) => {
    setValue(
      'specializations',
      watch('specializations').filter((spec) => spec !== specToRemove)
    );
  };

  return (
    <Paper elevation={2} sx={{ p: 4, maxWidth: 900, mx: 'auto', my: 4 }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
        Caregiver Profile
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
              rules={{ 
                required: 'Age is required',
                min: { value: 18, message: 'Age must be at least 18' }
              }}
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
            <Controller
              name="location"
              control={control}
              rules={{ required: 'Location is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Location"
                  fullWidth
                  error={!!errors.location}
                  helperText={errors.location?.message}
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="experience"
              control={control}
              rules={{ required: 'Experience is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Experience"
                  fullWidth
                  error={!!errors.experience}
                  helperText={errors.experience?.message}
                  placeholder="e.g., 5 years in elderly care"
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
              )}
            />
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
                {watch('languages').map((lang) => (
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
            <Paper variant="outlined" sx={{ p: 3, mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                Specializations
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <TextField
                  size="medium"
                  value={newSpecialization}
                  onChange={(e) => setNewSpecialization(e.target.value)}
                  placeholder="Add a specialization"
                  fullWidth
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
                <Button
                  onClick={handleAddSpecialization}
                  variant="contained"
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {watch('specializations').map((spec) => (
                  <Chip
                    key={spec}
                    label={spec}
                    onDelete={() => handleRemoveSpecialization(spec)}
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="about"
              control={control}
              rules={{ required: 'About is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="About"
                  multiline
                  rows={4}
                  fullWidth
                  error={!!errors.about}
                  helperText={errors.about?.message}
                  placeholder="Tell us about your experience and approach to caregiving"
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                />
              )}
            />
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

export default CareGiverProfileForm;

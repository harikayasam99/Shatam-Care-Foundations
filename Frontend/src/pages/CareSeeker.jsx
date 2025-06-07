import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Rating,
  Chip,
  Stack,
  Container,
  Paper,
  Avatar,
  Button,
  useTheme,
  useMediaQuery,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { MapPin, Languages, DollarSign, AlertCircle, Phone } from "lucide-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Filter from "../components/Filter";

// Current user data
const currentUser = {
  name: "John Smith",
  age: 75,
  gender: "Male",
  location: "Toronto, ON",
  medicalConditions: ["Diabetes", "Arthritis"],
  preferredLanguages: ["English", "French"],
  about: "Retired teacher looking for compassionate care assistance",
};

// Sample care givers data with salary
const careGivers = [
  {
    id: 1,
    name: "Emma Wilson",
    address: "123 Care St, Toronto",
    gender: "Female",
    age: 35,
    salary: 4500,
    language: ["English", "Spanish"],
    rating: 4.8,
    feedback: "Very professional and caring.",
    avatarColor: "#8e24aa",
    specializations: ["Elderly Care", "Medication Management"],
  },
  {
    id: 2,
    name: "Michael Chen",
    address: "456 Health Ave, Toronto",
    gender: "Male",
    age: 42,
    salary: 5500,
    language: ["English", "Mandarin"],
    rating: 4.9,
    feedback: "Excellent care provider, very patient.",
    avatarColor: "#6a1b9a",
    specializations: ["Physical Therapy", "Elderly Care"],
  },
];

const CareSeeker = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [filteredCareGivers, setFilteredCareGivers] = useState(careGivers);
  const [sosDialogOpen, setSosDialogOpen] = useState(false);

  const handleSearch = (searchFilters) => {
    const filtered = careGivers.filter((caregiver) => {
      if (searchFilters.city && !caregiver.address.toLowerCase().includes(searchFilters.city.toLowerCase())) return false;
      if (searchFilters.gender && caregiver.gender !== searchFilters.gender) return false;
      if (searchFilters.language && !caregiver.language.some(lang => lang.toLowerCase() === searchFilters.language.toLowerCase())) return false;
      if (searchFilters.salaryRange && (caregiver.salary < searchFilters.salaryRange[0] || caregiver.salary > searchFilters.salaryRange[1])) return false;
      return true;
    });

    setFilteredCareGivers(filtered);
  };

  const handleSosClick = () => {
    setSosDialogOpen(true);
  };

  const handleSosClose = () => {
    setSosDialogOpen(false);
  };

  const handleEmergencyCall = () => {
    // TODO: Implement emergency call functionality
    console.log("Emergency call initiated");
    setSosDialogOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", position: "relative" }}>
      {/* Filter Component */}
      <Filter onSearch={handleSearch} />
      
      {/* SOS Button */}
      <Fab
        color="error"
        aria-label="emergency"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          width: 80,
          height: 80,
          backgroundColor: "#d32f2f",
          "&:hover": {
            backgroundColor: "#b71c1c",
            transform: "scale(1.1)",
          },
          transition: "transform 0.2s",
          zIndex: 1000,
          boxShadow: "0 4px 20px rgba(211, 47, 47, 0.3)",
        }}
        onClick={handleSosClick}
      >
        <Stack spacing={1} alignItems="center">
          <AlertCircle size={32} />
          <Typography variant="button" fontSize={16} fontWeight="bold">
            SOS
          </Typography>
        </Stack>
      </Fab>

      {/* Emergency Dialog */}
      <Dialog
        open={sosDialogOpen}
        onClose={handleSosClose}
        aria-labelledby="emergency-dialog-title"
        PaperProps={{
          sx: {
            borderTop: "4px solid #d32f2f",
            minWidth: { xs: "90%", sm: 400 },
          }
        }}
      >
        <DialogTitle id="emergency-dialog-title" sx={{ bgcolor: "#ffebee" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <AlertCircle color="#d32f2f" />
            <Typography color="#d32f2f" fontWeight="bold">
              Medical Emergency
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mt: 2 }}>
            This will:
            <ul>
              <li>Alert your assigned caregiver immediately</li>
              <li>Contact emergency medical services if needed</li>
              <li>Notify your emergency contacts</li>
            </ul>
            Do you want to proceed with the emergency call?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2, bgcolor: "#fff5f5" }}>
          <Button onClick={handleSosClose} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={handleEmergencyCall}
            variant="contained"
            color="error"
            startIcon={<Phone />}
            autoFocus
            sx={{
              px: 3,
              py: 1,
              fontWeight: "bold",
            }}
          >
            Call Emergency
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="xl" sx={{ pt: 10, pb: 4, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* User Info Component */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.98)",
            boxShadow: theme.shadows[3],
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={2}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "#8e24aa",
                  fontSize: "2.5rem",
                }}
              >
                {currentUser.name[0]}
              </Avatar>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {currentUser.name}
              </Typography>
              <Stack direction="row" spacing={1} mb={1}>
                <Chip label={`${currentUser.age} years`} size="small" />
                <Chip label={currentUser.gender} size="small" />
                <Chip label={currentUser.location} size="small" />
              </Stack>
              <Typography variant="body1" color="text.secondary" paragraph>
                {currentUser.about}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Medical Conditions
              </Typography>
              <Stack direction="row" spacing={1} mb={2}>
                {currentUser.medicalConditions.map((condition) => (
                  <Chip
                    key={condition}
                    label={condition}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Stack>
              <Typography variant="h6" gutterBottom>
                Preferred Languages
              </Typography>
              <Stack direction="row" spacing={1}>
                {currentUser.preferredLanguages.map((language) => (
                  <Chip
                    key={language}
                    label={language}
                    color="secondary"
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        {/* Care Givers List */}
        <Grid container spacing={4}>
          {filteredCareGivers.map((caregiver) => (
            <Grid item xs={12} md={6} lg={4} key={caregiver.id}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255, 255, 255, 0.98)",
                  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccountCircleIcon
                    sx={{
                      color: caregiver.avatarColor,
                      fontSize: 64,
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="h6">
                      {caregiver.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {caregiver.gender}, {caregiver.age} years
                    </Typography>
                  </Box>
                </Box>

                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <MapPin size={16} />
                    <Typography variant="body2">{caregiver.address}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <DollarSign size={16} />
                    <Typography variant="body2">
                      ${caregiver.salary}/month
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Languages size={16} />
                    <Typography variant="body2">
                      {caregiver.language.join(", ")}
                    </Typography>
                  </Stack>

                  <Box>
                    <Typography variant="body2" gutterBottom>
                      Specializations:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {caregiver.specializations.map((spec) => (
                        <Chip
                          key={spec}
                          label={spec}
                          size="small"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={caregiver.rating} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {caregiver.rating}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontStyle="italic"
                    >
                      "{caregiver.feedback}"
                    </Typography>
                  </Box>

                  <Button 
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: caregiver.avatarColor,
                      "&:hover": {
                        backgroundColor: "#6a1b9a",
                      },
                    }}
                  >
                    Contact Care Giver
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CareSeeker;
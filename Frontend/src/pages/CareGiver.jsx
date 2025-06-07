import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Rating,
  Chip,
  Stack,
  Paper,
  Avatar,
  Button,
  Container,
  Divider,
} from "@mui/material";
import { MapPin, Languages, Book, Clock } from "lucide-react";
import LearningPage from "./LearningPage";

// Current caregiver data
const currentCaregiver = {
  name: "Priya Singh",
  age: 32,
  gender: "Female",
  location: "Mumbai, India",
  languages: ["Hindi", "English", "Marathi"],
  experience: "5 years",
  specializations: ["Elderly Care", "Medical Assistance", "Physical Therapy"],
  rating: 4.8,
  totalClients: 25,
  level: "1",
  about: "Experienced healthcare professional with expertise in elderly care and medical assistance. Committed to providing compassionate and quality care.",
  avatarColor: "#8e24aa",
};

// Booked care seekers
const bookedCareSeekers = [
  {
    id: 1,
    name: "Raj Malhotra",
    age: 68,
    gender: "Male",
    address: "22A Park Lane, Mumbai",
    medicalConditions: ["Diabetes", "Hypertension"],
    rating: 4.7,
    startDate: "2023-06-01",
    feedback: "Very cooperative and follows medical routines well.",
    avatarColor: "#009688",
  },
  {
    id: 2,
    name: "Meera Kapoor",
    age: 75,
    gender: "Female",
    address: "17 MG Road, Mumbai",
    medicalConditions: ["Arthritis", "Vision Impairment"],
    rating: 4.9,
    startDate: "2023-05-15",
    feedback: "A wonderful person to work with, very understanding.",
    avatarColor: "#3f51b5",
  },
];

const CareGiver = () => {
  const [showLearning, setShowLearning] = useState(false);

  if (showLearning) {
    return <LearningPage />;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        pt: 4,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Caregiver Info Section */}
        <Paper
          elevation={1}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 2,
            bgcolor: "white",
          }}
        >
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: currentCaregiver.avatarColor,
                  fontSize: "2.5rem",
                  margin: "0 auto",
                  mb: 2,
                }}
              >
                {currentCaregiver.name[0]}
              </Avatar>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {currentCaregiver.name}
              </Typography>
              <Stack spacing={1} alignItems="center">
                <Rating 
                  value={currentCaregiver.rating} 
                  readOnly 
                  precision={0.1}
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: currentCaregiver.avatarColor,
                    }
                  }}
                />
                <Typography variant="subtitle1" color="text.secondary">
                  {currentCaregiver.rating} • {currentCaregiver.totalClients} clients
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  <Chip
                    label={`${currentCaregiver.age} years`}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={currentCaregiver.gender}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={currentCaregiver.location}
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={`Level ${currentCaregiver.level}`}
                    size="small"
                    color="primary"
                  />
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  {currentCaregiver.about}
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Specializations
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {currentCaregiver.specializations.map((spec) => (
                      <Chip
                        key={spec}
                        label={spec}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Languages
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {currentCaregiver.languages.map((lang) => (
                      <Chip
                        key={lang}
                        label={lang}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        {/* Learning Section */}
        <Paper
          elevation={1}
          sx={{
            textAlign: "center",
            p: 4,
            mb: 4,
            borderRadius: 2,
            bgcolor: "white",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Enhance Your Caregiving Skills
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Access our comprehensive learning resources and get certified in
            various caregiving specializations.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Book />}
            onClick={() => setShowLearning(true)}
          >
            Start Learning
          </Button>
        </Paper>

        {/* Care Seekers Section */}
        <Typography variant="h5" gutterBottom>
          Your Care Seekers
        </Typography>
        <Grid container spacing={3}>
          {bookedCareSeekers.map((seeker) => (
            <Grid item xs={12} md={6} key={seeker.id}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: "white",
                  height: "100%",
                }}
              >
                <Stack spacing={2}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        bgcolor: seeker.avatarColor,
                        width: 48,
                        height: 48,
                        mr: 2,
                      }}
                    >
                      {seeker.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1">{seeker.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {seeker.gender}, {seeker.age} years
                      </Typography>
                    </Box>
                  </Box>

                  <Divider />

                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <MapPin size={16} />
                      <Typography variant="body2">{seeker.address}</Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Clock size={16} />
                      <Typography variant="body2">
                        Started: {new Date(seeker.startDate).toLocaleDateString()}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Medical Conditions
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {seeker.medicalConditions.map((condition) => (
                        <Chip
                          key={condition}
                          label={condition}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating 
                        value={seeker.rating} 
                        readOnly 
                        precision={0.1}
                        size="small"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: seeker.avatarColor,
                          }
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        ({seeker.rating})
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      "{seeker.feedback}"
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CareGiver;
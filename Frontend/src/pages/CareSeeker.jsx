import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Rating,
  Chip,
  Stack,
} from "@mui/material";
import { MapPin, Languages, Heart } from "lucide-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import profile icon

const seekers = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main St, City",
    gender: "Male",
    age: 70,
    problem: "Needs daily medication",
    language: "English",
    rating: 4.5,
    feedback: "Very kind and punctual.",
    avatarColor: "#8e24aa",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Oak Ave, Town",
    gender: "Female",
    age: 65,
    problem: "Assistance with mobility",
    language: "Hindi",
    rating: 4.8,
    feedback: "Great listener and helper.",
    avatarColor: "#6a1b9a",
  },
];

const CareSeeker = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #e040fb 100%)",
        py: 8,
        px: 4,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color="white"
          fontWeight={700}
          gutterBottom
        >
          Care Seekers
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {seekers.map((seeker) => (
            <Grid item xs={12} sm={6} md={4} key={seeker.id}>
              <Card
                elevation={6}
                sx={{
                  borderTop: `5px solid ${seeker.avatarColor}`,
                  borderRadius: 3,
                  p: 3,
                  height: 370,
                  width: 320,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  boxSizing: "border-box",
                  background: "#fff",
                }}
              >
                <AccountCircleIcon
                  sx={{
                    color: seeker.avatarColor,
                    fontSize: 80,
                    mb: 2,
                  }}
                />

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {seeker.name}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <MapPin size={16} />
                  <Typography variant="body2" color="text.secondary">
                    {seeker.address}
                  </Typography>
                </Stack>

                <Chip
                  label={`${seeker.gender}, ${seeker.age}`}
                  color="primary"
                  size="small"
                  variant="outlined"
                  sx={{ my: 2 }}
                />

                <Stack direction="row" spacing={1} alignItems="center">
                  <Heart size={16} color="red" />
                  <Typography variant="body2">{seeker.problem}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                  <Languages size={16} color="#ff9800" />
                  <Typography variant="body2" color="text.secondary">
                    {seeker.language}
                  </Typography>
                </Stack>

                <Box mt={3}>
                  <Rating value={seeker.rating} readOnly size="small" />
                  <Typography
                    variant="body2"
                    fontStyle="italic"
                    color="text.secondary"
                    align="center"
                  >
                    "{seeker.feedback}"
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor: seeker.avatarColor,
                    borderRadius: "50%",
                    position: "absolute",
                    top: 16,
                    right: 16,
                    opacity: 0.7,
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CareSeeker;
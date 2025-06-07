import React from "react";
import {
  Card,
  Typography,
  Grid,
  Box,
  Rating,
  Chip,
  Stack,
} from "@mui/material";
import { MapPin, Languages } from "lucide-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const caregivers = [
  {
    id: 1,
    name: "Priya Singh",
    address: "22A Park Lane, New Delhi",
    gender: "Female",
    age: 32,
    salary: "₹25,000/month",
    language: "Hindi, English",
    rating: 4.7,
    feedback: "Very attentive and professional.",
    avatarColor: "#009688",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    address: "17 MG Road, Mumbai",
    gender: "Male",
    age: 40,
    salary: "₹28,000/month",
    language: "Marathi, Hindi",
    rating: 4.9,
    feedback: "Great with elderly care and punctual.",
    avatarColor: "#3f51b5",
  },
];

const CareGiver = () => {
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
          Care Givers
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {caregivers.map((giver) => (
            <Grid item xs={12} sm={6} md={4} key={giver.id}>
              <Card
                elevation={6}
                sx={{
                  borderTop: `5px solid ${giver.avatarColor}`,
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
                    color: giver.avatarColor,
                    fontSize: 80,
                    mb: 2,
                  }}
                />

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {giver.name}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <MapPin size={16} />
                  <Typography variant="body2" color="text.secondary">
                    {giver.address}
                  </Typography>
                </Stack>

                <Chip
                  label={`${giver.gender}, ${giver.age}`}
                  color="primary"
                  size="small"
                  variant="outlined"
                  sx={{ my: 2 }}
                />

                <Stack direction="row" spacing={1} alignItems="center">
                  <MonetizationOnIcon sx={{ color: "green", fontSize: 18 }} />
                  <Typography variant="body2">{giver.salary}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                  <Languages size={16} color="#ff9800" />
                  <Typography variant="body2" color="text.secondary">
                    {giver.language}
                  </Typography>
                </Stack>

                <Box mt={3}>
                  <Rating value={giver.rating} readOnly size="small" />
                  <Typography
                    variant="body2"
                    fontStyle="italic"
                    color="text.secondary"
                    align="center"
                  >
                    "{giver.feedback}"
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor: giver.avatarColor,
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

export default CareGiver;

// CaregiverAttendance.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';

const CaregiverAttendance = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDayClick = (date) => {
    const dateString = date.format("YYYY-MM-DD");
    setSelectedDates((prev) =>
      prev.includes(dateString)
        ? prev.filter((d) => d !== dateString)
        : [...prev, dateString]
    );
  };

  const handleSave = () => {
    // Send selectedDates to your backend or API
    console.log("Attendance saved:", selectedDates);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Caregiver Attendance
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={handleDayClick}
            renderDay={(day, _selectedDates, pickersDayProps) => {
              const isMarked = selectedDates.includes(day.format("YYYY-MM-DD"));
              return (
                <Box
                  {...pickersDayProps}
                  sx={{
                    backgroundColor: isMarked ? "primary.main" : "transparent",
                    color: isMarked ? "white" : "inherit",
                    borderRadius: "50%",
                    cursor: "pointer",
                    p: 1,
                    "&:hover": {
                      backgroundColor: isMarked ? "primary.dark" : "grey.200",
                    },
                  }}
                  onClick={() => handleDayClick(day)}
                >
                  {day.date()}
                </Box>
              );
            }}
          />
        </LocalizationProvider>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save Attendance
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CaregiverAttendance;

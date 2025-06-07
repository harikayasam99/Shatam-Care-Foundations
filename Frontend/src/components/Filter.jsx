import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
  CssBaseline,
} from "@mui/material";
import { Search, MapPin, User, DollarSign } from "lucide-react";

const Filter = () => {
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [salaryRange, setSalaryRange] = useState([10000, 50000]);

  const handleSearch = () => {
    console.log({
      city,
      gender,
      salaryRange,
    });
  };

  const handleSliderChange = (event, newValue) => {
    setSalaryRange(newValue);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: 1,
        }}
      >
        <Box
          maxWidth="lg"
          mx="auto"
          px={{ xs: 2, md: 4 }}
          py={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          gap={{ xs: 2, md: 3 }}
        >
          {/* City Dropdown */}
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>
              <MapPin size={16} style={{ marginRight: 4 }} />
              City
            </InputLabel>
            <Select
              value={city}
              label="City"
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value="">Select City</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
            </Select>
          </FormControl>

          {/* Gender Dropdown */}
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>
              <User size={16} style={{ marginRight: 4 }} />
              Gender
            </InputLabel>
            <Select
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          {/* Salary Range Slider */}
          <Box sx={{ minWidth: 250 }}>
            <Typography
              variant="subtitle2"
              sx={{ mb: 1, display: "flex", alignItems: "center" }}
            >
              <DollarSign size={16} style={{ marginRight: 4 }} />
              Salary Range ({formatCurrency(salaryRange[0])} - {formatCurrency(salaryRange[1])})
            </Typography>
            <Slider
              value={salaryRange}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={5000}
              max={100000}
              step={500}
              sx={{ color: "#1976d2" }}
            />
            <Box display="flex" justifyContent="space-between" mt={0.5}>
              <Typography variant="caption">₹5K</Typography>
              <Typography variant="caption">₹100K</Typography>
            </Box>
          </Box>

          {/* Search Button */}
          <Box display="flex" alignItems="flex-end">
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleSearch}
              startIcon={<Search size={16} />}
              sx={{
                px: 3,
                py: 1,
                mt: { xs: 1, md: 4 },
                borderRadius: 2,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: 2,
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Filter;

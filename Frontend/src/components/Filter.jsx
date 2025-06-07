import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CssBaseline,
  Slider,
} from "@mui/material";
import { Search, MapPin, User, Languages, DollarSign } from "lucide-react";

const Filter = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [salaryRange, setSalaryRange] = useState([2000, 10000]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        city,
        gender,
        language,
        salaryRange,
      });
    }
  };

  const formatSalary = (value) => {
    return `${value}`;
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
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: 2,
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          maxWidth="lg"
          mx="auto"
          px={{ xs: 2, md: 4 }}
          py={3}
          display="flex"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="center"
          gap={{ xs: 2, md: 3 }}
        >
          {/* City Dropdown */}
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MapPin size={16} />
                City
              </Box>
            </InputLabel>
            <Select
              value={city}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MapPin size={16} />
                  City
                </Box>
              }
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value="">Any City</MenuItem>
              <MenuItem value="Toronto">Toronto</MenuItem>
              <MenuItem value="Vancouver">Vancouver</MenuItem>
              <MenuItem value="Montreal">Montreal</MenuItem>
              <MenuItem value="Ottawa">Ottawa</MenuItem>
            </Select>
          </FormControl>

          {/* Gender Dropdown */}
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <User size={16} />
                Gender
              </Box>
            </InputLabel>
            <Select
              value={gender}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <User size={16} />
                  Gender
                </Box>
              }
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="">Any Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>

          {/* Language Dropdown */}
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Languages size={16} />
                Language
              </Box>
            </InputLabel>
            <Select
              value={language}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Languages size={16} />
                  Language
                </Box>
              }
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="">Any Language</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="French">Hindi</MenuItem>
              <MenuItem value="Spanish">Marathi</MenuItem>
              {/* <MenuItem value="Mandarin">Mandarin</MenuItem> */}
            </Select>
          </FormControl>

          {/* Salary Range Slider */}
          <Box sx={{ minWidth: 200, maxWidth: 300 }}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.secondary",
              }}
            >
              
              Salary Range (Monthly)
            </Typography>
            <Slider
              value={salaryRange}
              onChange={(e, newValue) => setSalaryRange(newValue)}
              valueLabelDisplay="auto"
              valueLabelFormat={formatSalary}
              min={1000}
              max={20000}
              step={500}
              sx={{
                color: "#8e24aa",
                "& .MuiSlider-valueLabel": {
                  backgroundColor: "#8e24aa",
                },
              }}
            />
            <Box display="flex" justifyContent="space-between" mt={0.5}>
              <Typography variant="caption" color="text.secondary">
                {formatSalary(salaryRange[0])}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formatSalary(salaryRange[1])}
              </Typography>
            </Box>
          </Box>

          {/* Search Button */}
          <Button
            variant="contained"
            onClick={handleSearch}
            startIcon={<Search size={16} />}
            sx={{
              px: 4,
              py: 1,
              height: 40,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: "#8e24aa",
              "&:hover": {
                backgroundColor: "#6a1b9a",
              },
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Filter;

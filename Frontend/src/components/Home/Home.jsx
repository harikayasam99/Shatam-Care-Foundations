import { Box, Typography, Button, Container, Grid, Card, CardContent, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import we_1 from '../../assets/we_1.jpg';
import we_3 from '../../assets/we_3.jpg';
import we_6 from '../../assets/we_6.jpg';
import we_7 from '../../assets/we_7.jpg';
import we_4 from '../../assets/we_4.webp';
import alzemerps from '../../assets/alzemerps.jpg';
import mental_health from '../../assets/mental_health.webp';
import physio from '../../assets/physio.jpeg';
import we_5 from '../../assets/we_5.webp';

const heroImages = [
  { id: 1, alt: 'Elderly Care Training', src: we_1 },
  { id: 2, alt: 'Caregiver Workshop', src: we_3 },
  { id: 3, alt: 'Senior Health Checkup', src: we_6 },
  { id: 4, alt: 'Community Support', src: we_7 },
];

const programs = [
  {
    title: 'Geriatric Care Training',
    description: 'Comprehensive training programs for caregivers focusing on elderly care techniques and compassion.',
    placeholder: 'Training Program Image',
    src: we_4,
  },
  {
    title: "Alzheimer's Specialization",
    description: "Specialized courses for caring for patients with Alzheimer's and dementia.",
    placeholder: 'Alzheimer Care Image',
    src: alzemerps,
  },
  {
    title: 'Mental Health Support',
    description: 'Training for psychologists to provide emotional support to elderly patients.',
    placeholder: 'Mental Health Image',
    src: mental_health,
  },
  {
    title: 'Physiotherapy Training',
    description: 'Programs to train physiotherapists in geriatric rehabilitation techniques.',
    placeholder: 'Physiotherapy Image',
    src: physio,
  },
];

const impactStats = [
  '500+ caregivers trained',
  '200+ elderly served monthly',
  '30+ partner institutions',
  '95% placement rate',
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: '#fafafa' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '300px', md: '400px' },
          overflow: 'hidden',
          position: 'relative',
          bgcolor: '#2E3B55',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {heroImages.map((img, idx) => (
          <Box
            key={img.id}
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'opacity 0.6s ease-in-out',
              opacity: idx === currentImage ? 1 : 0,
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              Shatam Care Foundation
            </Typography>
            <Typography variant="h5" sx={{ position: 'relative', zIndex: 1 }}>
              Transforming Elderly Care in India
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
          Our Mission
        </Typography>
        <Divider sx={{ width: 100, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
        <Typography align="center" sx={{ fontSize: '1.1rem', mb: 4 }}>
          Amrita is dedicated to transforming the landscape of elderly care in India by empowering low-income groups to become skilled geriatric caregivers. Our organization aims to promote healthy aging across the nation, with a particular focus on Alzheimer's care.
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                height: 260,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                width: '100%',
                maxWidth: 400,
              }}
            >
              <img
                src={we_5}
                alt="Caregiver Training"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Creating a Professional Workforce
            </Typography>
            <Typography sx={{ mb: 3 }}>
              We're building a trained professional workforce that includes psychologists, physiotherapists, and caretakers through our comprehensive training programs.
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Free Training & Placements
            </Typography>
            <Typography>
              Supported by CSR initiatives and individual donations, we provide free training and job placements to address the growing demand for quality elderly care services.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Programs Section */}
  <Box sx={{ bgcolor: '#f5f5f5', py: { xs: 4, md: 8 } }}>
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#2E3B55', mb: 1 }}>
        Our Programs
      </Typography>
      <Divider sx={{ width: 100, height: 4, bgcolor: '#2E3B55', mx: 'auto', mb: 4 }} />

      <Grid container spacing={4}>
        {programs.map((program, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 180,
                  bgcolor: '#f9f9f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={program.src}
                  alt={program.placeholder}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem', mb: 1, color: '#2E3B55' }}>
                  {program.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  {program.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>


        {/* Call to Action */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
              Join Our Mission
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', mb: 4 }}>
              Help us build a sustainable model that supports caregivers in their professional journey and ensures that elderly individuals receive compassionate and competent care.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                bgcolor: '#8bc34a',
                color: '#2E3B55',
                '&:hover': { bgcolor: '#7cb342' },
              }}
            >
              Donate Now
            </Button>
          </Container>
        </Box>
      </Box>
    );
  };

  export default Home;
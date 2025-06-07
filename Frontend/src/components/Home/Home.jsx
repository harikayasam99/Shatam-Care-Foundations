import { Box, Typography, Button, Container, Grid, Card, CardContent, Divider } from '@mui/material';
import { useState, useEffect } from 'react';

const heroImages = [
  { id: 1, alt: 'Elderly Care Training' },
  { id: 2, alt: 'Caregiver Workshop' },
  { id: 3, alt: 'Senior Health Checkup' },
  { id: 4, alt: 'Community Support' },
];

const programs = [
  {
    title: 'Geriatric Care Training',
    description: 'Comprehensive training programs for caregivers focusing on elderly care techniques and compassion.',
    placeholder: 'Training Program Image',
  },
  {
    title: "Alzheimer's Specialization",
    description: "Specialized courses for caring for patients with Alzheimer's and dementia.",
    placeholder: 'Alzheimer Care Image',
  },
  {
    title: 'Mental Health Support',
    description: 'Training for psychologists to provide emotional support to elderly patients.',
    placeholder: 'Mental Health Image',
  },
  {
    title: 'Physiotherapy Training',
    description: 'Programs to train physiotherapists in geriatric rehabilitation techniques.',
    placeholder: 'Physiotherapy Image',
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
          height: { xs: 250, md: 400 },
          overflow: 'hidden',
          position: 'relative',
          bgcolor: '#2E3B55',
          color: 'white',
          display: 'flex',
        }}
      >
        {heroImages.map((img, idx) => (
          <Box
            key={img.id}
            sx={{
              minWidth: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: `translateX(${(idx - currentImage) * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(.4,0,.2,1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              Shatam Care Foundation
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Transforming Elderly Care in India
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', fontSize: { xs: '1rem', md: '1.2rem' } }}>
              {img.alt} - Placeholder Image {img.id}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#2E3B55', mb: 1 }}>
          Our Mission
        </Typography>
        <Divider sx={{ width: 100, height: 4, bgcolor: '#2E3B55', mx: 'auto', mb: 4 }} />
        <Typography align="center" sx={{ fontSize: '1.1rem', mb: 4 }}>
          Amrita is dedicated to transforming the landscape of elderly care in India by empowering low-income groups to become skilled geriatric caregivers. Our organization aims to promote healthy aging across the nation, with a particular focus on Alzheimer's care.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 260,
                bgcolor: '#e0e0e0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography>Placeholder: Caregiver Training Image</Typography>
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
                <Card sx={{ height: '100%' }}>
                  <Box
                    sx={{
                      height: 120,
                      bgcolor: '#d0d0d0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  >
                    <Typography>{program.placeholder}</Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {program.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Impact Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#2E3B55', mb: 1 }}>
          Our Impact
        </Typography>
        <Divider sx={{ width: 100, height: 4, bgcolor: '#2E3B55', mx: 'auto', mb: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 260,
                bgcolor: '#e0e0e0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography>Placeholder: Impact Statistics Image</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Transforming Lives Through Education
            </Typography>
            <Typography sx={{ mb: 3 }}>
              By leveraging technology and innovative training methods, we enhance the skills and employability of caregivers, ultimately improving the quality of life for the elderly population.
            </Typography>
            <Box>
              {impactStats.map((stat, idx) => (
                <Typography key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box component="span" sx={{ color: '#2E3B55', fontWeight: 'bold', mr: 1 }}>✓</Box>
                  {stat}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: '#2E3B55', color: 'white', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
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
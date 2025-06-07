import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Collapse,
  TextField,
  Link,
  Container,
  Grid,
  Divider,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  PlayCircleOutline as PlayIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";
import MCQQuestionPage from "../components/MCQQuestionPage";
import CertificateResult from "../components/CertificateResult";

const LearningPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [assessmentScore, setAssessmentScore] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleTakeAssessment = (level) => {
    setCurrentLevel(level);
    setShowAssessment(true);
  };
  const handleAssessmentComplete = (score) => {
    setAssessmentScore(score);
    setShowAssessment(false);
    setShowCertificate(true);
  };

  const handleBackToCourses = () => {
    setShowAssessment(false);
    setShowCertificate(false);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  const courseData = [
    {
      id: 1,
      title: "Level 1",
      subtitle: "Beginner Foundation",
      videoLink: "https://www.youtube.com/watch?v=example1",
      summary:
        "This foundational course introduces you to the basic concepts and principles. You will learn fundamental skills that serve as building blocks for more advanced topics. The course covers essential terminology, basic operations, and introductory practices that every beginner should master.",
    },
    {
      id: 2,
      title: "Level 2",
      subtitle: "Intermediate Skills",
      videoLink: "https://www.youtube.com/watch?v=example2",
      summary:
        "Building upon Level 1, this intermediate course dives deeper into complex concepts and practical applications. You will explore advanced techniques, problem-solving strategies, and real-world scenarios. This level prepares you for professional-level challenges and introduces specialized tools and methodologies.",
    },
    {
      id: 3,
      title: "Level 3",
      subtitle: "Advanced Mastery",
      videoLink: "https://www.youtube.com/watch?v=example3",
      summary:
        "The advanced level focuses on mastery and expertise development. You will tackle complex projects, learn cutting-edge techniques, and develop the ability to innovate and lead. This course emphasizes critical thinking, advanced problem-solving, and the ability to mentor others in the field.",
    },
  ];
  if (showAssessment) {
    return (
      <MCQQuestionPage
        level={currentLevel}
        onComplete={handleAssessmentComplete}
        onBack={handleBackToCourses}
      />
    );
  }

  if (showCertificate && assessmentScore) {
    return (
      <CertificateResult
        score={assessmentScore}
        level={currentLevel}
        onBack={handleBackToCourses}
      />
    );
  }

  if (showCertificate) {
    return (
      <CertificateResult
        level={currentLevel}
        score={assessmentScore}
        onClose={handleCloseCertificate}
      />
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 1,
          }}
        >
          Course
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Choose your learning path and progress through the levels
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {courseData.map((course) => (
          <Grid item xs={12} md={4} key={course.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.subtitle}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  onClick={() => handleCardClick(course.id)}
                  endIcon={
                    <ExpandMoreIcon
                      sx={{
                        transform:
                          expandedCard === course.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  }
                  variant="outlined"
                  fullWidth
                >
                  {expandedCard === course.id ? "Hide Details" : "View Details"}
                </Button>
              </CardActions>

              <Collapse
                in={expandedCard === course.id}
                timeout="auto"
                unmountOnExit
              >
                <Divider />
                <CardContent>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <PlayIcon color="primary" />
                      Video Link
                    </Typography>
                    <Link
                      href={course.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "block",
                        p: 1,
                        bgcolor: "grey.100",
                        borderRadius: 1,
                        textDecoration: "none",
                        "&:hover": {
                          bgcolor: "grey.200",
                        },
                      }}
                    >
                      {course.videoLink}
                    </Link>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Video Summary
                    </Typography>
                    <TextField
                      multiline
                      rows={4}
                      fullWidth
                      value={course.summary}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "grey.50",
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<AssessmentIcon />}
                      onClick={() => handleTakeAssessment(course.title)}
                      sx={{
                        minWidth: 200,
                        py: 1.5,
                      }}
                    >
                      Take Assessment
                    </Button>
                  </Box>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LearningPage;

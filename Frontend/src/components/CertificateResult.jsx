import React from "react";
import { Box, Typography, Paper, Button, Container } from "@mui/material";
import {
  Download as DownloadIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";

const CertificateResult = ({ score, level, onBack }) => {
  React.useEffect(() => {
    // Add print styles when component mounts
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        .certificate-container, .certificate-container * {
          visibility: visible;
        }
        .certificate-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          padding: 40px !important;
        }
        .no-print {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        className="certificate-container"
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)",
          border: "10px solid #1976d2",
          position: "relative",
          mt: 4,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 3,
            fontFamily: "'Playfair Display', serif",
            color: "#1976d2",
            textTransform: "uppercase",
          }}
        >
          Certificate of Completion
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: "#666" }}>
          This is to certify that
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#333",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Student Name
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: "#666" }}>
          has successfully completed
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            color: "#1976d2",
            fontWeight: "bold",
          }}
        >
          {level}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: "#666" }}>
          with a score of
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            color: score.percentage >= 75 ? "#4caf50" : "#ff9800",
            fontWeight: "bold",
          }}
        >
          {score.percentage}%
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ color: "#666" }}>
            Date of Completion:
          </Typography>
          <Typography variant="h6" sx={{ color: "#333" }}>
            {currentDate}
          </Typography>
        </Box>{" "}
        <Box
          className="no-print"
          sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}
        >
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={() => window.print()}
            sx={{ minWidth: 200 }}
          >
            Download Certificate
          </Button>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
            sx={{ minWidth: 200 }}
          >
            Back to Courses
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CertificateResult;

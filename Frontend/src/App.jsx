import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import { useState } from 'react';
import { Chat as ChatIcon } from '@mui/icons-material';

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Home />
      <Footer />
      
      {/* Chatbot Floating Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        <Box
          onClick={() => setChatbotOpen(true)}
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            width: 60,
            height: 60,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 3,
            '&:hover': {
              bgcolor: 'primary.dark',
            }
          }}
        >
          <ChatIcon sx={{ fontSize: 30 }} />
        </Box>
      </Box>
      
      <Chatbot open={chatbotOpen} onClose={() => setChatbotOpen(false)} />
    </Box>
  );
}

export default App;
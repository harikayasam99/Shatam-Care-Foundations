import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Button,
  List,
  ListItem,
  Paper,
  Box,
  Typography,
  Divider
} from '@mui/material';
import { Send, Close, Language } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'mr', name: 'Marathi' }
];

const botReplies = {
  en: "This is a simulated response in English. In a real app, this would come from the Gemini API.",
  hi: "यह हिंदी में एक सिम्युलेटेड उत्तर है। असली ऐप में, यह Gemini API से आएगा।",
  mr: "हा मराठीत एक सिम्युलेटेड प्रतिसाद आहे. खऱ्या अ‍ॅपमध्ये, हा Gemini API कडून येईल."
};

const welcomeMessages = {
  en: "You've selected English. How can I help you today?",
  hi: "आपने हिंदी चुनी है। मैं आपकी किस प्रकार सहायता कर सकता हूँ?",
  mr: "आपण मराठी निवडले आहे. मी आपली कशी मदत करू शकतो?"
};

const Chatbot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [languageSelection, setLanguageSelection] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!open) {
      setMessages([]);
      setInput('');
      setSelectedLanguage(null);
      setLanguageSelection(true);
    }
  }, [open]);

  const handleSendMessage = () => {
    if (languageSelection || input.trim() === '') return;
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    setTimeout(() => {
      const botMessage = {
        text: botReplies[selectedLanguage.code],
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageSelection(false);
    setMessages([{
      text: welcomeMessages[lang.code],
      sender: 'bot'
    }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          position: 'fixed',
          bottom: 16,
          right: 16,
          margin: 0,
          maxHeight: '70vh',
          width: '400px',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: 8,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }
      }}
    >
      <DialogTitle
        sx={{
          background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 'bold',
          letterSpacing: 1,
          fontSize: '1.2rem'
        }}
      >
        Charity Support Bot
        <IconButton onClick={onClose} color="inherit">
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0, bgcolor: 'transparent' }}>
        {languageSelection ? (
          <Box sx={{ p: 4, textAlign: 'center', minHeight: 320 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              Please select your language
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant="contained"
                  startIcon={<Language />}
                  onClick={() => handleLanguageSelect(lang)}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    bgcolor: lang.code === 'en' ? '#1976d2' : lang.code === 'hi' ? '#43cea2' : '#ff9800',
                    color: 'white',
                    '&:hover': {
                      bgcolor: lang.code === 'en' ? '#115293' : lang.code === 'hi' ? '#388e7c' : '#f57c00'
                    }
                  }}
                >
                  {lang.name}
                </Button>
              ))}
            </Box>
          </Box>
        ) : (
          <>
            <List
              sx={{
                height: '300px',
                overflowY: 'auto',
                p: 2,
                background: 'rgba(255,255,255,0.7)'
              }}
            >
              {messages.map((message, index) => (
                <ListItem
                  key={index}
                  sx={{
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    px: 1
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 1.5,
                      maxWidth: '80%',
                      bgcolor: message.sender === 'user' ? 'primary.main' : '#fff',
                      color: message.sender === 'user' ? 'white' : 'text.primary',
                      borderRadius: message.sender === 'user'
                        ? '18px 18px 0 18px'
                        : '18px 18px 18px 0',
                      boxShadow: message.sender === 'user' ? 3 : 1
                    }}
                  >
                    <Typography sx={{ fontSize: '1rem' }}>{message.text}</Typography>
                  </Paper>
                </ListItem>
              ))}
              <div ref={messagesEndRef} />
            </List>

            <Divider />

            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.8)' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={{
                  mr: 1,
                  bgcolor: 'white',
                  borderRadius: 2
                }}
              />
              <IconButton
                color="primary"
                onClick={handleSendMessage}
                disabled={input.trim() === ''}
                sx={{
                  bgcolor: '#43cea2',
                  color: 'white',
                  '&:hover': { bgcolor: '#1976d2' }
                }}
              >
                <Send />
              </IconButton>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Chatbot;
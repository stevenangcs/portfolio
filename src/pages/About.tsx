// src/pages/About.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

export const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Welcome to My About Page
      </Typography>
      <Typography variant="body1">
        I'm a developer passionate about creating amazing web experiences.
      </Typography>
    </Box>
  );
};
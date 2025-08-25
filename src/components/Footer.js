import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <Typography sx={{ fontSize: '0.6rem' }} color="rgba(0, 0, 0, 0.6)" align="center" gutterBottom>
      This app is based on <a href="https://x.com/Yoyofriends_JP/status/1959570608934535475" target="_blank" rel="noopener noreferrer">this post</a> by Yoyofriends Japan.
      <br />
      Please contact <a href="https://x.com/quanon_jp" target="_blank" rel="noopener noreferrer">@quanon_jp</a> if you have any questions.
    </Typography>
  </Box>
);

export default Footer;

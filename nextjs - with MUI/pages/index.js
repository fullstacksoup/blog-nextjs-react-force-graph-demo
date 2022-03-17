import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 10 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Force Chart Demo
        </Typography>
      </Box>
    </Container>
  );
}

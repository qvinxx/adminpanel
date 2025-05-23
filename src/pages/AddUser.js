import React from 'react';
import { Box, Button, Paper, TextField, Typography, useTheme, useMediaQuery } from '@mui/material';

const AddUserPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));

  return (
    <Box>
      <Typography variant='h5' color='primary' fontWeight={'bold'} mb={1}>Add User</Typography>
      <Paper elevation={2} sx={{
        width: isSmallScreen ? '100%' : '50%',
        p: 2.5,
        borderRadius: 3
      }}>
        <Typography variant='h5' fontWeight={'bold'} mb={1}>User</Typography>
        <Typography fontSize={15} mb={1} color='gray'>Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.</Typography>
        <Typography variant='h6' fontWeight={'bold'} mb={1}>User Name</Typography>
        <Box
          component="form"
          sx={{ 
            '& .MuiOutlinedInput-root': {
              padding: '8px 12px',
              height: '50px',
              borderRadius: 3,
              pr: 0
            },
            '& .MuiOutlinedInput-input': {
              padding: '10px 0',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Input name"
          />
        </Box>

        <Box display={'flex'} flexDirection={isMobile ? 'column' : 'row'} justifyContent={'space-between'} gap={2} mt={2}>
          <Box width={'100%'}>
            <Typography variant='h6' fontWeight={'bold'} my={1}>Email</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
          <Box width={'100%'}>
            <Typography variant='h6' fontWeight={'bold'} my={1}>Handphone</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input phone number"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={isMobile ? 'column' : 'row'} justifyContent={'space-between'} gap={2} mt={2}>
          <Box width={isMobile ? '100%' : '100%'}>
            <Typography variant='h6' fontWeight={'bold'} my={1}>Purchases</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Total Purchases"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
          <Box width={isMobile ? '100%' : '100%'}>
            <Typography variant='h6' fontWeight={'bold'} my={1}>Order Quantity</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Order Quantity"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        </Box>

        <Box mt={2}>
          <Typography variant='h6' fontWeight={'bold'} my={1}>Address</Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            placeholder="Address"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                mb: 1
              },
            }}
          />
        </Box>

        <Button
          variant='contained' 
          fullWidth 
          sx={{
            borderRadius: 3,
            textTransform: 'none',
            mt: 2,
            height: '50px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Save User
        </Button>
      </Paper>
    </Box>
  );
};

export default AddUserPage;
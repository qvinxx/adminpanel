import React from 'react';
import { Box, Button, Paper, TextField, Typography, useTheme, useMediaQuery, InputAdornment } from '@mui/material';

const AddCategoriesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));

  return (
    <Box>
      <Typography variant='h5' color='primary' fontWeight={'bold'} mb={1}>Add Category</Typography>
      <Paper elevation={2} sx={{
        width: isSmallScreen ? '100%' : '50%',
        p: 2.5,
        borderRadius: 3
      }}>
        <Typography variant='h5' fontWeight={'bold'} mb={1}>Category</Typography>
        <Typography variant='h6' fontWeight={'bold'} mb={1}>Category Name</Typography>
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
            <Typography variant='h6' fontWeight={'bold'} my={1}>Slug</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input slug"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">/</InputAdornment>,
                },
              }}
            />
          </Box>
          <Box width={'100%'}>
            <Typography variant='h6' fontWeight={'bold'} my={1}>Parent</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input parent path"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">/</InputAdornment>,
                },
              }}
            />
          </Box>
        </Box>
        <Box width={isMobile ? '100%' : '100%'}>
          <Typography variant='h6' fontWeight={'bold'} my={1}>Products</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Total Products"
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '50px',
                borderRadius: 3,
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
          Save Category
        </Button>
      </Paper>
    </Box>
  );
};

export default AddCategoriesPage;
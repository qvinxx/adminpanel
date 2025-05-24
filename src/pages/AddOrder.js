import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Paper, 
  TextField, 
  Typography, 
  useTheme, 
  useMediaQuery, 
  InputAdornment, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Card, 
  CardContent,
  IconButton
} from '@mui/material';
import { CropOriginal as CropOriginalIcon, Delete as DeleteIcon } from '@mui/icons-material';
import CustomDatePicker from '../components/DatePicker';

const AddOrderPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(null);

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <Typography variant="h4" color="primary" fontWeight="bold" mb={2}>
        Add Order 
      </Typography>
      
      <Box display="flex" gap={3} flexDirection={isMobile ? 'column' : 'row'}>
        <Paper elevation={2} sx={{
          flex: 1,
          p: 3,
          borderRadius: 3,
          minWidth: isMobile ? '100%' : '50%'
        }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Order information
          </Typography>
          
          <Typography variant="body2" color="text.secondary" mb={3}>
          Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis
          </Typography>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Ordering Product
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter product name"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    height: 48
                  }
                }}
              />
            </Box>

            <Box display="flex" gap={2} flexDirection={isMobile ? 'column' : 'row'}>
              <Box flex={1}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Customer
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Customer's Name"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 48
                    }
                  }}
                />
              </Box>
              
              <Box flex={1}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Price*
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter price of product"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 48
                    }
                  }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Order Date
              </Typography>       
              <CustomDatePicker
                label="Select Date"
                value={date}
                onChange={setDate}
              />
            </Box>
          </Box>
          <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            mt: 2,
            height: 48,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 'bold'
          }}
          >
            Save Order
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddOrderPage;
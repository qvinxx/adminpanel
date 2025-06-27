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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomDatePicker from '../components/DatePicker';

const AddOrderPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  
  const [orderData, setOrderData] = useState({
    name: '',
    customer: '',
    price: '',
    date: new Date(),
    payment: 'Not Paid',
    status: 'Shipping'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1,
      ...orderData,
      date: orderData.date ? orderData.date.toLocaleDateString() : new Date().toLocaleDateString()
    };
    
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
    navigate('/orders');
  };

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
            Please fill in the order details below
          </Typography>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Ordering Product
              </Typography>
              <TextField
                fullWidth
                name="name"
                variant="outlined"
                placeholder="Enter product name"
                size="small"
                value={orderData.name}
                onChange={handleInputChange}
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
                  name="customer"
                  variant="outlined"
                  placeholder="Enter Customer's Name"
                  size="small"
                  value={orderData.customer}
                  onChange={handleInputChange}
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
                  name="price"
                  variant="outlined"
                  placeholder="Enter price of product"
                  size="small"
                  value={orderData.price}
                  onChange={handleInputChange}
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
                value={orderData.date}
                onChange={(date) => setOrderData(prev => ({...prev, date}))}
              />
            </Box>

            <Box display="flex" gap={2}>
              <Box flex={1}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Payment Status
                </Typography>
                <TextField
                  select
                  fullWidth
                  name="payment"
                  variant="outlined"
                  size="small"
                  value={orderData.payment}
                  onChange={handleInputChange}
                  SelectProps={{
                    native: true,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 48
                    }
                  }}
                >
                  <option value="Paid">Paid</option>
                  <option value="Not Paid">Not Paid</option>
                </TextField>
              </Box>
              <Box flex={1}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Order Status
                </Typography>
                <TextField
                  select
                  fullWidth
                  name="status"
                  variant="outlined"
                  size="small"
                  value={orderData.status}
                  onChange={handleInputChange}
                  SelectProps={{
                    native: true,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 48
                    }
                  }}
                >
                  <option value="Shipping">Shipping</option>
                  <option value="Cancelled">Cancelled</option>
                </TextField>
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSubmit}
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
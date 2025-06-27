import React, { useState, useCallback } from 'react';
import { 
  Box, 
  Button, 
  Paper, 
  TextField, 
  Typography, 
  useTheme, 
  useMediaQuery,  
  Card, 
  IconButton,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  Alert
} from '@mui/material';
import { CropOriginal as CropOriginalIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AddBrandsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  const [brandData, setBrandData] = useState({
    name: '',
    productCount: '',
    status: 'active',
    logo: ''
  });

  const [productImages, setProductImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrandData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!brandData.name.trim()) newErrors.name = 'Brand name is required';
    if (!brandData.productCount) newErrors.productCount = 'Product count is required';
    if (isNaN(brandData.productCount)) newErrors.productCount = 'Must be a number';
    if (productImages.length === 0) newErrors.images = 'At least one image is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + productImages.length > 4) {
      setSnackbar({
        open: true,
        message: 'Maximum 4 images allowed',
        severity: 'warning'
      });
      return;
    }
    
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file)
    }));
    
    setProductImages(prev => [...prev, ...newImages]);
    
    if (errors.images) {
      setErrors(prev => ({
        ...prev,
        images: ''
      }));
    }
  };

  const handleRemoveImage = (id) => {
    setProductImages(prev => {
      const newImages = prev.filter(img => img.id !== id);
      if (newImages.length === 0) {
        setErrors(prev => ({
          ...prev,
          images: 'At least one image is required'
        }));
      }
      return newImages;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      // Get the first image as logo (you might want to handle this differently)
      const logo = productImages[0]?.preview || '';
      
      const newBrand = {
        ...brandData,
        id: Date.now(),
        logo,
        productCount: parseInt(brandData.productCount),
        images: productImages.map(img => img.preview)
      };
      
      // Save to localStorage
      const existingBrands = JSON.parse(localStorage.getItem('brands')) || [];
      const updatedBrands = [...existingBrands, newBrand];
      localStorage.setItem('brands', JSON.stringify(updatedBrands));
      
      setSnackbar({
        open: true,
        message: 'Brand added successfully!',
        severity: 'success'
      });
      
      // Reset form
      setBrandData({
        name: '',
        productCount: '',
        status: 'active',
        logo: ''
      });
      setProductImages([]);
      
      // Navigate after delay
      setTimeout(() => navigate('/brands'), 1500);
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error saving brand: ' + error.message,
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <Typography variant="h4" color="primary" fontWeight="bold" mb={2}>
        Add Brand
      </Typography>
      
      <Box display="flex" gap={3} flexDirection={isMobile ? 'column' : 'row'}>
        <Paper elevation={2} sx={{
          flex: 1,
          p: 3,
          borderRadius: 3,
          minWidth: isMobile ? '100%' : '50%'
        }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Brand Details
          </Typography>
          
          <Typography variant="body2" color="text.secondary" mb={3}>
            Please fill in all required brand information
          </Typography>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Brand Name*
              </Typography>
              <TextField
                fullWidth
                name="name"
                value={brandData.name}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter brand name"
                size="small"
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    height: 48
                  }
                }}
              />
            </Box>
            <Box display="flex" gap={2} flexDirection={isMobile ? 'column' : 'row'} alignItems={'center'}>
              <Box flex={1}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Products Quantity*
                </Typography>
                <TextField
                  fullWidth
                  name="productCount"
                  value={brandData.productCount}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="Enter quantity"
                  size="small"
                  error={!!errors.productCount}
                  helperText={errors.productCount}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 48
                    }
                  }}
                />
              </Box>
              <Box flex={1}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Status
                </Typography>
                <Box display={'flex'} flexDirection={'column'}>
                  <RadioGroup
                    name="status"
                    value={brandData.status}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="active" control={<Radio />} label="Active" />
                    <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                  </RadioGroup>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>

        <Paper elevation={2} sx={{
          flex: 1,
          p: 3,
          borderRadius: 3,
          minWidth: isMobile ? '100%' : '50%',
        }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Brand Images
          </Typography>
          
          <Typography variant="body2" color="text.secondary" mb={3}>
            <Typography component="span" color="primary" fontWeight="bold">
              Note:
            </Typography> 
            {' '}Upload SVG, PNG, or JPG (Max 4MB per image)
          </Typography>

          {errors.images && (
            <Typography color="error" variant="body2" mb={1}>
              {errors.images}
            </Typography>
          )}

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
              gap: 2
            }}
          >
            <Card
              component="label"
              sx={{
                height: 120,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '2px dashed',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'action.hover'
                }
              }}
            >
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <CropOriginalIcon color="primary" fontSize="large" />
              <Typography color="text.secondary">
                Click to upload
              </Typography>
            </Card>

            {productImages.map((image) => (
              <Card key={image.id} sx={{ height: 120, position: 'relative' }}>
                <Box
                  component="img"
                  src={image.preview}
                  alt="Brand preview"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 1
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() => handleRemoveImage(image.id)}
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Card>
            ))}
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
            Save Brand
          </Button>
        </Paper>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddBrandsPage;
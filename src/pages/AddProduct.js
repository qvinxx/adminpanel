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

const AddProductPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const [category, setCategory] = useState('');
  const [productImages, setProductImages] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + productImages.length > 4) {
      alert('Maximum 4 images allowed');
      return;
    }
    
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file)
    }));
    
    setProductImages(prev => [...prev, ...newImages]);
  };

  const handleRemoveImage = (id) => {
    setProductImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <Typography variant="h4" color="primary" fontWeight="bold" mb={2}>
        Add Product
      </Typography>
      
      <Box display="flex" gap={3} flexDirection={isMobile ? 'column' : 'row'}>
        <Paper elevation={2} sx={{
          flex: 1,
          p: 3,
          borderRadius: 3,
          minWidth: isMobile ? '100%' : '50%'
        }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Product Details
          </Typography>
          
          <Typography variant="body2" color="text.secondary" mb={3}>
            Please fill in all required product information
          </Typography>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Product Name*
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
                  Price*
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="0.00"
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
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
                  Quantity*
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter quantity"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 48
                    }
                  }}
                />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Category*
              </Typography>
              <FormControl fullWidth size="small">
                <InputLabel id="category-label">Select Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={category}
                  label="Select Category"
                  onChange={handleCategoryChange}
                  sx={{
                    borderRadius: 2,
                    height: 48,
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center'
                    }
                  }}
                >
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="clothing">Clothing</MenuItem>
                  <MenuItem value="home-garden">Home & Garden</MenuItem>
                  <MenuItem value="sports">Sports</MenuItem>
                  <MenuItem value="toys-games">Toys & Games</MenuItem>
                </Select>
              </FormControl>
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
            Product Images
          </Typography>
          
          <Typography variant="body2" color="text.secondary" mb={3}>
            <Typography component="span" color="primary" fontWeight="bold">
              Note:
            </Typography> 
            {' '}Upload SVG, PNG, or JPG (Max 4MB per image)
          </Typography>

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
                  alt="Product preview"
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
          sx={{
            mt: 2,
            height: 48,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 'bold'
          }}
        >
          Save Product
        </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddProductPage;
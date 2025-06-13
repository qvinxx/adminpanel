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
  IconButton,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup
} from '@mui/material';
import { CropOriginal as CropOriginalIcon, Delete as DeleteIcon } from '@mui/icons-material';

const AddBrandsPage = () => {
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
                variant="outlined"
                placeholder="Enter brand name"
                size="small"
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
              <Box flex={1}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Status
                </Typography>
                <Box display={'flex'} flexDirection={'column'}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="active"
                    name="radio-buttons-group"
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
          Save
        </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddBrandsPage;
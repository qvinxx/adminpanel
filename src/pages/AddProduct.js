import React, { useState, useRef } from "react";
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
  IconButton,
} from "@mui/material";
import {
  CropOriginal as CropOriginalIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (form.images.length + files.length > 4) {
      alert("Maximum 4 images allowed");
      return;
    }

    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
    }));

    setForm((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));

    e.target.value = "";
  };

  const handleRemoveImage = (id) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img.id !== id),
    }));
  };

  const handleSave = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const newId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const newProduct = { ...form, id: newId };
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    navigate("/products");
  };

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <Typography variant="h4" color="primary" mb={2}>
        Add Product
      </Typography>

      <Box display="flex" gap={3} flexDirection={isMobile ? "column" : "row"}>
        <Paper elevation={2} sx={{ flex: 1, p: 3, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Product Details
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              name="name"
              label="Product Name*"
              placeholder="Enter product name"
              fullWidth
              size="medium"
              value={form.name}
              onChange={handleChange}
            />

            <Box
              display="flex"
              gap={2}
              flexDirection={isMobile ? "column" : "row"}
            >
              <TextField
                name="price"
                label="Price*"
                placeholder="0.00"
                fullWidth
                size="medium"
                value={form.price}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <TextField
                name="quantity"
                label="Quantity*"
                placeholder="Enter quantity"
                fullWidth
                size="medium"
                value={form.quantity}
                onChange={handleChange}
              />
            </Box>

            <FormControl fullWidth size="medium">
              <InputLabel id="category-label">Category*</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={form.category}
                label="Category*"
                onChange={handleChange}
              >
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="home-garden">Home & Garden</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="toys-games">Toys & Games</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>

        <Paper elevation={2} sx={{ flex: 1, p: 3, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Product Images
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={2}>
            <strong>Note:</strong> Upload up to 1 image (SVG, PNG, JPG)
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 2,
            }}
          >
            {form.images.length === 0 && (
              <Card
                onClick={() => fileInputRef.current.click()}
                sx={{
                  height: 120,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px dashed",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <CropOriginalIcon color="primary" fontSize="large" />
                <Typography color="text.secondary">Click to upload</Typography>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </Card>
            )}

            {form.images.map((img) => (
              <Card key={img.id} sx={{ height: 120, position: "relative" }}>
                <Box
                  component="img"
                  src={img.preview}
                  alt="Preview"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() => handleRemoveImage(img.id)}
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Card>
            ))}
          </Box>

          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleSave}
            sx={{
              mt: 3,
              height: 48,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Save Product
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

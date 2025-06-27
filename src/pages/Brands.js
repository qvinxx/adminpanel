import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { brands as initialBrands } from "../data/brandsData";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Icon from "@mui/material/Icon";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useCallback, useEffect, useState } from "react";

export default function BrandsPage() {
  const navigate = useNavigate();
  const [brands, setBrands] = useState(() => {
    // Load from localStorage or use initial data
    const savedBrands = localStorage.getItem("brands");
    return savedBrands ? JSON.parse(savedBrands) : initialBrands;
  });

  // Initialize localStorage if empty
  useEffect(() => {
    if (!localStorage.getItem("brands")) {
      localStorage.setItem("brands", JSON.stringify(initialBrands));
    }
  }, []);

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("brands", JSON.stringify(brands));
  }, [brands]);

  const getNewBrandId = useCallback(() => {
    return brands.length > 0
      ? Math.max(...brands.map((brand) => brand.id)) + 1
      : 1;
  }, [brands]);

  const handleDelete = (id) => {
    setBrands((prev) => prev.filter((brand) => brand.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/entity/edit/${id}`, {
      state: {
        storageKey: "brands",
        title: "Edit Brand",
        idKey: "id",
        redirectTo: "/brands",
        fields: [
          { name: "name", label: "Brand Name" },
          { name: "status", label: "Status", type: "select", options: ["active", "inactive"] },
          { name: "productCount", label: "Products Quantity" },
          { name: "logo", label: "Brand Logo", type: "image" },
        ],
      },
    });
  };

  const handleView = (id) => {
    navigate(`/entity/view/${id}`, {
      state: {
        storageKey: "brands",
        title: "View Brand",
        idKey: "id",
        fields: [
          { name: "name", label: "Brand Name" },
          { name: "status", label: "Status" },
          { name: "productCount", label: "Products Quantity" },
          { name: "logo", label: "Brand Logo", type: "image" },
        ],
        redirectTo: "/brands",
      },
    });
  };

  const handleAddBrand = useCallback(() => {
    navigate("/brands/add", {
      state: { nextId: getNewBrandId() },
    });
  }, [navigate, getNewBrandId]);

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" color="primary">
          Brands
        </Typography>
        <Icon
          onClick={handleAddBrand}
          color="primary"
          fontSize="large"
          sx={{ cursor: "pointer" }}
        >
          add_circle
        </Icon>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {brands.map((brand) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={brand.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }} 
                elevation={3}
              >
                <Box>
                  <CardMedia
                    component="img"
                    height="140"
                    image={brand.logo}
                    alt={brand.name}
                    sx={{ 
                      objectFit: "contain", 
                      p: 2,
                      width: '100%',
                      minWidth: 220,
                      maxWidth: 220,
                    }}
                  />
                  <CardContent>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="div"
                      sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {brand.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Products: {brand.productCount}
                    </Typography>
                    <Chip
                      label={brand.status === "active" ? "Active" : "Inactive"}
                      color={brand.status === "active" ? "success" : "default"}
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </CardContent>
                </Box>
                <CardActions sx={{ justifyContent: 'flex-start' }}>
                  <Tooltip title="View">
                    <IconButton
                      onClick={() => handleView(brand.id)}
                      size="small"
                    >
                      <VisibilityIcon fontSize="small" color="info" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton
                      onClick={() => handleEdit(brand.id)}
                      size="small"
                    >
                      <EditIcon fontSize="small" color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDelete(brand.id)}
                      size="small"
                    >
                      <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
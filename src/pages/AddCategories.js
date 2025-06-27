import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Select,
  MenuItem
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCategoriesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState({
    name: "",
    slug: "",
    parent: "",
    status: "",
    products: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveCategory = () => {
    const currentCategory =
      JSON.parse(localStorage.getItem("categories")) || [];

    const newId =
      currentCategory.length > 0
        ? Math.max(...currentCategory.map((category) => category.id)) + 1
        : 1;

    const newCategory = {
      id: newId,
      name: categoryData.name,
      slug: categoryData.slug,
      parent: categoryData.parent,
      status: categoryData.status,
      products: categoryData.products,
    };

    const updatedCategories = [...currentCategory, newCategory];

    localStorage.setItem("categories", JSON.stringify(updatedCategories));

    navigate("/categories");
  };

  return (
    <Box p={3}>
      <Typography variant="h4" color="primary" mb={2}>
        Add Category
      </Typography>
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          p: 2.5,
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" fontWeight={"bold"} mb={1}>
          Category Name
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiOutlinedInput-root": {
              padding: "8px 12px",
              height: "50px",
              borderRadius: 3,
              pr: 0,
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px 0",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Input name"
            name="name"
            value={categoryData.name}
            onChange={handleInputChange}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
          gap={2}
          mt={2}
        >
          <Box width={"100%"}>
            <Typography variant="h6" fontWeight={"bold"} my={1}>
              Slug
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input slug"
              name="slug"
              value={categoryData.slug}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">/</InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                  borderRadius: 3,
                },
              }}
            />
          </Box>
          <Box width={"100%"}>
            <Typography variant="h6" fontWeight={"bold"} my={1}>
              Parent
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input parent path"
              name="parent"
              value={categoryData.parent}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">/</InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        </Box>

        <Box width={"100%"}>
          <Typography variant="h6" fontWeight={"bold"} my={1}>
            Status
          </Typography>
          <Select
            fullWidth
            name="status"
            value={categoryData.status}
            onChange={handleInputChange}
            displayEmpty
            variant="outlined"
            sx={{
              height: "50px",
              borderRadius: 3,
            }}
          >
            <MenuItem value="" disabled>
              Select status
            </MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </Box>

        <Box width={"100%"}>
          <Typography variant="h6" fontWeight={"bold"} my={1}>
            Products
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Total Products"
            name="products"
            value={categoryData.products}
            onChange={handleInputChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "50px",
                borderRadius: 3,
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSaveCategory}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            mt: 2,
            height: "50px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Save Category
        </Button>
      </Paper>
    </Box>
  );
};

export default AddCategoriesPage;

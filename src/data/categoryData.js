import { Box, IconButton, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const useCategoryColumns = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));

  return [
    { field: 'id', headerName: 'ID', width: 1 },
    { field: 'name', headerName: 'Category Name', width: isMobile ? 150 : 220 },
    { field: 'slug', headerName: 'Slug', width: isMobile ? 120 : 180 },
    { field: 'parent', headerName: 'Parent', width: isMobile ? 120 : 180 },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: isMobile ? 120 : 182,
      renderCell: (params) => (
        params.value === 'active' ? '✅ Active' : '⚠️ Inactive'
      )
    },
    { field: 'products', headerName: 'Products', width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="View">
            <IconButton onClick={() => params.row.handleView(params.row.id)}>
              <VisibilityIcon fontSize="small" color="info" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => params.row.handleEdit(params.row.id)}>
              <EditIcon fontSize="small" color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => params.row.handleDelete(params.row.id)}>
              <DeleteIcon fontSize="small" color="error" />
            </IconButton>
          </Tooltip>
        </Box>
      )
    },
  ];
}

export const categoryRows = [
  {
    id: 1,
    name: "Electronics",
    slug: "/electronics",
    parent: "-",
    status: "active",
    products: 120,
  },
  {
    id: 2,
    name: "Laptops",
    slug: "/laptops",
    parent: "Electronics",
    status: "active",
    products: 45,
  },
  {
    id: 3,
    name: "Phones",
    slug: "/phones",
    parent: "Electronics",
    status: "inactive",
    products: 30,
  },
  {
    id: 4,
    name: "Clothing",
    slug: "/clothing",
    parent: "-",
    status: "active",
    products: 85,
  },
  {
    id: 5,
    name: "Men's Fashion",
    slug: "/mens-fashion",
    parent: "Clothing",
    status: "active",
    products: 42,
  },
  {
    id: 6,
    name: "Women's Fashion",
    slug: "/womens-fashion",
    parent: "Clothing",
    status: "active",
    products: 38,
  },
  {
    id: 7,
    name: "Home & Garden",
    slug: "/home-garden",
    parent: "-",
    status: "active",
    products: 67,
  },
  {
    id: 8,
    name: "Furniture",
    slug: "/furniture",
    parent: "Home & Garden",
    status: "active",
    products: 28,
  },
  {
    id: 9,
    name: "Kitchenware",
    slug: "/kitchenware",
    parent: "Home & Garden",
    status: "inactive",
    products: 15,
  },
  {
    id: 10,
    name: "Sports",
    slug: "/sports",
    parent: "-",
    status: "active",
    products: 53,
  },
  {
    id: 11,
    name: "Fitness",
    slug: "/fitness",
    parent: "Sports",
    status: "active",
    products: 22,
  },
  {
    id: 12,
    name: "Outdoor",
    slug: "/outdoor",
    parent: "Sports",
    status: "active",
    products: 18,
  },
  {
    id: 13,
    name: "Toys & Games",
    slug: "/toys-games",
    parent: "-",
    status: "inactive",
    products: 40,
  },
  {
    id: 14,
    name: "Educational",
    slug: "/educational",
    parent: "Toys & Games",
    status: "active",
    products: 12,
  },
];
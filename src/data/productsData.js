import { Avatar, Box, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const categoryHandlers = {
  handleView: (id) => console.log('View product', id),
  handleEdit: (id) => console.log('Edit product', id),
  handleDelete: (id) => console.log('Delete product', id),
};

const categoryImages = {
  1: '/images/earbuds.jpg',
  2: '/images/gaming-laptop.jpg',
  3: '/images/smartphone.jpg',
  4: '/images/tshirt.jpg',
  5: '/images/wallet.jpg',
  6: '/images/running-shoes.jpg',
  7: '/images/dinner-set.jpg',
  8: '/images/coffee-table.jpg',
  9: '/images/cookware.jpg',
  10: '/images/yoga-mat.jpg',
  11: '/images/dumbbells.jpg',
  12: '/images/tent.jpg',
  13: '/images/board-game.jpg',
  14: '/images/robotics-kit.jpg',
};

export const useProductsColumns = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));

  return [
    { 
      field: 'picture', 
      headerName: '', 
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Avatar 
            src={categoryImages[params.row.id]}
            variant="square"
            sx={{ width: 40, height: 40, borderRadius: 1 }}
          />
        </Box>
      )
    },
    { 
      field: 'name', 
      headerName: 'Name', 
      width: isMobile ? 150 : 220,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">{params.row.name}</Typography>
        </Box>
      )
    },
    { field: 'price', headerName: 'Price', width: isMobile ? 120 : 140 },
    { field: 'quantity', headerName: 'Quantity', width: isMobile ? 100 : 120 },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: isMobile ? 100 : 190,
      renderCell: (params) => {
        const statusText = params.row.quantity === '0' ? 'Out of Stock' : 'Available';
        return (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '80%'
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 1.5,
                py: 0.5,
                borderRadius: 6,
                minWidth: 100,
                backgroundColor: statusText === 'Available' ? 
                '#B2FFB4' :
                '#FFDCDC', 
                color: statusText === 'Available' ? 
                  '#04910C' :
                  '#FF0000',
                fontWeight: 'medium',
                fontSize: '0.75rem',
                textTransform: 'uppercase'
              }}
            >
              {statusText}
            </Box>
          </Box>
        );
      }
    },
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
            <IconButton onClick={() => categoryHandlers.handleView(params.row.id)}>
              <VisibilityIcon fontSize="small" color="info" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => categoryHandlers.handleEdit(params.row.id)}>
              <EditIcon fontSize="small" color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => categoryHandlers.handleDelete(params.row.id)}>
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
    name: "Wireless Bluetooth Earbuds",
    price: '$59.99',
    quantity: '234',
  },
  {
    id: 2,
    name: "Premium Gaming Laptop",
    price: '$1299.99',
    quantity: '0',
  },
  {
    id: 3,
    name: "Smartphone Pro Max",
    price: '$899.99',
    quantity: '56',
  },
  {
    id: 4,
    name: "Men's Casual T-Shirt",
    price: '$24.99',
    quantity: '128',
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: '$39.99',
    quantity: '0',
  },
  {
    id: 6,
    name: "Women's Running Shoes",
    price: '$79.99',
    quantity: '0',
  },
  {
    id: 7,
    name: "Ceramic Dinner Set",
    price: '$89.99',
    quantity: '42',
  },
  {
    id: 8,
    name: "Modern Coffee Table",
    price: '$199.99',
    quantity: '0',
  },
  {
    id: 9,
    name: "Non-Stick Cookware Set",
    price: '$149.99',
    quantity: '0',
    },
  {
    id: 10,
    name: "Yoga Mat",
    price: '$29.99',
    quantity: '87',
  },
  {
    id: 11,
    name: "Dumbbell Set",
    price: '$49.99',
    quantity: '23',
  },
  {
    id: 12,
    name: "Camping Tent",
    price: '$129.99',
    quantity: '15',
  },
  {
    id: 13,
    name: "Board Game Collection",
    price: '$34.99',
    quantity: '0',
  },
  {
    id: 14,
    name: "STEM Robotics Kit",
    price: '$79.99',
    quantity: '32',
  }
];
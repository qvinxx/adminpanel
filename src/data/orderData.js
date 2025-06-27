import { Avatar, Box, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const categoryHandlers = {
  handleView: (id) => console.log('View product', id),
  handleEdit: (id) => console.log('Edit product', id),
  handleDelete: (id) => console.log('Delete product', id),
};

export const useOrderColumns = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));

  return [
    { 
      field: 'orders', 
      headerName: 'Orders', 
      width: isMobile ? 160 : 210,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">{params.row.name}</Typography>
        </Box>
      )
    },
    { field: 'customer', headerName: 'Customer', width: isMobile ? 130 : 170,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2">{params.row.customer}</Typography>
        </Box>
      )
    },
    { field: 'price', headerName: 'Price', width: isMobile ? 110 : 130,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center',}}>
          <Typography variant="body2">{params.row.price}</Typography>
        </Box>
      )
     },
    { field: 'date', headerName: 'Date', width: isMobile ? 90 : 110,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
          <Typography variant="body2">{params.row.date}</Typography>
        </Box>
      )
     },
    { 
      field: 'paymentStatus', 
      headerName: 'Payment', 
      width: isMobile ? 100 : 140,
      renderCell: (params) => {
        const statusText = params.row.payment === 'Paid' ? 'Paid' : 'Unpaid';
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
                borderRadius: 2.5,
                backgroundColor: statusText === 'Paid' ? 
                  '#E6FF96' :
                  '#FFF5C5', 
                color: statusText === 'Paid' ? 
                  '#00B809' :
                  '#E27D00',
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
      field: 'status', 
      headerName: 'Status', 
      width: isMobile ? 100 : 150,
      renderCell: (params) => {
        const statusText = params.row.status === 'Shipping' ? 'Shipping' : 'Cancelled';
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
                borderRadius: 2.5,
                backgroundColor: statusText === 'Shipping' ? 
                  '#DCD2FF' :
                  '#FEC6AA', 
                color: statusText === 'Shipping' ? 
                  '#7F27FF' :
                  '#EB2B0B',
                fontWeight: 'bold',
                fontSize: '0.7rem',
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
      width: 160,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="View">
            <IconButton onClick={() => params.row.handleView(params.row.id)} size="small">
              <VisibilityIcon fontSize="small" color="info" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => params.row.handleEdit(params.row.id)} size="small">
              <EditIcon fontSize="small" color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => params.row.handleDelete(params.row.id)} size="small">
              <DeleteIcon fontSize="small" color="error" />
            </IconButton>
          </Tooltip>
        </Box>
      )
    },
  ];
}

export const productRows = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    customer: "Aman Amanow",
    price: '$59.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 2,
    name: "Premium Gaming Laptop",
    customer: "Aman Amanow",
    price: '$1299.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 3,
    name: "Smartphone Pro Max",
    customer: "Aman Amanow",
    price: '$899.99',
    date: "05/07/25",
    payment: 'Not Paid',
    status: 'Cancelled'
  },
  {
    id: 4,
    name: "Men's Casual T-Shirt",
    customer: "Aman Amanow",
    price: '$24.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 5,
    name: "Leather Wallet",
    customer: "Aman Amanow",
    price: '$39.99',
    date: "05/07/25",
    payment: 'Not Paid',
    status: 'Cancelled'
  },
  {
    id: 6,
    name: "Women's Running Shoes",
    customer: "Aman Amanow",
    price: '$79.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 7,
    name: "Ceramic Dinner Set",
    customer: "Aman Amanow",
    price: '$89.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 8,
    name: "Modern Coffee Table",
    customer: "Aman Amanow",
    price: '$199.99',
    date: "05/07/25",
    payment: 'Not Paid',
    status: 'Cancelled'
  },
  {
    id: 9,
    name: "Non-Stick Cookware Set",
    customer: "Aman Amanow",
    price: '$149.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 10,
    name: "Yoga Mat",
    customer: "Aman Amanow",
    price: '$29.99',
    date: "05/07/25",
    payment: 'Not Paid',
    status: 'Cancelled'
  },
  {
    id: 11,
    name: "Dumbbell Set",
    customer: "Aman Amanow",
    price: '$49.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 12,
    name: "Camping Tent",
    customer: "Aman Amanow",
    price: '$129.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  },
  {
    id: 13,
    name: "Board Game Collection",
    customer: "Aman Amanow",
    price: '$34.99',
    date: "05/07/25",
    payment: 'Not Paid',
    status: 'Cancelled'
  },
  {
    id: 14,
    name: "STEM Robotics Kit",
    customer: "Aman Amanow",
    price: '$79.99',
    date: "05/07/25",
    payment: 'Paid',
    status: 'Shipping'
  }
];
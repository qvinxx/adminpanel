import {
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const useCommentColumns = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));
  
  return [
    {
      field: "comments",
      headerName: "Comments",
      width: isMobile ? 300 : 400,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2">{params.row.comments}</Typography>
        </Box>
      ),
    },
    {
      field: "customer",
      headerName: "Reviewed By",
      width: isMobile ? 140 : 180,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2">{params.row.customer}</Typography>
        </Box>
      ),
    },
    {
      field: "product",
      headerName: "Product",
      width: isMobile ? 150 : 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2">{params.row.product}</Typography>
        </Box>
      ),
    },
    {
      field: "rating",
      headerName: "Rating",
      width: isMobile ? 100 : 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {[...Array(5)].map((_, index) => (
            <Typography
              key={index}
              variant="body2"
              component="span"
              sx={{
                color: index < params.row.rating ? "#ffb400" : "#ddd",
                fontSize: "1.2rem",
                lineHeight: 1,
              }}
            >
              ★
            </Typography>
          ))}
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
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
      ),
    },
  ];
};

export const commentRows = [
  {
    id: 1,
    comments: "Great product! The sound quality is amazing.",
    customer: "John Smith",
    product: "Wireless Bluetooth Earbuds",
    rating: 5,
  },
  {
    id: 2,
    comments: "The laptop overheats during gaming sessions.",
    customer: "Sarah Johnson",
    product: "Premium Gaming Laptop",
    rating: 3,
  },
  {
    id: 3,
    comments: "Excellent camera quality but battery life could be better.",
    customer: "Michael Brown",
    product: "Smartphone Pro Max",
    rating: 4,
  },
  {
    id: 4,
    comments: "Very comfortable and good quality fabric.",
    customer: "Emily Davis",
    product: "Men's Casual T-Shirt",
    rating: 5,
  },
  {
    id: 5,
    comments: "The leather feels cheap and the stitching is coming apart.",
    customer: "Robert Wilson",
    product: "Leather Wallet",
    rating: 2,
  },
  {
    id: 6,
    comments: "Perfect for my morning runs. Very comfortable.",
    customer: "Jessica Martinez",
    product: "Women's Running Shoes",
    rating: 5,
  },
  {
    id: 7,
    comments: "Beautiful design but chips easily.",
    customer: "David Anderson",
    product: "Ceramic Dinner Set",
    rating: 3,
  },
  {
    id: 8,
    comments: "Sturdy and looks great in my living room.",
    customer: "Lisa Taylor",
    product: "Modern Coffee Table",
    rating: 4,
  },
  {
    id: 9,
    comments: "Food sticks to the surface despite being non-stick.",
    customer: "Daniel Thomas",
    product: "Non-Stick Cookware Set",
    rating: 2,
  },
  {
    id: 10,
    comments: "Good thickness and provides excellent support.",
    customer: "Karen White",
    product: "Yoga Mat",
    rating: 4,
  },
  {
    id: 11,
    comments: "The weights are uneven and the grips are uncomfortable.",
    customer: "James Clark",
    product: "Dumbbell Set",
    rating: 1,
  },
  {
    id: 12,
    comments: "Easy to set up and waterproof. Great for camping.",
    customer: "Nancy Lewis",
    product: "Camping Tent",
    rating: 5,
  },
  {
    id: 13,
    comments: "Missing pieces in the box. Very disappointing.",
    customer: "Paul Walker",
    product: "Board Game Collection",
    rating: 1,
  },
  {
    id: 14,
    comments: "My kids love it! Educational and fun.",
    customer: "Amanda Young",
    product: "STEM Robotics Kit",
    rating: 5,
  },
];

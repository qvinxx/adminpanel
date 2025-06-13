import {
  Box,
  Card,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../config/Theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TrendingProductsData = [
  {
    id: "ItemID: 1",
    name: "Wireless Bluetooth Earbuds",
    price: "$59.99",
  },
  {
    id: "ItemID: 2",
    name: "Premium Gaming Laptop",
    price: "$1299.99",
  },
  {
    id: "ItemID: 3",
    name: "Smartphone Pro Max",
    price: "$899.99",
  },
  {
    id: "ItemID: 4",
    name: "Men's Casual T-Shirt",
    price: "$24.99",
  },
  {
    id: "ItemID: 5",
    name: "Leather Wallet",
    price: "$39.99",
  },
  {
    id: "ItemID: 6",
    name: "Women's Running Shoes",
    price: "$79.99",
  },
];

export const TrendingProducts = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      elevation={1}
      sx={{
        p: 4,
        borderRadius: "16px",
        height: "100%",
        width: isSmallScreen ? "100%" : "40%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Trending Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total 10.4k Visitors
          </Typography>
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <List>
        {TrendingProductsData.map((row, index) => (
          <Box>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={row.name}
                secondary={row.id}
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
                secondaryTypographyProps={{
                  fontWeight: "medium",
                }}
              />
              <ListItemText
                primary={row.price}
                primaryTypographyProps={{
                  textAlign: "right",
                  fontWeight: "medium",
                }}
              />
            </ListItem>
            <Divider/>
          </Box>
        ))}
      </List>
    </Card>
  );
};

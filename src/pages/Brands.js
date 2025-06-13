import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { brands } from "../data/brandsData";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Icon from "@mui/material/Icon";

export default function BrandsPage() {
  const navigate = useNavigate();

  const handleAddBrand = () => {
    navigate("/brands/add");
  };
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "Flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="primary" mb={2}>
          Brands
        </Typography>
        <Icon
          onClick={handleAddBrand}
          color="primary"
          fontSize="large"
          sx={{
            cursor: "pointer",
          }}
        >
          add_circle
        </Icon>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {brands.map((brand) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={brand.id}>
              <Card sx={{ width: "220px" }} elevation={3}>
                <CardMedia
                  component="img"
                  height="140"
                  image={brand.logo}
                  alt={brand.name}
                  sx={{ objectFit: "contain", padding: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
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
                <CardActions>
                  <IconButton color="primary" aria-label="edit brand">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" aria-label="delete brand">
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

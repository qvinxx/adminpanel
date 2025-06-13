import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

function AddButtonDialog({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [product, setProduct] = React.useState("");
  const [rating, setRating] = React.useState(0);

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        sx: {
          borderRadius: isMobile ? 0 : 3,
          m: isMobile ? 0 : 2,
          width: isMobile ? "100%" : "auto",
          maxWidth: isMobile ? "none" : "sm",
          minWidth: isMobile ? "100%" : "500px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: isMobile ? "22px" : "26px",
          fontWeight: "bold",
          p: isMobile ? 2 : 3,
        }}
      >
        Add Comment
      </DialogTitle>

      <DialogContent
        sx={{
          p: isMobile ? 2 : 3,
        }}
      >
        <DialogContentText sx={{ mb: 1 }}>Review</DialogContentText>
        <TextField
          required
          margin="dense"
          fullWidth
          multiline
          rows={isMobile ? 4 : 6}
          sx={{
            mb: isMobile ? 2 : 3,
            "& .MuiInputBase-root": {
              borderRadius: 3,
            },
          }}
        />

        <DialogContentText sx={{ mb: 1 }}>Reviewed By</DialogContentText>
        <TextField
          required
          label="Customer"
          fullWidth
          sx={{
            mb: isMobile ? 2 : 3,
            "& .MuiInputBase-root": {
              borderRadius: 3,
            },
          }}
        />

        <DialogContentText sx={{ mb: 1 }}>Product</DialogContentText>
        <Box sx={{ width: "100%", my: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="product-select-label">Select Product</InputLabel>
            <Select
              labelId="product-select-label"
              id="product-select"
              value={product}
              label="Select Product"
              onChange={handleProductChange}
              sx={{ borderRadius: 3 }}
            >
              <MenuItem value={10}>Product 1</MenuItem>
              <MenuItem value={20}>Product 2</MenuItem>
              <MenuItem value={30}>Product 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <DialogContentText sx={{ mb: 1 }}>Rating</DialogContentText>
        <Rating
          name="product-rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          size={isMobile ? "medium" : "large"}
          sx={{ mb: isMobile ? 1 : 2 }}
        />
      </DialogContent>

      <DialogActions
        sx={{
          px: isMobile ? 2 : 3,
          pb: isMobile ? 2 : 3,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 1 : 2,
        }}
      >
        <Button
          onClick={onClose}
          fullWidth={isMobile}
          variant={isMobile ? "outlined" : "text"}
          size={isMobile ? "large" : "medium"}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          fullWidth={isMobile}
          variant="contained"
          size={isMobile ? "large" : "medium"}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddButtonDialog;

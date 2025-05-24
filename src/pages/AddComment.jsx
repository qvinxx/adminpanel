import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Rating, Select, TextField, Typography } from "@mui/material";
import React from "react";

function AddCommentButtonFunction({ open, onClose }) {
  const [product, setAge] = React.useState('');
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onSubmit={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle fontSize={'26px'} fontWeight={'bold'}>Add Comment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Review
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          type="email"
          fullWidth
          multiline
          rows={6}
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              borderRadius: 5
            }
          }}
        />
        <DialogContentText>
          Reviewed By
        </DialogContentText>
        <TextField
          required
          label="Customer"
          fullWidth
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              borderRadius: 5
            }
          }}
        />
        <DialogContentText>
          Product
        </DialogContentText>
        <Box sx={{ 
          width: '100%', 
          my: 1,
        }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Select Product</InputLabel>
            <Select
              labe1lId="select-label"
              id="select"
              value={product}
              label="Select product"
              onChange={handleChange}
              sx={{
                borderRadius: 5
              }}
            >
              <MenuItem value={10}>***</MenuItem>
              <MenuItem value={20}>***</MenuItem>
              <MenuItem value={30}>***</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <DialogContentText>
          Rating
        </DialogContentText>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCommentButtonFunction;
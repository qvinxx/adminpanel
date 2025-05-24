import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import AddButtonFunction from "./AddComment";

export default function CommentsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="h4" fontWeight={'bold'} color="primary">Comments</Typography>
        {isMobile ? (
          <IconButton
            color="primary"
            onClick={handleClickOpen}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            <AddIcon />
          </IconButton>
        ) : (
          <Button 
            variant="contained"
            onClick={handleClickOpen}
            startIcon={<AddIcon />}
            sx={{
              height: 45,
              px: 3,
              fontWeight: "bold",
              textTransform: 'none'
            }}
          >
            New Order
          </Button>
        )}
      </Box>
      <AddButtonFunction open={open} onClose={handleClose} />
    </Box>
  );
}
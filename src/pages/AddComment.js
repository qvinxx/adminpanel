import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCommentPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const navigate = useNavigate();

  const [commentData, setCommentData] = useState({
    customer: "",
    product: "",
    rating: 0,
    comments: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (event, newValue) => {
    setCommentData((prev) => ({
      ...prev,
      rating: newValue,
    }));
  };

  const handleSaveComment = () => {
    const currentComments = JSON.parse(localStorage.getItem("comments")) || [];

    const newId = currentComments.length > 0
      ? Math.max(...currentComments.map((comment) => comment.id)) + 1
      : 1;

    const newComment = {
      id: newId,
      customer: commentData.customer,
      product: commentData.product,
      rating: commentData.rating,
      comments: commentData.comments,
      date: new Date().toISOString(),
      status: "pending"
    };

    const updatedComments = [...currentComments, newComment];
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    navigate("/comments");
  };

  return (
    <Box p={3}>
      <Typography variant="h4" color="primary" mb={2}>
        Add New Comment
      </Typography>
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          p: 2.5,
          borderRadius: 3,
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
            "& .MuiOutlinedInput-input": {
              padding: "12px 14px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <Box mb={3}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Commenter Name
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter commenter name"
              name="customer"
              value={commentData.customer}
              onChange={handleInputChange}
            />
          </Box>

          <Box mb={3}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Product
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter product name"
              name="product"
              value={commentData.product}
              onChange={handleInputChange}
            />
          </Box>

          <Box mb={3}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Rating
            </Typography>
            <Rating
              name="rating"
              value={commentData.rating}
              onChange={handleRatingChange}
              size="large"
              precision={0.5}
            />
          </Box>

          <Box mb={3}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Comment Text
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Write the comment here..."
              name="comments"
              value={commentData.comments}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleSaveComment}
            sx={{
              borderRadius: 3,
              textTransform: "none",
              mt: 2,
              height: "50px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Save Comment
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddCommentPage;
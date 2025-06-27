import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));
  const navigate = useNavigate();
  const location = useLocation();
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    orders: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveUser = () => {
    const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const newId = currentUsers.length > 0 
      ? Math.max(...currentUsers.map(user => user.id)) + 1 
      : 1;

    const newUser = {
      id: newId,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      orders: parseInt(userData.orders) || 0,
      address: userData.address,
    };

    const updatedUsers = [...currentUsers, newUser];
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    navigate("/users");
  };

  return (
    <Box>
      <Typography variant="h5" color="primary" fontWeight={"bold"} mb={1}>
        Add User
      </Typography>
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          p: 2.5,
          borderRadius: 3,
        }}
      > 
        <Typography variant="h6" fontWeight={"bold"} mb={1}>
          User Name
        </Typography>
        <TextField
          fullWidth
          name="name"
          variant="outlined"
          placeholder="Input name"
          value={userData.name}
          onChange={handleInputChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              height: '50px',
              borderRadius: 3,
            },
          }}
        />

        <Box
          display={"flex"}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
          gap={2}
          mt={2}
        >
          <Box width={"100%"}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Email
            </Typography>
            <TextField
              fullWidth
              name="email"
              variant="outlined"
              placeholder="Input email"
              value={userData.email}
              onChange={handleInputChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
          <Box width={"100%"}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Phone
            </Typography>
            <TextField
              fullWidth
              name="phone"
              variant="outlined"
              placeholder="Input phone number"
              value={userData.phone}
              onChange={handleInputChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
          gap={2}
          mt={2}
        >
          <Box width={"100%"}>
            <Typography variant="h6" fontWeight={"bold"} mb={1}>
              Orders
            </Typography>
            <TextField
              fullWidth
              name="orders"
              variant="outlined"
              placeholder="Total orders"
              type="number"
              value={userData.orders}
              onChange={handleInputChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '50px',
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" fontWeight={"bold"} mb={1}>
            Address
          </Typography>
          <TextField
            fullWidth
            name="address"
            multiline
            rows={3}
            variant="outlined"
            placeholder="Address"
            value={userData.address}
            onChange={handleInputChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
              },
            }}
          />
        </Box>

        <Button
          onClick={handleSaveUser}
          variant="contained"
          fullWidth
          disabled={!userData.name || !userData.email}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            mt: 3,
            height: "50px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Save User
        </Button>
      </Paper>
    </Box>
  );
};

export default AddUserPage;
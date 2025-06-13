import * as React from 'react';
import { 
  AppBar, 
  Box, 
  CssBaseline, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar, 
  Typography, 
  TextField, 
  InputAdornment, 
  Avatar,
  styled,
  Button,
} from '@mui/material';
import { theme } from '../config/Theme';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CopyrightIcon from '@mui/icons-material/Copyright';
import CommentIcon from '@mui/icons-material/Comment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import DashboardPage from '../pages/Dashboard';
import UsersPage from '../pages/Users';
import AddUser from '../pages/AddUser'
import CategoriesPage from '../pages/Categories';
import ProductsPage from '../pages/Products'
import BrandsPage from '../pages/Brands'
import CommentsPage from '../pages/Comments';
import OrdersPage from '../pages/Orders'
import AddCategories from '../pages/AddCategories'
import AddProductPage from '../pages/AddProduct';
import AddOrderPage from '../pages/AddOrder';
import AddBrandPage from '../pages/AddBrand';

const drawerWidth = 240;

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  padding: 0,
  '& .MuiListItemButton-root': {
    padding: '10px 16px',
    color: selected ? '#1b2055' : 'rgba(27, 32, 85, 0.6)',
    borderLeft: selected ? '4px solid #1b2055' : 'none',
    '&:hover': {
      backgroundColor: 'rgba(27, 32, 85, 0.04)',
    },
  },
  '& .MuiListItemIcon-root': {
    minWidth: '40px',
    color: selected ? '#1b2055' : 'rgba(27, 32, 85, 0.6)',
  },
}));

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const location = useLocation();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    return () => {
      setIsClosing(false);
    };
  }, [location]);

  const sidebarTabs = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { name: 'Users', icon: <PersonIcon />, path: '/users' },
    { name: 'Categories', icon: <CategoryIcon />, path: '/categories' },
    { name: 'Products', icon: <StorefrontIcon />, path: '/products' },
    { name: 'Brands', icon: <CopyrightIcon />, path: '/brands' },
    { name: 'Comments', icon: <CommentIcon />, path: '/comments' },
    { name: 'Orders', icon: <LocalShippingIcon />, path: '/orders' },
  ];

  const drawer = (
    <Box>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <Button href='/'>
          <img src='/kendirlogo.png' style={{ width: 32 }} alt="Logo" />
          <Typography m={1} color="#1b2055">App</Typography>
        </Button>
      </Toolbar>
      <Divider />
      <List sx={{ py: 1 }}>
        {sidebarTabs.map((tab) => (
          <StyledListItem 
            key={tab.path}
            selected={location.pathname === tab.path}
          >
            <ListItemButton 
              component={Link}
              to={tab.path}
              onClick={handleDrawerClose}
            >
              <ListItemIcon>
                {tab.icon}
              </ListItemIcon>
              <ListItemText primary={tab.name} />
            </ListItemButton>
          </StyledListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: theme.palette.grey[50] 
    }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#ffffff',
          boxShadow: '1 1 1',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          px: { xs: 1, sm: 2 } 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 1, 
                color: '#1b2055', 
                display: { sm: 'none' },
                '&:focus': { outline: 'none' }
              }}
            >
              <MenuIcon />
            </IconButton>
            
            <Box
              component="form"
              sx={{ 
                '& > :not(style)': { 
                  width: { xs: '20ch', sm: '30ch' }
                },
                '& .MuiOutlinedInput-root': {
                  padding: '8px 12px',
                  height: '40px',
                  borderRadius: 3,
                  pr: 0
                },
                '& .MuiOutlinedInput-input': {
                  padding: '8px 0',
                },
                mr: { xs: 1, sm: 0 }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="search-field"
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <Avatar sx={{ 
            bgcolor: '#1b2055',
            width: 36, 
            height: 36,
            fontSize: '1rem' 
          }}>A</Avatar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ 
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          zIndex: (theme) => theme.zIndex.drawer
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/categories/add" element={<AddCategories />} />
          <Route path="/products/add" element={<AddProductPage />} />
          <Route path="/orders/add" element={<AddOrderPage />} />
          <Route path="/brands/add" element={<AddBrandPage />} />
        </Routes>
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;
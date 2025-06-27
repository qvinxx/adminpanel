import { 
  Box, 
  Typography, 
  TextField, 
  Paper, 
  InputAdornment, 
  useMediaQuery, 
  useTheme, 
  Icon,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOrderColumns, productRows } from "../data/orderData";

export default function OrdersPage() {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : productRows;
  });
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const columns = useOrderColumns();

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(rows));
  }, [rows]);

  const handleDelete = (id) => {
    setRows(prev => prev.filter(row => row.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/entity/edit/${id}`, {
      state: {
        storageKey: "orders",
        title: "Edit Order",
        idKey: "id",
        redirectTo: "/orders",
        fields: [
          { name: "name", label: "Order Name" },
          { name: "customer", label: "Customer" },
          { name: "price", label: "Price" },
          { name: "date", label: "Date" },
          { name: "payment", label: "Payment", type: "select", options: ["Paid", "Unpaid"] },
          { name: "status", label: "Status", type: "select", options: ["Shipping", "Cancelled"] },
        ],
      },
    });
  };

  const handleView = (id) => {
    navigate(`/entity/view/${id}`, {
      state: {
        storageKey: "orders",
        title: "View Order",
        idKey: "id",
        fields: [
          { name: "name", label: "Order Name" },
          { name: "customer", label: "Customer" },
          { name: "price", label: "Price" },
          { name: "date", label: "Date" },
          { name: "payment", label: "Payment",},
          { name: "status", label: "Status",},
        ],
        redirectTo: "/orders",
      },
    });
  };

  const rowsWithHandlers = rows.map(row => ({
    ...row,
    handleView,
    handleEdit,
    handleDelete,
  }));

  const filteredRows = rowsWithHandlers.filter(row =>
    Object.values(row).some(
      value => String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleAddOrder = () => {
    navigate('/orders/add');
  };

  return (
    <Box sx={{ 
      px: isMobile ? 1 : 3, 
      py: 2,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.grey[50],
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
        flexWrap: 'wrap',
        gap: 1
      }}>
        <Typography variant={isMobile ? "h6" : "h4"} color="primary">
          Orders
        </Typography>
        
        <Icon
          onClick={handleAddOrder}
          color="primary"
          fontSize="large"
          sx={{
            cursor: "pointer",
            '&:hover': {
              transform: 'scale(1.1)',
              transition: 'transform 0.2s',
            }
          }}
        >
          add_circle
        </Icon>
      </Box>

      <Paper elevation={3} sx={{ 
        flex: 1, 
        width: '100%',
        borderRadius: 2, 
        p: isMobile ? 1 : 2,
        display: "flex", 
        flexDirection: "column", 
        gap: 2,
        overflow: 'hidden',
      }}>
        <Box display="flex" flexDirection={isMobile ? "column" : "row"} 
          alignItems={isMobile ? "stretch" : "center"} gap={2}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search orders..."
            size={isMobile ? "small" : "medium"}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize={isMobile ? "small" : "medium"} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
                backgroundColor: 'background.paper'
              }
            }}
          />
        </Box>

        <Box sx={{ 
          flex: 1,
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 300
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'auto',
            '& .mobile-header': {
              fontSize: '0.75rem',
              padding: '4px 8px'
            },
            '& .mobile-cell': {
              fontSize: '0.875rem',
              padding: '4px 8px'
            }
          }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              sx={{ 
                '& .MuiDataGrid-cell': {
                  py: isMobile ? 0.5 : 1,
                  alignItems: 'center',
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: theme.palette.grey[100],
                },
                '& .MuiDataGrid-virtualScroller': {
                  minHeight: 200
                }
              }}
              checkboxSelection={!isMobile}
              hideFooterSelectedRowCount
              disableColumnMenu
              density={isMobile ? "compact" : "standard"}
              disableRowSelectionOnClick
              autoHeight={false}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
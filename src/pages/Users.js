import { 
  Box, 
  Typography, 
  TextField, 
  Paper, 
  InputAdornment, 
  useMediaQuery, 
  useTheme, 
  Icon
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { userColumns, userRows } from '../data/userData';
import { useNavigate } from 'react-router-dom';

function UsersPage() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getColumns = () => {
    const baseColumns = [...userColumns];
    
    if (isMobile) {
      return baseColumns
        .filter(column => ['id', 'name', 'email', 'phone'].includes(column.field))
        .map(column => ({
          ...column,
          width: column.field === 'name' ? 150 : 100,
          headerClassName: 'mobile-header',
          cellClassName: 'mobile-cell'
        }));
    }
    
    if (isTablet) {
      return baseColumns.filter(column => !['age', 'status'].includes(column.field));
    }
    
    return baseColumns;
  };

  const filteredRows = userRows.filter(row =>
    Object.values(row).some(
      value => String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleAddUserClick = () => {
    navigate('/users/add');
  };

  return (
    <Box sx={{ 
      px: isMobile ? 1 : 3, 
      py: 2,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.grey[50]
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
          Users
        </Typography>
        
        <Icon
          onClick={handleAddUserClick}
          color="primary"
          fontSize="large"
          sx={{
            cursor: "pointer",
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
        overflow: 'hidden'
      }}>
        <Box display="flex" flexDirection={isMobile ? "column" : "row"} 
          alignItems={isMobile ? "stretch" : "center"} gap={2}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
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
              columns={getColumns()}
              sx={{ 
                '& .MuiDataGrid-cell': {
                  py: isMobile ? 0.5 : 1,
                  alignItems: ""
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

export default UsersPage;
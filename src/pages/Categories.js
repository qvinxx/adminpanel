import { 
  Box, 
  Typography, 
  TextField, 
  Paper, 
  InputAdornment, 
  Button, 
  useMediaQuery, 
  useTheme, 
  IconButton,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategoryColumns, categoryRows, } from "../data/categoryData";

export default function UsersPage() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const columns = useCategoryColumns();

  const filteredRows = categoryRows.filter(row =>
    Object.values(row).some(
      value => String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleAddCategory = () => {
    navigate('/categories/add');
  };

  return (
    <Box sx={{ 
      px: isMobile ? 1 : 3, 
      py: 2,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
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
          Categories
        </Typography>
        
        {isMobile ? (
          <IconButton
            color="primary"
            onClick={handleAddCategory}
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
            onClick={handleAddCategory}
            startIcon={<AddIcon />}
            sx={{
              height: 45,
              px: 3,
              fontWeight: "bold",
              textTransform: 'none'
            }}
          >
            Add New Category
          </Button>
        )}
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
            placeholder={isMobile ? "Search..." : "Search..."}
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
              treeData
              getTreeDataPath={(row) => row.hierarchy}
              groupingColDef={{
                headerName: 'Hierarchy',
                width: 200,
              }}
              sx={{ 
                '& .MuiDataGrid-cell': {
                  py: isMobile ? 0.5 : 1,
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: theme.palette.grey[100],
                },
                '& .MuiDataGrid-virtualScroller': {
                  minHeight: 200
                },
                '& .MuiDataGrid-row': {
                  flex: 1,
                  alignItems: "center"
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
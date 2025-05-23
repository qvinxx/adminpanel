import { Box, IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 1 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 180 },
  { field: 'phone', headerName: 'Phone number', width: 150 },
  { field: 'orders', headerName: 'Orders', width: 100 },
  { 
    field: 'address', 
    headerName: 'Address', 
    width: 250,
    renderCell: (params) => (
      <Box sx={{ whiteSpace: 'normal', }}>
        {params.value}
      </Box>
    )
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Tooltip title="View">
          <IconButton onClick={() => handleView(params.row.id)}>
            <VisibilityIcon fontSize="small" color="info" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton onClick={() => handleEdit(params.row.id)}>
            <EditIcon fontSize="small" color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon fontSize="small" color="error" />
          </IconButton>
        </Tooltip>
      </Box>
    )
  },
];

export const userRows = [
  { id: 1, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 5, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 2, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 8, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 3, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 9, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 4, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 5, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 5, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 2, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 6, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 4, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 7, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 0, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 8, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 1, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
  { id: 9, name: 'Aman Amanow', email: 'example@gmail.com', phone: '+123456789', orders: 2, address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
];

const handleView = (id) => {

};

const handleEdit = (id) => {

};

const handleDelete = (id) => {
};
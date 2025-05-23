import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { NativeSelect } from '@mui/material';

export default function CustomSelect() {
  return (
    <Box sx={{ minWidth: 120,}}>
      <FormControl fullWidth>
      <InputLabel variant="standard">Filter</InputLabel>
        <NativeSelect
          defaultValue=""
          IconComponent={ClearAllIcon}
        >
          <option value=""></option>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
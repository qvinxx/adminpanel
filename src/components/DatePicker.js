import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const CustomDatePicker = ({ label, value, onChange, sx = {} }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={(newValue) => onChange(newValue ? newValue.format('YYYY-MM-DD') : null)}
        slotProps={{
          textField: {
            variant: 'outlined',
            fullWidth: true,
            sx: {
              '& .MuiOutlinedInput-root': {
                height: '56px',
                borderRadius: '12px',
                ...sx
              }
            }
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
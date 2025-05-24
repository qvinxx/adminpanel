import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const CustomDatePicker = ({
  label,
  value,
  onChange = () => {}, // Default empty function if not provided
  sx = {},
  minDate,
  maxDate,
  disabled = false
}) => {
  const handleChange = (newValue) => {
    try {
      const formattedValue = newValue ? newValue.format('YYYY-MM-DD') : null;
      onChange(formattedValue);
    } catch (error) {
      console.error('Error formatting date:', error);
      onChange(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={handleChange}
        minDate={minDate ? dayjs(minDate) : undefined}
        maxDate={maxDate ? dayjs(maxDate) : undefined}
        disabled={disabled}
        slotProps={{
          textField: {
            variant: 'outlined',
            fullWidth: true,
            sx: {
              '& .MuiOutlinedInput-root': {
                height: '56px',
                borderRadius: '12px',
              },
            },
            error: false,
          },
          actionBar: {
            actions: ['clear', 'accept'],
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
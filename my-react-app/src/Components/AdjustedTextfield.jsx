import { TextField } from "@mui/material";

function AdjustedTextFields() {
  return (
    <TextField 
  id="outlined-basic" 
  label="" 
  variant="outlined" 
  sx={{ 
    width: '60px', 
    '& .MuiInputBase-root': { 
      height: '40px', 
      alignItems: 'center', 
    },
    '& .MuiOutlinedInput-input': { 
      height: '20px',
      padding: '0 8px',
    },
    '& .MuiInputLabel-root': { 
      top: '-6px',
    },
    '& .MuiInputLabel-outlined': { 
      transform: 'translate(14px, 20px) scale(1)', }
  }}
/>
  );
}

export default AdjustedTextFields;
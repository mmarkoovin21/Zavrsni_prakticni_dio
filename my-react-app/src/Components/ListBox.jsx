import Box from '@mui/material/Box';
import ProfessorSelectCard from './ProfessorSelectCard';

function ListBox({children}) {

  return (
    <div className="profesorsList">
        <Box
        sx={{
          width: '95%',
          height: 400,
          padding: 1,
          borderRadius: 0.8,
          bgcolor: 'grey.400',
          overflow: 'auto'
        }}
        >
          {children}
        </Box>
    </div>
  );
}

export default ListBox;
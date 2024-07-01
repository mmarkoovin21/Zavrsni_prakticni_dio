import Box from '@mui/material/Box';
import ProfessorSelectCard from './ProfessorSelectCard';

function ProfesorsList() {

  return (
    <div className="profesorsList">
        <Box
        sx={{
          width: '95%',
          height: 400,
          padding: 1,
          borderRadius: 0.8,
          bgcolor: 'grey.400',
        }}
        >
            <ProfessorSelectCard professor="Ivan Ivanović" mail="nesto@mail.com"/>
        </Box>
    </div>
  );
}

export default ProfesorsList;
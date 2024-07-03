import { Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function StudentResultsCard({ student, course }) {
  const navigate = useNavigate();

  const courseData = student.courses.find(c => c.name === course);

  function handleClick() {
    navigate('/detalji-studenta', { state: { student, course } });
  }

  return (
    <div style={{ width: '99%', marginBottom: '12px' }}>
      <Paper sx={{ border: '2px solid black', mb: '10px' }}>
        <div className='studentResultsCardContainer'>
          <img src={student.image} alt={student.imePrezime} style={{ width: '100px', height: '100px', borderRadius: '5px', marginRight: '35px' }} />
          <div style={{ width: '100%' }}>
            <Typography variant='h5' sx={{ mb: '20px' }}>
              {student.imePrezime}
            </Typography>
            {courseData && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='studentResultDetails'>
                  <Typography variant='h6'>{`Kolokvij 1: ${courseData.kolokvij1}`}</Typography>
                  <Typography variant='h6'>{`Projekt 1: ${courseData.projekt1}`}</Typography>
                  <Typography variant='h6'>{`Aktivnost: ${courseData.aktivnost}`}</Typography>
                  <Typography variant='h6'>{`Ukupno: ${courseData.ukupno}`}</Typography>
                  <Typography variant='h6'>{`Potpis: ${courseData.potpis}`}</Typography>
                  <Typography variant='h6'>{`Kolokvij 2: ${courseData.kolokvij2}`}</Typography>
                  <Typography variant='h6'>{`Projekt 2: ${courseData.projekt2}`}</Typography>
                  <Typography variant='h6'>{`Dodatni bodovi: ${courseData.dodatniBodovi}`}</Typography>
                  <Typography variant='h6'>{`Predložena ocijena: ${courseData.predlozenaOcijena}`}</Typography>
                </div>
                <Button variant='contained' color='primary' sx={{ mt: '20px' }} onClick={handleClick}>
                  Detalji
                </Button>
              </div>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default StudentResultsCard;

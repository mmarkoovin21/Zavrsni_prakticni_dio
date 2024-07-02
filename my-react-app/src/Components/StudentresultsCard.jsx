import { Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function StudentResultsCard({student}){
    const navigate = useNavigate();

    const handleDetailsClick = () => {
      navigate('/detalji-studenta', { state: { student } });
    };
    return (
        <div style={{width: '99%', marginBottom: '12px'}}>
            <Paper sx={{border: '2px solid black', mb: '10px'}}>
                <div className='studentResultsCardContainer'>
                    <img src={student.image} alt={student.imePrezime} style={{width: '100px', height: '100px', borderRadius: '5px', marginRight: '35px'}}/>
                    <div style={{width: '100%'}}>
                        <Typography variant='h5' sx={{mb: '20px'}}>
                        {student.imePrezime}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
                            <div className='studentResultDetails'>
                                <Typography variant='h6 '>{`Kolokvij 1: ${student.kolokvij1}`}</Typography>
                                <Typography variant='h6 '>{`Projekt 1: ${student.projekt1}`}</Typography>
                                <Typography variant='h6 '>{`Aktivnost: ${student.aktivnost}`}</Typography>
                                <Typography variant='h6 '>{`Ukupno: ${student.ukupno}`}</Typography>
                                <Typography variant='h6 '>{`Potpis: ${student.potpis}`}</Typography>
                                <Typography variant='h6 '>{`Kolokvij 2: ${student.kolokvij2}`}</Typography>
                                <Typography variant='h6 '>{`Projekt 2: ${student.projekt2}`}</Typography>
                                <Typography variant='h6 '>{`Dodatni bodovi: ${student.dodatniBodovi}`}</Typography>
                                <Typography variant='h6 '>{`Predložena ocijena: ${student.predlozenaOcijena}`}</Typography>
                            </div>
                            <Button variant='contained' color='primary' sx={{mt: '20px'}} onClick={handleDetailsClick}>
                                Detalji
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default StudentResultsCard;
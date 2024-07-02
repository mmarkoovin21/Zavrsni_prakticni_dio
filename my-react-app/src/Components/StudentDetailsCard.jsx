import { Paper, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

function StudentDetailsCard(){
    const location = useLocation();
    const { student } = location.state || {};

    if (!student) {
        return <Typography variant="h6">Informacije o studentu nisu dostupne.</Typography>;
    }

    return (
        <div style={{width: '99%', marginBottom: '48px'}}>
            <Paper sx={{ mb: '10px', background: '#B3E5FC'}}>
                <div className='studentResultsCardContainer'>
                    <img src={student.image} alt={student.imePrezime} style={{width: '280px', height: '280px', borderRadius: '5px', marginRight: '35px'}}/>
                    <div style={{width: '100%'}}>
                        <Typography variant='h4' sx={{mb: '20px'}}>
                        {student.imePrezime}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
                            <div className='studentDetailsContainer'>
                                <Typography variant='h6' sx={{lineHeight: '40px'}}>{`JMBAG: ${student.jmbag}`}</Typography>
                                <Typography variant='h6' sx={{lineHeight: '40px'}}>{`Broj upisanih predmeta: ${student.brUpisanihPredmeta}`}</Typography>
                                <Typography variant='h6' sx={{lineHeight: '40px'}}>{`Datum rođenja: ${student.datumRodenja}`}</Typography>
                                <Typography variant='h6' sx={{lineHeight: '40px'}}>{`Broj odslušanih predmeta: ${student.brOdslusanihPredmeta}`}</Typography>
                                <Typography variant='h6' sx={{lineHeight: '40px'}}>{`Status: ${student.status}`}</Typography>
                                <Typography variant='h6' sx={{lineHeight: '40px'}}>{`Prosjek ocjena: ${student.prosjek}`}</Typography>
                                <Typography variant='h6' sx={{lineHeight: '40px'}}>{`Email: ${student.email}`}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default StudentDetailsCard;
import { Paper, Typography, Button } from '@mui/material';

function StudentDetailsCourses({course}){
    return (
        <div style={{width: '99%', marginBottom: '12px'}}>
            <Paper sx={{border: '2px solid black', mb: '10px'}}>
                <div className='studentResultsCardContainer'>
                    <div style={{width: '100%'}}>
                        <Typography variant='h5' sx={{mb: '20px'}}>
                        {course.name}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
                            <div className='studentResultDetails'>
                                <Typography variant='h6 '>{`Kolokvij 1: ${course.kolokvij1}`}</Typography>
                                <Typography variant='h6 '>{`Projekt 1: ${course.projekt1}`}</Typography>
                                <Typography variant='h6 '>{`Aktivnost: ${course.aktivnost}`}</Typography>
                                <Typography variant='h6 '>{`Ukupno: ${course.ukupno}`}</Typography>
                                <Typography variant='h6 '>{`Potpis: ${course.potpis}`}</Typography>
                                <Typography variant='h6 '>{`Kolokvij 2: ${course.kolokvij2}`}</Typography>
                                <Typography variant='h6 '>{`Projekt 2: ${course.projekt2}`}</Typography>
                                <Typography variant='h6 '>{`Dodatni bodovi: ${course.dodatniBodovi}`}</Typography>
                                <Typography variant='h6 '>{`Predložena ocijena: ${course.predlozenaOcijena}`}</Typography>
                            </div>
                            <Button variant='contained' color='primary' sx={{mt: '20px'}}>
                                Uredi
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default StudentDetailsCourses;
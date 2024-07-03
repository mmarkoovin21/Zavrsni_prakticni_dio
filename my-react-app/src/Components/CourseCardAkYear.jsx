import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

function CourseCardAkYear({course}){
    return (
        <div style={{width: '99%'}}>
            <Paper sx={{border: '2px solid black', mb: '10px'}}>
                <div className='cardContainer'>
                    <Typography variant='h5' sx={{mb: '20px'}}>
                        {course.title}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
                        <div className='courseDetailsAkYear'>
                            <Typography variant='body'>{`Šifra predmeta: ${course.code}`}</Typography>
                            <Typography variant='body'sx={{ width: '200px' }}>{`Semestar: ${course.semester}`}</Typography>
                            <Typography variant='body'>{`${course.katedra}`}</Typography>
                            <Typography variant='body'>{`Studij: ${course.major}`}</Typography>
                            <Typography variant='body' sx={{ width: '200px' }}>{`ECTS: ${course.ects}`}</Typography>
                            <Typography variant='body' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                               {`Nastavnici: ${course.profesors.join(', ')}`}
                            </Typography>
                                                    </div>
                        <Button variant='contained' color='primary' sx={{mt: '20px'}}>
                            Detalji
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default CourseCardAkYear;
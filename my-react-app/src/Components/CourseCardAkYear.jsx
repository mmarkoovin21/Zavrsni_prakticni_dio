import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

function CourseCardAkYear({title, text}){
    return (
        <div style={{width: '99%'}}>
            <Paper sx={{border: '2px solid black', mb: '10px'}}>
                <div className='cardContainer'>
                    <Typography variant='h5' sx={{mb: '20px'}}>
                        {title}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
                        <div className='courseDetailsAkYear'>
                            <Typography variant='h6 '>{text}</Typography>
                            <Typography variant='h6 '>{text}</Typography>
                            <Typography variant='h6 '>{text}</Typography>
                            <Typography variant='h6 '>{text}</Typography>
                            <Typography variant='h6 '>{text}</Typography>
                            <Typography variant='h6 '>{text}</Typography>
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
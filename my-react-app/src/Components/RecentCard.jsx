import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function RecetCard({title, text}){
    return (
        <div style={{width: '99%'}}>
            <Paper sx={{border: '2px solid black'}}>
                <div className='cardContainer'>
                    <Typography variant='h5' sx={{mb: '10px'}}>
                        {title}
                    </Typography>
                    <Typography variant='h6 '>
                        {text}
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

export default RecetCard;
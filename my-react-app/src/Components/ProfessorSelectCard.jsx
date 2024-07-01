import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Paper, Typography } from '@mui/material';

function ProfessorSelectCard({ professor, mail }) {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div style={{width: '99%'}}>
            <Paper sx={{border: '2px solid black', display: 'flex'}}>
                <div className='cardContainer'>
                    <Typography variant='h5' sx={{mb: '10px'}}>
                        {professor}
                    </Typography>
                    <Typography variant='h6 '>
                        {mail}
                    </Typography>
                </div>
                <div>
                    <Checkbox 
                        sx={{ height: '100%', width: '100%'}}
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                </div>
            </Paper>
        </div>
    );
}

export default ProfessorSelectCard;
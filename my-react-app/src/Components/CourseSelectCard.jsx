import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Paper, Typography } from '@mui/material';

function CourseSelectCard({ name, code, semester, major }) {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div style={{width: '99%', marginBottom: '5px'}}>
            <Paper sx={{border: '2px solid black', display: 'flex'}}>
                <div className='cardContainer'>
                    <Typography variant='h5' sx={{mb: '10px'}}>
                        {name}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between', flexDirection: 'column', lineHeight: '40px'}}>
                        <Typography variant='h6 '>
                            {code}
                        </Typography>
                        <Typography variant='h6 '>
                            {major}
                        </Typography>
                        <Typography variant='h6 '>
                            {semester}
                        </Typography>
                    </div>
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

export default CourseSelectCard;
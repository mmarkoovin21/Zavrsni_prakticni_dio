import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Paper, Typography } from '@mui/material';

function CourseSelectCard({ course, onSelectChange }) {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onSelectChange(newChecked, course.id);
    };
    return (
        <div style={{width: '99%', marginBottom: '5px'}}>
            <Paper sx={{border: '2px solid black', display: 'flex'}}>
                <div className='cardContainer'>
                    <Typography variant='h5' sx={{mb: '10px'}}>
                        {course.title}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between', flexDirection: 'column', lineHeight: '40px'}}>
                        <Typography variant='h6 '>
                            {`Šifra predmeta: ${course.code}`}
                        </Typography>
                        <Typography variant='h6 '>
                            {`Studij: ${course.major}`}
                        </Typography>
                        <Typography variant='h6 '>
                            {`Semestar: ${course.semester}`}
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
import { Paper, Typography, Button } from '@mui/material';
import AdjustedTextFields from './AdjustedTextfield';
import { useState } from 'react';

function StudentsResultsInput({student, course}){
    const [courseData, setCourseData] = useState(student.courses.find(c => c.name === course));

    const handleFieldChange = (fieldName) => (event) => {
        console.log(`Updating ${fieldName} to`, event.target.value); // Debugging line
        setCourseData(prevState => {
            const updatedState = {
                ...prevState,
                [fieldName]: event.target.value,
            };
            console.log(`New state for ${fieldName}:`, updatedState); // Debugging line
            return updatedState;
        });
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
                        {courseData && (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
                                <div className='studentResultDetailsInput' style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr',}}>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}>
                                        <Typography variant='body '>Kolikvij 1:</Typography>
                                        <AdjustedTextFields value={courseData.kolokvij1} onChange={handleFieldChange('kolokvij1')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center',}}>
                                        <Typography variant='body'>Projekt 1:</Typography>
                                        <AdjustedTextFields value={courseData.projekt1} onChange={handleFieldChange('projekt1')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                        <Typography variant='body '>Aktivnost:</Typography>
                                        <AdjustedTextFields value={courseData.aktivnost} onChange={handleFieldChange('aktivnost')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                        <Typography variant='h6 '>Ukupno:</Typography>
                                        <AdjustedTextFields value={courseData.ukupno} onChange={handleFieldChange('ukupno')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                        <Typography variant='h6 '>Potpis:</Typography>
                                        <AdjustedTextFields value={courseData.potpis} onChange={handleFieldChange('potpis')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                        <Typography variant='h6 '>Kolokvij 2:</Typography>
                                        <AdjustedTextFields value={courseData.kolokvij2} onChange={handleFieldChange('kolokvij2')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                        <Typography variant='h6 '>Projekt 2:</Typography>
                                        <AdjustedTextFields value={courseData.projekt2} onChange={handleFieldChange('projekt2')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                        <Typography variant='h6 '>Dodatni bodovi:</Typography>
                                        <AdjustedTextFields value={courseData.dodatniBodovi} onChange={handleFieldChange('dodatniBodovi')} />
                                    </div>
                                    <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                        <Typography variant='h6 '>Predložena ocijena:</Typography>
                                        <AdjustedTextFields value={courseData.predlozenaOcijena} onChange={handleFieldChange('predlozenaOcijena')} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default StudentsResultsInput;
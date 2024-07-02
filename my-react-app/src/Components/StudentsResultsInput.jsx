import { Paper, Typography, Button } from '@mui/material';
import AdjustedTextFields from './AdjustedTextfield';

function StudentsResultsInput({student}){
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
                            <div className='studentResultDetailsInput' style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr',}}>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}>
                                    <Typography variant='body '>Kolikvij 1:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center',}}>
                                    <Typography variant='body'>Projekt 1:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                    <Typography variant='body '>Aktivnost:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                    <Typography variant='h6 '>Ukupno:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                    <Typography variant='h6 '>Potpis:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                    <Typography variant='h6 '>Kolokvij 2:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                    <Typography variant='h6 '>Projekt 2:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                    <Typography variant='h6 '>Dodatni bodovi:</Typography>
                                    <AdjustedTextFields />
                                </div>
                                <div style={{display: 'grid',  gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}   >
                                    <Typography variant='h6 '>Predložena ocijena:</Typography>
                                    <AdjustedTextFields />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default StudentsResultsInput;
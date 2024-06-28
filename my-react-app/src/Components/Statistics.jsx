import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import statPng1 from '../assets/statistika 1.png';
import statPng2 from '../assets/statistika 2.png';

function Statistics (){
    return (
      <div className="statistics">
      <Paper elevation={2} sx={{ width: '99%', ml: '1.2rem', backgroundColor: '#B3E5FC', py: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="statisticsText">
            <Typography variant="h5" sx={{ mb: '15px' }}>Broj aktivnih kolegija: 48 </Typography>
            <Typography variant="h5" sx={{ mb: '15px' }}>Ukupni broj kolegija: 72 </Typography>
            <Typography variant="h5" sx={{ mb: '15px' }}>Novi kolegiji ove godine: 6</Typography>
          </div>
          <img src={statPng1} alt="stat1" style={{ marginRight: '70px' }} />
        </div>
      </Paper>
      <Paper elevation={2} sx={{ width: '99%', ml: '1.2rem', backgroundColor: '#B3E5FC', py: '30px'  }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="statisticsText">
            <Typography variant="h5" sx={{mb: '15px'}}>Ukupno profesora: 84 </Typography>
            <Typography variant="h5" sx={{mb: '15px'}}>Ukupno studenata: 3754</Typography>
            <Typography variant="h5" sx={{mb: '15px'}}>Profesori na čekanju: 2</Typography>
            <Typography variant="h5" sx={{mb: '15px'}}>Studenti na čekanju: 21</Typography>
            </div>
          <img src={statPng2} alt="stat2" style={{ marginRight: '70px' }} />
        </div>
      </Paper>
    </div>
    )
}

export default Statistics;
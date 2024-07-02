import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';

function Statistics ({image, children}){
    return (
      <Paper elevation={2} sx={{ width: '80%', backgroundColor: '#B3E5FC', py: '30px', ml: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="statisticsText">
            {children}
          </div>
          <img src={image} alt="stats" style={{ marginRight: '70px' }} />
        </div>
      </Paper>
    )
}

export default Statistics;
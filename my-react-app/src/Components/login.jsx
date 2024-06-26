import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Login () {
  return (
    <div className='login-container'>
      <form>
        <Paper className='login-text-fields' elevation={3}>
            <Typography variant="h2" id="welcome-title" sx={{ width: '60%', mt: '3rem'}}>Dobrodošli u Course Manager</Typography>
            <TextField id="standard-basic" label="Korisničko ime" variant="standard" sx={{ width: '50%', mt: '1rem'}} />
            <TextField id="standard-basic" label="Lozinka" variant="standard" sx={{ width: '50%' }}/>
            <Button variant="contained" size="large">Prijavi se</Button>
        </Paper>
      </form>
    </div>
  );
}

export default Login;
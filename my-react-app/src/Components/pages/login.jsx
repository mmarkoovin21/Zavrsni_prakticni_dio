import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Link, useNavigate } from 'react-router-dom';

function Login () {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let admin = {
        username: 'mmarkovin21',
        password: 'password123'
    }

    let profesor = {
        username: 'profesor1',
        password: 'password123'
    }

    const handleLogin = () => {
        if (username === admin.username && password === admin.password) {	
            navigate('/pocetna-admin');
        } else if (username === profesor.username && password === profesor.password) {
            navigate('/pocetna-profesor');
        } else {
            alert('Pogrešno korisničko ime ili lozinka');
        }
    }

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin}>
        <Paper className='login-text-fields' elevation={3}>
            <Typography variant="h2" id="welcome-title" sx={{ width: '60%', mt: '3rem'}}>Dobrodošli u Course Manager</Typography>
            <TextField 
            id="standard-basic" 
            label="Korisničko ime" 
            variant="standard" 
            sx={{ width: '50%', mt: '1rem'}}
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />

            <TextField 
            id="standard-basic" 
            label="Lozinka" 
            variant="standard" 
             type="password"
            sx={{ width: '50%' }}
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>

            <Button type='submit' variant="contained" size="large">Prijavi se</Button>
        </Paper>
      </form>
    </div>
  );
}

export default Login;
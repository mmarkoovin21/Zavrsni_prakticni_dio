import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';
import avatarImageAdmin from '../../assets/1650496476404.jpg';
import avatarImageProfesor from '../../assets/1714330801509.jpg';

function Login() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const admin = {
    type: 'administrator',
    name: 'Magdalena Markovinović',
    username: 'mmarkovin21',
    password: 'password123',
    profilePicture: avatarImageAdmin
  };

  const profesor = {
    type: 'profesor',
    name: 'Profesor 1',
    username: 'profesor1',
    password: 'password123',
    profilePicture: avatarImageProfesor
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === admin.username && password === admin.password) {
      setUser(admin);
      navigate('/pocetna-admin');
    } else if (username === profesor.username && password === profesor.password) {
      setUser(profesor);
      navigate('/pocetna-profesor');
    } else {
      alert('Pogrešno korisničko ime ili lozinka');
      setUser(null);
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin}>
        <Paper className='login-text-fields' elevation={3}>
          <Typography variant="h2" id="welcome-title" sx={{ width: '60%', mt: '3rem' }}>Dobrodošli u Course Manager</Typography>
          <TextField
            label="Korisničko ime"
            variant="standard"
            sx={{ width: '50%', mt: '1rem' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Lozinka"
            variant="standard"
            type="password"
            sx={{ width: '50%' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit' variant="contained" size="large">Prijavi se</Button>
        </Paper>
      </form>
    </div>
  );
}

export default Login;

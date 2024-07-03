import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import StudentDetailsCard from '../StudentDetailsCard';
import StudentDetailsCourses from '../StudentDetailsCourses';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DetaljiStudenta() {
    const location = useLocation();
    const navigate = useNavigate();
    const student = location.state.student;

    const redirectToEdit = () => {
        navigate('/pregled-rezultata-studenta');
    }

    return (
        <div>
            <main style={{marginBottom: '100px'}}>
                <div className="topNavigation">
                    <Link to="/pocetna-profesor">Profesor</Link>
                    <ArrowForwardIos sx={{height: '14px'}}/>
                    <Link to="/pocetna-profesor">Administracija kolegija</Link>
                    <ArrowForwardIos sx={{height: '14px'}}/>
                    <Link to="/pregled-rezultata-studenta">Pregled rezultata studenata</Link>
                </div>
                <Typography variant="h3" sx={{marginBottom: '20px'}}>
                    Detalji studenta
                </Typography>
                <StudentDetailsCard />
                <Typography variant="h6" sx={{marginBottom: '20px'}}>
                    Upisani kolegiji:
                </Typography>
                <div className='cardListContainer'>
                    {student.courses.map((course) => (
                        <StudentDetailsCourses key={course.id} course={course} />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant='contained' color='primary' onClick={redirectToEdit}>
                        Uredi bodove
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default DetaljiStudenta;
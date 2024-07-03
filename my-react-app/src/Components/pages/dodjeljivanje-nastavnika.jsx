import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from '@mui/material';
import BasicSelect from '../BasicSelect';
import ListBox from '../ListBox';
import { listProfesors } from '../courseData';
import ProfessorSelectCard from '../ProfessorSelectCard';
import TextField from '@mui/material/TextField';

let dropdownCourse = {
    1: 'Analiza i razvoj računalnih programa',
    2: 'Razvoj programskih proizvoda',
    3: 'Razvoj windows aplikacija',
    4: 'Testiranje i kvaliteta programskih proizvoda',
};

function DodjeljivanjeNastavnika() {
    const [code, setCode] = useState('');
    const [course, setCourse] = useState('');
    const [filteredProfessors, setFilteredProfessors] = useState(listProfesors);

    useEffect(() => {
        const filterProfessors = () => {
            let filtered = listProfesors.filter(professor => {
                const matchesCode = code ? professor.code === code : true;
                const matchesCourse = course ? professor.course === course : true;
    
                return matchesCode && matchesCourse;
            });
            setFilteredProfessors(filtered);
        };
    
        filterProfessors();
    }, [code, course]);
    
    const handleClearFilters = () => {
        setCode('');
        setCourse('');
        setFilteredProfessors(listProfesors); // Reset to initial list
    };

    return (
        <main style={{marginBottom: '100px'}}>
            <div className="topNavigation">
                <Link to="/pocetna-admin">Administrator</Link>
                <ArrowForwardIos sx={{height: '14px'}}/>
                <Link to="/pocetna-admin">Katalozi</Link>
                <ArrowForwardIos sx={{height: '14px'}}/>
                <Link to="/ak-godine">Akademske godine</Link>
            </div>
            <Typography variant="h3" sx={{marginBottom: '20px'}}>
            Dostupni kolegiji u akademskoj godini
            </Typography>
            <div className='searchFilter'>
                <TextField id="outlined-search-code" label="Šifra Kolegija" type="search" value={code} onChange={(e) => setCode(e.target.value)}/>
                <BasicSelect label="Kolegij" dropdownOptions={dropdownCourse} value={course} onChange={(e) => setCourse(e.target.value)} width="30%"/>
                <Button variant="contained" color="error" onClick={handleClearFilters}>Očisti filtere</Button>
            </div>
            <div className='teachersLists'>
                <div>
                    <Typography variant="h6" sx={{marginBottom: '15px'}}>
                        Lista nastavnika koji NE predaju na predmetu:
                    </Typography>
                    <ListBox>
                        {filteredProfessors.map((professor, index) => (
                            <ProfessorSelectCard key={index} professor={professor} />
                        ))}
                    </ListBox>
                </div>
                <div>
                    <Typography variant="h6" sx={{marginBottom: '15px'}}>
                        Lista nastavnika koji predaju na predmetu:
                    </Typography>
                    <ListBox>
                        {filteredProfessors.map((professor, index) => (
                            <ProfessorSelectCard key={index} professor={professor} />
                        ))}
                    </ListBox>
                </div>
            </div>
            <div className='bottomButtons'>
                <Button variant="contained" color="primary">Dodaj Nastavnika/e</Button>
                <Button variant="contained" color="primary">Dodaj sve</Button>
                <Button variant="contained" color="error">Ukloni Nastavnika/e</Button>
                <Button variant="contained" color="error">Ukloni sve</Button>
            </div>
        </main>
    );
}

export default DodjeljivanjeNastavnika;
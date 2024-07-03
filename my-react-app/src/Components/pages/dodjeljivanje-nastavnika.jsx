import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from '@mui/material';
import BasicSelect from '../BasicSelect';
import ListBox from '../ListBox';
import { listProfesors, courses } from '../courseData'; // Assuming courses is exported from courseData
import ProfessorSelectCard from '../ProfessorSelectCard';
import TextField from '@mui/material/TextField';

let dropdownCourse = {
    1: 'Analiza i razvoj računalnih programa',
    2: 'Projektiranje informacijskih sustava',
    3: 'Razvoj windows aplikacija',
    4: 'Testiranje i kvaliteta programskih proizvoda',
};

function DodjeljivanjeNastavnika() {
    const [code, setCode] = useState('');
    const [course, setCourse] = useState('');
    const [nonCourseProfessors, setNonCourseProfessors] = useState([]);
    const [courseProfessors, setCourseProfessors] = useState([]);
    const [selectedProfessors, setSelectedProfessors] = useState(new Set());

    const handleSelectChange = (isChecked, professorId) => {
        setSelectedProfessors((prevSelected) => {
            const newSelected = new Set(prevSelected);
            if (isChecked) {
                newSelected.add(professorId);
                console.log(newSelected);
            } else {
                newSelected.delete(professorId);
            }
            return newSelected;
        });
    };

    const addSelectedProfessors = () => {
        // Filter nonCourseProfessors to find only those selected
        const toAdd = nonCourseProfessors.filter((prof) => selectedProfessors.has(prof.id));
        // Add only the selected professors to courseProfessors
        setCourseProfessors((prev) => [...prev, ...toAdd]);
        // Remove the added professors from nonCourseProfessors
        setNonCourseProfessors((prev) => prev.filter((prof) => !selectedProfessors.has(prof.id)));
        // Clear the selection
        setSelectedProfessors(new Set());
    };

    const addAllProfessors = () => {
        setCourseProfessors((prev) => [...prev, ...nonCourseProfessors]);
        setNonCourseProfessors([]);
    };

    const removeSelectedProfessors = () => {
        const toRemove = courseProfessors.filter((prof) => selectedProfessors.has(prof.id));
        setNonCourseProfessors((prev) => [...prev, ...toRemove]);
        setCourseProfessors((prev) => prev.filter((prof) => !selectedProfessors.has(prof.id)));
        setSelectedProfessors(new Set());
    };

    const removeAllProfessors = () => {
        setNonCourseProfessors((prev) => [...prev, ...courseProfessors]);
        setCourseProfessors([]);
    };

    useEffect(() => {
        if (course || code) {
            const selectedCourse = courses.find(c => c.id.toString() === course || c.code === code);
            if (selectedCourse) {
                const assignedProfessors = selectedCourse.profesors;
                const nonAssignedProfessors = listProfesors.filter(p => !assignedProfessors.includes(p));
                setNonCourseProfessors(nonAssignedProfessors);
                setCourseProfessors(assignedProfessors);
            } else {
                setNonCourseProfessors([]);
                setCourseProfessors([]);
            }
        } else {
            setNonCourseProfessors([]);
            setCourseProfessors([]);
        }
    }, [code, course]);

    const handleClearFilters = () => {
        setCode('');
        setCourse('');
        setNonCourseProfessors([]);
        setCourseProfessors([]);
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
                    {nonCourseProfessors.map((professor) => (
                        <ProfessorSelectCard
                            key={professor.id}
                            professor={professor}
                            onSelectChange={handleSelectChange}
                        />
                    ))}
                    </ListBox>
                </div>
                <div>
                    <Typography variant="h6" sx={{marginBottom: '15px'}}>
                        Lista nastavnika koji predaju na predmetu:
                    </Typography>
                    <ListBox>
                        {courseProfessors.map((professor) => (
                            <ProfessorSelectCard key={professor.id} professor={professor} onSelectChange={handleSelectChange} />
                        ))}
                    </ListBox>
                </div>
            </div>
            <div className='bottomButtons'>
            <Button variant="contained" color="primary" onClick={addSelectedProfessors}>Dodaj Nastavnika/e</Button>
                <Button variant="contained" color="primary" onClick={addAllProfessors}>Dodaj sve</Button>
                <Button variant="contained" color="error" onClick={removeSelectedProfessors}>Ukloni Nastavnika/e</Button>
                <Button variant="contained" color="error" onClick={removeAllProfessors}>Ukloni sve</Button>
            </div>
        </main>
    );
}

export default DodjeljivanjeNastavnika;
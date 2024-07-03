import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import BasicSelect from '../BasicSelect';
import StudentResultsCard from '../StudentresultsCard';
import { student1, student2, student3, student4 } from '../studentData.js';

const dropdownCourse = {
  1: 'Analiza i razvoj programa',
  2: 'Razvoj programskih proizvoda',
  3: 'Razvoj windows aplikacija',
  4: 'Testiranje i kvaliteta programskih proizvoda',
};

const dropdownSort = {
  1: 'A-Z',
  2: 'Z-A',
  3: 'Nema potpis',
  // 4: 'Uzlazno po broju bodova',
  // 5: 'Silazno po broju bodova',
};

const students = [student1, student2, student3, student4];

function PregledRezultataStudenta() {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedCourseName, setSelectedCourseName] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCourseChange = (value) => {
    const courseName = dropdownCourse[value]
    setSelectedCourse(value);
    setSelectedCourseName(courseName);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  const filterStudents = () => {
    let filtered = students.filter(student => {
      const matchesCourse = selectedCourseName ? student.courses.some(course => course.name === selectedCourseName) : false;
      const matchesText = searchText ? student.imePrezime.toLowerCase().includes(searchText.toLowerCase()) : true;
      return matchesCourse && matchesText;
    });

    switch (selectedSort) {
      case '1':
        filtered.sort((a, b) => a.imePrezime.localeCompare(b.imePrezime));
        break;
      case '2':
        filtered.sort((a, b) => b.imePrezime.localeCompare(a.imePrezime));
        break;
      case '3':
        filtered = filtered.filter(student => student.courses.some(course => course.name === selectedCourseName && course.potpis === 'NE'));
        break;
      default:
        break;
    }

    setFilteredStudents(filtered);
  };

  const resetFilters = () => {
    setSelectedCourse('');
    setSearchText('');
    setSelectedSort('');
    setSelectedCourseName('');
    setFilteredStudents([]);
  };

  useEffect(() => {
    filterStudents();
  }, [searchText, selectedCourse, selectedSort, selectedCourseName]);

  return (
    <div>
      <main style={{ marginBottom: '100px' }}>
        <div className="topNavigation">
          <Link to="/pocetna-profesor">Profesor</Link>
          <ArrowForwardIos sx={{ height: '14px' }} />
          <Link to="/pocetna-profesor">Administracija kolegija</Link>
          <ArrowForwardIos sx={{ height: '14px' }} />
          <Link to="/pregled-rezultata-studenta">Pregled rezultata studenata</Link>
        </div>
        <Typography variant="h3" sx={{ marginBottom: '20px' }}>
          Dostupni kolegiji u akademskoj godini
        </Typography>
        <div className='searchFilter'>
          <BasicSelect label="Kolegij" dropdownOptions={dropdownCourse} value={selectedCourse} onChange={(e) => handleCourseChange(e.target.value)} width='30rem' />
          <BasicSelect label="Sortiranje" dropdownOptions={dropdownSort} value={selectedSort} onChange={(e) => handleSortChange(e.target.value)} />
          <TextField id="outlined-search" label="Pretraži" type="search" value={searchText} onChange={handleSearchChange} />
          <Button variant="contained" color="error" onClick={resetFilters}>Očisti filtere</Button>
        </div>
        <div className='cardListContainer'>
          <Typography variant="h6" sx={{ marginBottom: '15px' }}>
            Rezultati studenata:
          </Typography>
          {filteredStudents.length === 0 && (
            <Typography variant="body1" sx={{ marginBottom: '15px' }}>
              Odaberite kolegij.
            </Typography>
          )}
          {filteredStudents.map((student, index) => (
            <StudentResultsCard key={index} student={student} course={selectedCourseName} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default PregledRezultataStudenta;

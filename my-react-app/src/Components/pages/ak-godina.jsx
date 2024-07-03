import { Link } from 'react-router-dom';
import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from '@mui/material';
import BasicSelect from '../BasicSelect';
import TextField from '@mui/material/TextField';
import CourseCardAkYear from '../CourseCardAkYear';
import { courses } from '../courseData';
import { useEffect, useState } from 'react';

let dropdownOptions = {
  2020: '2020',
  2021: '2021',
  2022: '2022',
  2023: '2023',
  2024: '2024',
};

function AkGodina() {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchText, setSearchText] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleYearChange = (year) => {
    setSelectedYear(parseInt(year, 10));
  };

  const filterCourses = () => {
    const filtered = courses.filter(course => {
      const matchesYear = selectedYear ? course.years.includes(parseInt(selectedYear, 10)) : true;
      const matchesText = searchText ? course.title.toLowerCase().includes(searchText.toLowerCase()) : true;
      return matchesYear && matchesText;
    });
    setFilteredCourses(filtered);
    console.log(filtered);
  };

  const resetFilters = () => {
    setSelectedYear('');
    setSearchText('');
    filterCourses();
  };

  useEffect(() => {
    filterCourses();
  }, [searchText, selectedYear]);

  console.log('Rendering AkGodina');
  return (
    <div>
      <main>
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
          <BasicSelect label="Godina" value={selectedYear} dropdownOptions={dropdownOptions} onChange={(e) => handleYearChange(e.target.value)}/>
          <TextField  id="outlined-search" label="Pretraži" type="search" onChange={handleSearchChange}/>
          <Button variant="contained" color="error" onClick={resetFilters}>Očisti filtere</Button>
        </div>
        <div className='cardListContainer'>
          <Typography variant="h6" sx={{marginBottom: '15px'}}>
            Dostupni kolegiji:
          </Typography>
          {filteredCourses.map((course, index) => {
            return <CourseCardAkYear key={index} course={course}/>
          })}
        </div>
      </main>
    </div>
  );
}

export default AkGodina;
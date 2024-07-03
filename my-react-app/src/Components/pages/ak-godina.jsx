import { Link } from 'react-router-dom';
import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from '@mui/material';
import BasicSelect from '../BasicSelect';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CourseCardAkYear from '../CourseCardAkYear';
import { courses } from '../courseData';

let dropdownOptions = {
  2020: '2020',
  2021: '2021',
  2022: '2022',
  2023: '2023',
  2024: '2024',
};

function AkGodina() {
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
          <BasicSelect label="Godina" dropdownOptions={dropdownOptions}/>
          <TextField  id="outlined-search" label="Pretraži" type="search"/>
          <IconButton color="primary" aria-label="search" component="span">
            <SearchIcon />
          </IconButton>
          <Button variant="contained" color="error">Očisti filtere</Button>
        </div>
        <div className='cardListContainer'>
          <Typography variant="h6" sx={{marginBottom: '15px'}}>
            Dostupni kolegiji:
          </Typography>
          {courses.map((course, index) => {
            return <CourseCardAkYear key={index} course={course}/>
          })}
        </div>
      </main>
    </div>
  );
}

export default AkGodina;
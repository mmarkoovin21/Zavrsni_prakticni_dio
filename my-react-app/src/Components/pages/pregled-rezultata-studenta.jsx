import { Link } from 'react-router-dom';
import { Typography, Button, IconButton } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import BasicSelect from '../BasicSelect';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

let dropdownYear = {
  2020: '2020',
  2021: '2021',
  2022: '2022',
  2023: '2023',
  2024: '2024',
};

let dropdownCourse = {
  1: 'Analiza i razvoj računalnih programa',
  2: 'Razvoj programskih proizvoda',
  3: 'Razvoj windows aplikacija',
  4: 'Testiranje i kvaliteta programskih prioizvoda',
};

let dropdownSort = {
  1: 'A-Z',
  2: 'Z-A',
  3: 'Nema potpis',
  4: 'Uzlazno po broju bodova',
  5: 'Silazno po broju bodova',
};

function PregledRezultataStudenta() {
  return (
    <div>
        <main style={{marginBottom: '100px'}}>
          <div className="topNavigation">
          <Link to="/pocetna-profesor">Profesor</Link>
          <ArrowForwardIos sx={{height: '14px'}}/>
          <Link to="/pocetna-profesor">Katalozi</Link>
          <ArrowForwardIos sx={{height: '14px'}}/>
          <Link to="/pregled-rezultata-studenta">Pregled rezultata studenata</Link>
          </div>
          <Typography variant="h3" sx={{marginBottom: '20px'}}>
          Dostupni kolegiji u akademskoj godini
          </Typography>
          <div className='searchFilter'>
          <BasicSelect label="Godina" dropdownOptions={dropdownYear}/>
          <BasicSelect label="Kolegij" dropdownOptions={dropdownCourse} width='30rem'/>
          <BasicSelect label="Sortiranje" dropdownOptions={dropdownSort}/>
          <TextField  id="outlined-search" label="Pretraži" type="search"/>
          <IconButton color="primary" aria-label="search" component="span">
              <SearchIcon />
          </IconButton>
          <Button variant="contained" color="error">Očisti filtere</Button>
          </div>
        </main>
    </div>
  );
}

export default PregledRezultataStudenta;
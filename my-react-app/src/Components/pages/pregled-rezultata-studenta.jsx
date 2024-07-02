import { Link } from 'react-router-dom';
import { Typography, Button, IconButton } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import BasicSelect from '../BasicSelect';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import StudentResultsCard from '../StudentresultsCard';
import studentPicture1 from '../../assets/1650496476404.jpg';
import studentPicture2 from '../../assets/1714330801509.jpg';
import studentPicture3 from '../../assets/WIN_20230331_16_25_14_Pro.jpg';
import studentPicture4 from '../../assets/at  first......jpeg';

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

let student1 = {
  imePrezime: 'Magdalena Markovinović',
  kolokvij1: '10',
  kolokvij2: '10',
  projekt1: '10',
  projekt2: '10',
  aktivnost: '10',
  dodatniBodovi: '10',
  ukupno: '60',
  predlozenaOcijena: '3',
  potpis: 'DA',
  image: studentPicture1
}

let student2 = {
  imePrezime: 'Ante Bakula',
  kolokvij1: '10',
  kolokvij2: '10',
  projekt1: '10',
  projekt2: '10',
  aktivnost: '10',
  dodatniBodovi: '10',
  ukupno: '60',
  predlozenaOcijena: '3',
  potpis: 'DA',
  image: studentPicture2
}

let student3 = {
  imePrezime: 'David Matijanić',
  kolokvij1: '15',
  kolokvij2: '18',
  projekt1: '19',
  projekt2: '30',
  aktivnost: '10',
  dodatniBodovi: '',
  ukupno: '93',
  predlozenaOcijena: '5',
  potpis: 'DA',
  image: studentPicture3
}


let student4 = {
  imePrezime: 'Frano Šimić',
  kolokvij1: '3',
  kolokvij2: '5',
  projekt1: '4',
  projekt2: '12',
  aktivnost: '0',
  dodatniBodovi: '',
  ukupno: '24',
  predlozenaOcijena: '1',
  potpis: 'NE',
  image: studentPicture4
}

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
          <div className='cardListContainer'>
            <Typography variant="h6" sx={{marginBottom: '15px'}}>
              Rezultati studenata:
            </Typography>
            <StudentResultsCard student={student1}/>
            <StudentResultsCard student={student2}/>
            <StudentResultsCard student={student3}/>
            <StudentResultsCard student={student4}/>
          </div>
        </main>
    </div>
  );
}

export default PregledRezultataStudenta;
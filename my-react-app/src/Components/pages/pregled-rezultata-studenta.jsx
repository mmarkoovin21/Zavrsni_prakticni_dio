import { Link } from 'react-router-dom';
import { Typography, Button, IconButton } from '@mui/material';
import { ArrowForwardIos, Email } from '@mui/icons-material';
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

let courses1 =  [
  {
    id: 1,
    name: 'Testiranje i kvaliteta programskih proizvoda',
    kolokvij1: 10,
    kolokvij2: 10,
    projekt1: 10,
    projekt2: 10,
    aktivnost: 10,
    dodatniBodovi: 10,
    ukupno: 60,
    predlozenaOcijena: 3,
    potpis: 'DA',
  },
  {
    id: 2,
    name: 'Razvoj programskih proizvoda',
    kolokvij1: 10,
    kolokvij2: 10,
    projekt1: 10,
    projekt2: 10,
    aktivnost: 10,
    dodatniBodovi: 10,
    ukupno: 60,
    predlozenaOcijena: 3,
    potpis: 'DA',
  },
  {
    id: 3,
    name: 'Analiza i razvoj računalnih programa',
    kolokvij1: 10,
    kolokvij2: 10,
    projekt1: 10,
    projekt2: 10,
    aktivnost: 10,
    dodatniBodovi: 10,
    ukupno: 60,
    predlozenaOcijena: 3,
    potpis: 'DA',
  },
  {
    id: 4,
    name: 'Razvoj programskih proizvoda',
    kolokvij1: 10,
    kolokvij2: 10,
    projekt1: 10,
    projekt2: 10,
    aktivnost: 10,
    dodatniBodovi: 10,
    ukupno: 60,
    predlozenaOcijena: 3,
    potpis: 'DA',
  },
];

let student1 = {
  imePrezime: 'Magdalena Markovinović',
  jmbag: '0036475863',
  datumRodenja: '12.12.2002.',
  status: 'Redovni',
  email: 'mmarkovin21@foi.hr',
  brUpisanihPredmeta: '24',
  brOdslusanihPredmeta: '23',
  courses: courses1,
  image: studentPicture1,
  prosjek: '4.1'
}

let student2 = {
  imePrezime: 'Ante Bakula',
  jmbag: '0016073564',
  datumRodenja: '12.20.1998.',
  status: 'Izvanredni',
  email: 'abakula19@foi.hr',
  brUpisanihPredmeta: '24',
  brOdslusanihPredmeta: '20',
  courses: courses1,
  image: studentPicture2,
  prosjek: '2.9'
}

let student3 = {
  imePrezime: 'David Matijanić',
  jmbag: '0017109928',
  datumRodenja: '02.01.2002.',
  status: 'Redovni',
  email: 'dmatijani21@foi.hr',
  brUpisanihPredmeta: '24',
  brOdslusanihPredmeta: '20',
  courses: courses1,
  image: studentPicture3,
  prosjek: '4.5'
}


let student4 = {
  imePrezime: 'Frano Šimić',
  jmbag: '0016129837',
  datumRodenja: '25.02.2002.',
  status: 'Redovni',
  email: 'fsimic21@foi.hr',
  brUpisanihPredmeta: '24',
  brOdslusanihPredmeta: '22',
  courses: courses1,
  image: studentPicture4,
  prosjek: '3.5'
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
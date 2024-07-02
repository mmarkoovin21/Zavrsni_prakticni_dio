import { Link } from 'react-router-dom';
import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from '@mui/material';
import BasicSelect from '../BasicSelect';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ListBox from '../ListBox';
import CourseSelectCard from '../CourseSelectCard';

let dropdownYear = {
  2020: '2020',
  2021: '2021',
  2022: '2022',
  2023: '2023',
  2024: '2024',
};

function Izvodjenjepredmeta() {
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
        <BasicSelect label="Godina" dropdownOptions={dropdownYear} width="20rem"/>
        <IconButton color="primary" aria-label="search" component="span">
            <SearchIcon />
        </IconButton>
        <Button variant="contained" color="error">Očisti filtere</Button>
        </div>
        <div className='teachersLists'>
            <div>
                <Typography variant="h6" sx={{marginBottom: '15px'}}>
                    Predmeti koji se NE izvode:
                </Typography>
                <ListBox>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                </ListBox>
            </div>
            <div>
                <Typography variant="h6" sx={{marginBottom: '15px'}}>
                    Predmeti koji se izbvode:
                </Typography>
                <ListBox>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                    <CourseSelectCard name="Razvoj programskih proizbbvoda" code="Šifra predmeta: 82157" semester="Semestar: 5" major="Studij: Informacijski i poslovni sustavi 1.2 (IPS)"/>
                </ListBox>
            </div>
        </div>
        <div className='bottomButtons'>
                <Button variant="contained" color="primary">Dodaj Predmet/e</Button>
                <Button variant="contained" color="primary">Dodaj sve</Button>
                <Button variant="contained" color="error">Ukloni Predmet/e</Button>
                <Button variant="contained" color="error">Ukloni sve</Button>
        </div>
    </main>
);
}

export default Izvodjenjepredmeta;
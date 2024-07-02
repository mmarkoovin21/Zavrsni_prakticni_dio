import { Link } from 'react-router-dom';
import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from '@mui/material';
import BasicSelect from '../BasicSelect';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ListBox from '../ListBox';
import ProfessorSelectCard from '../ProfessorSelectCard';

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

let dropdownCode = {
    1: '82157',
    2: '45634',
    3: '56781',
    4: '12134',
};

function DodjeljivanjeNastavnika() {
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
                <BasicSelect label="Godina" dropdownOptions={dropdownYear}/>
                <BasicSelect label="Šifra" dropdownOptions={dropdownCode}/>
                <BasicSelect label="Kolegij" dropdownOptions={dropdownCourse} width="30%"/>
                <TextField  id="outlined-search" label="Pretraži" type="search"/>
                <IconButton color="primary" aria-label="search" component="span">
                    <SearchIcon />
                </IconButton>
                <Button variant="contained" color="error">Očisti filtere</Button>
            </div>
            <div className='teachersLists'>
                <div>
                    <Typography variant="h6" sx={{marginBottom: '15px'}}>
                        Lista nastavnika koji NE predaju na predmetu:
                    </Typography>
                    <ListBox>
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
                    </ListBox>
                </div>
                <div>
                    <Typography variant="h6" sx={{marginBottom: '15px'}}>
                        Lista nastavnika koji predaju na predmetu:
                    </Typography>
                    <ListBox>
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
                        <ProfessorSelectCard professor="Ivan Ivanović" mail="prof.prof@foi.hr" />
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
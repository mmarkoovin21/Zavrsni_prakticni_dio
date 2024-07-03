import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography } from '@mui/material';
import BasicSelect from '../BasicSelect';
import ListBox from '../ListBox';
import { courses } from '../courseData';
import CourseSelectCard from '../CourseSelectCard';

let dropdownYear = {
    2020: '2020',
    2021: '2021',
    2022: '2022',
    2023: '2023',
    2024: '2024',
};

function Izvodjenjepredmeta() {
    const [year, setYear] = useState('');
    const [nonYearCourses, setNonYearCourses] = useState([]);
    const [yearCourses, setYearCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState(new Set());

    const handleSelectChange = (isChecked, courseId) => {
        setSelectedCourses((prevSelected) => {
            const newSelected = new Set(prevSelected);
            if (isChecked) {
                newSelected.add(courseId);
            } else {
                newSelected.delete(courseId);
            }
            return newSelected;
        });
    };

    const addSelectedCourses = () => {
        const toAdd = nonYearCourses.filter((course) => selectedCourses.has(course.id));
        setYearCourses((prev) => [...prev, ...toAdd]);
        setNonYearCourses((prev) => prev.filter((course) => !selectedCourses.has(course.id)));
        setSelectedCourses(new Set());
    };

    const addAllCourses = () => {
        setYearCourses((prev) => [...prev, ...nonYearCourses]);
        setNonYearCourses([]);
    };

    const removeSelectedCourses = () => {
        const toRemove = yearCourses.filter((course) => selectedCourses.has(course.id));
        setNonYearCourses((prev) => [...prev, ...toRemove]);
        setYearCourses((prev) => prev.filter((course) => !selectedCourses.has(course.id)));
        setSelectedCourses(new Set());
    };

    const removeAllCourses = () => {
        setNonYearCourses((prev) => [...prev, ...yearCourses]);
        setYearCourses([]);
    };

    useEffect(() => {
        if (year) {
            const selectedYear = parseInt(year);
            const assignedCourses = courses.filter((course) => course.years.includes(selectedYear));
            const nonAssignedCourses = courses.filter((course) => !course.years.includes(selectedYear));
            setNonYearCourses(nonAssignedCourses);
            setYearCourses(assignedCourses);
        } else {
            setNonYearCourses([]);
            setYearCourses([]);
        }
    }, [year]);

    const handleClearFilters = () => {
        setYear('');
        setNonYearCourses([]);
        setYearCourses([]);
    };

    return (
        <main style={{ marginBottom: '100px' }}>
            <div className="topNavigation">
                <Link to="/pocetna-admin">Administrator</Link>
                <ArrowForwardIos sx={{ height: '14px' }} />
                <Link to="/pocetna-admin">Katalozi</Link>
                <ArrowForwardIos sx={{ height: '14px' }} />
                <Link to="/ak-godine">Akademske godine</Link>
            </div>
            <Typography variant="h3" sx={{ marginBottom: '20px' }}>
                Dostupni kolegiji u akademskoj godini
            </Typography>
            <div className='searchFilter'>
                <BasicSelect
                    label="Godina"
                    dropdownOptions={dropdownYear}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    width="20rem"
                />
                <Button variant="contained" color="error" onClick={handleClearFilters}>Očisti filtere</Button>
            </div>
            <div className='teachersLists'>
                <div>
                    <Typography variant="h6" sx={{ marginBottom: '15px' }}>
                        Predmeti koji se NE izvode:
                    </Typography>
                    <ListBox>
                        {nonYearCourses.map((course) => (
                            <CourseSelectCard
                                key={course.id}
                                course={course}
                                onSelectChange={handleSelectChange}
                            />
                        ))}
                    </ListBox>
                </div>
                <div>
                    <Typography variant="h6" sx={{ marginBottom: '15px' }}>
                        Predmeti koji se izvode:
                    </Typography>
                    <ListBox>
                        {yearCourses.map((course) => (
                            <CourseSelectCard
                                key={course.id}
                                course={course}
                                onSelectChange={handleSelectChange}
                            />
                        ))}
                    </ListBox>
                </div>
            </div>
            <div className='bottomButtons'>
                <Button variant="contained" color="primary" onClick={addSelectedCourses}>Dodaj Predmet/e</Button>
                <Button variant="contained" color="primary" onClick={addAllCourses}>Dodaj sve</Button>
                <Button variant="contained" color="error" onClick={removeSelectedCourses}>Ukloni Predmet/e</Button>
                <Button variant="contained" color="error" onClick={removeAllCourses}>Ukloni sve</Button>
            </div>
        </main>
    );
}

export default Izvodjenjepredmeta;

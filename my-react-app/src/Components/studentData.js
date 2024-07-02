import studentPicture1 from '../assets/1650496476404.jpg';
import studentPicture2 from '../assets/1714330801509.jpg';
import studentPicture3 from '../assets/WIN_20230331_16_25_14_Pro.jpg';
import studentPicture4 from '../assets/at  first......jpeg';

export const courses1 =  [
    {
        id: 1,
        name: 'Testiranje i kvaliteta programskih proizvoda',
        kolokvij1: 10,
        kolokvij2: 10,
        projekt1: 10,
        projekt2: 10,
        aktivnost: 10,
        dodatniBodovi: 'nema',
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
        dodatniBodovi: 'nema',
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
        dodatniBodovi: 'nema',
        ukupno: 60,
        predlozenaOcijena: 3,
        potpis: 'DA',
    },
];

export const courses2 =  [
    {
        id: 1,
        name: 'Testiranje i kvaliteta programskih proizvoda',
        kolokvij1: 13,
        kolokvij2: 16,
        projekt1: 19,
        projekt2: 30,
        aktivnost: 10,
        dodatniBodovi: 'nema',
        ukupno: 88,
        predlozenaOcijena: 4,
        potpis: 'DA',
    },
    {
        id: 2,
        name: 'Razvoj programskih proizvoda',
        kolokvij1: 14,
        kolokvij2: 11.5,
        projekt1: 16.5,
        projekt2: 19,
        aktivnost: 10,
        dodatniBodovi: 'nema',
        ukupno: 71,
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
        dodatniBodovi: 'nema',
        ukupno: 60,
        predlozenaOcijena: 3,
        potpis: 'DA',
    },
];

export const oneCourse =  [
    {
        id: 1,
        name: 'Razvoj web aplikacija',
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
  
export const student1 = {
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
  
export const student2 = {
    imePrezime: 'Ante Bakula',
    jmbag: '0016073564',
    datumRodenja: '12.20.1998.',
    status: 'Izvanredni',
    email: 'abakula19@foi.hr',
    brUpisanihPredmeta: '24',
    brOdslusanihPredmeta: '20',
    courses: oneCourse,
    image: studentPicture2,
    prosjek: '2.9'
}
  
export const student3 = {
    imePrezime: 'David Matijanić',
    jmbag: '0017109928',
    datumRodenja: '02.01.2002.',
    status: 'Redovni',
    email: 'dmatijani21@foi.hr',
    brUpisanihPredmeta: '24',
    brOdslusanihPredmeta: '20',
    courses: courses2,
    image: studentPicture3,
    prosjek: '4.5'
}
  
  
export const student4 = {
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
    export const listProfesors = [
        {
            id: 1,
            name: 'Kitinić Valentina',
            title: 'prof. dr. sc.',
            email: 'vkirinic@foi.hr',
        },
        {
            id: 2,
            name: 'Mijač Marko',
            title: 'doc. dr. sc.',
            email: 'mmarko@foi.hr',
        },
        {
            id: 3,
            name: 'Berket Marijana',
            title: 'doc. dr. sc.',
            email: 'bmarijana@foi.hr',
        },
        {
            id: 4,
            name: 'Andročec Darko',
            title: 'prof. dr. sc.',
            email: 'adarko@foi.hr',
        },
        {
            id: 5,
            name: 'Strahonja Vjeran',
            title: 'prof. dr. sc.',
            email: 'vstrahonjaa@foi.hr',
        },
        {
            id: 6,
            name: 'Oreški Dijana',
            title: 'prof. dr. sc.',
            email: 'doreski@foi.hr',
        },
        {
            id: 7,
            name: 'Stapić Zlatko',
            title: 'prof. dr. sc.',
            email: 'zstapic@foi.hr',
        },
        {
            id: 8,
            name: 'Masnec Lea',
            title: 'doc. dr. sc.',
            email: 'lmasnec@foi.hr',
        },
        {
            id: 9,
            name: 'Takač Kristina',
            title: 'doc. dr. sc.',
            email: 'ktakač@foi.hr',
        },
        {
            id: 10,
            name: 'Klarić Vedran',
            title: 'doc. dr. sc.',
            email: 'vklaric@foi.hr',
        },
        {
            id: 11,
            name: 'Vrček Neven',
            title: 'prof. dr. sc.',
            email: 'nvrcek@foi.hr',
        },
    ];

    export const courses = [
        {
            id: 1,
            title: 'Testiranje i kvaliteta programskih proizvoda',
            code: '82157',
            major: 'Informacijski i poslovni sustavi 1.2 (IPS)',
            semester: 6,
            ects: 6,
            katedra: 'Katedra za razvoj informacisjkih sustava',
            profesors: [listProfesors[0], listProfesors[1], listProfesors[2]],	
            years: [2020, 2021, 2022, 2023, 2024],
        },
        {
            id: 2,
            title: 'Projektiranje informacijskih sustava',
            code: '574978',
            major: 'Informacijski i poslovni sustavi 1.2 (IPS)',
            semester: 3,
            ects: 7,
            katedra: 'Katedra za razvoj informacisjkih sustava',
            profesors: [listProfesors[3], listProfesors[4], listProfesors[5]],
            years: [ 2023, 2024],
        },
        {
            id: 3,
            title: 'Razvoj windows aplikacija',
            code: '453423',
            major: 'Informacijski i poslovni sustavi 1.2 (IPS)',
            semester: 4,
            ects: 4,
            katedra: 'Katedra za razvoj informacisjkih sustava',
            profesors: [listProfesors[6], listProfesors[7], listProfesors[8], listProfesors[9],],
            years: [2021, 2023, 2024],
        },
        {
            id: 4,
            title: 'Analiza i razvoj računalnih programa',
            code: '345678',
            major: 'Informacijski i poslovni sustavi 1.2 (IPS)',
            semester: 4,
            ects: 4,
            katedra: 'Katedra za razvoj informacisjkih sustava',
            profesors: [listProfesors[6], listProfesors[7], listProfesors[9], listProfesors[10],],
            years: [2020, 2021,],
        },
    ];
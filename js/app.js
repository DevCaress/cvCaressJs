const info = {
    skills: [
        { txt: 'Front-end', percent: 90 },
        { txt: 'Back-end', percent: 65 },
        { txt: 'Mobile', percent: 50 },
        { txt: 'UX/UI', percent: 70 },
        { txt: 'Diseño', percent: 70 },
        { txt: 'marketing', percent: 70 }
    ],
    menu: [
        { id: 'profile', txt: 'Perfil', icon: 'assets/sec1.png' },
        { id: 'exp', txt: 'Experiencia', icon: 'assets/sec1.png' },
        { id: 'tech', txt: 'Tecnologías', icon: 'assets/sec2.png' },
        { id: 'edu', txt: 'Educación', icon: 'assets/sec1.png' },
        { id: 'other', txt: 'Otros', icon: 'assets/sec1.png' },
        { id: 'cont', txt: 'Contacto', icon: 'assets/sec1.png' }
    ],
    exp: [
        { title: 'Experiencia', txt: 'info' },
    ],
    tech: [
        { title: 'Tecnologías', txt: 'info' },
        {
            txt: 'HTML 5',
            skills: [
                'HTML 5',
                'Estandares W3C',
                'SEO'
            ]
        },
        {
            txt: 'CSS 3',
            skills: [
                'CSS 3',
                'BEM',
                'SASS, Stylus',
                'Bootstrap',
                'Tailwind',
                'Foundation',
                'Materialize',
            ]
        },
        {
            txt: 'Javascript',
            skills: [
                'Vue',
                'VUEX',
                'Vue Router',
                'VUE 3',
            ]
        },
        {
            txt: 'Javascript',
            skills: [
                'React',
                'Redux',
                'Router',
                'Material UI',
            ]
        },
        {
            txt: 'Javascript',
            skills: [
                'DevOps',
                'Git',
                'Github, Bitbucket, Gitlab',
                'Amazon (S3, EC2)',
                'Docker',
                'Shell Scripting',
                'Linux',
                'CI/CD',
                'Jira',
                'Jenkins',
                'Bamboo',
            ]
        },
        {
            txt: 'Javascript',
            skills: [
                'UX / UI',
                'Research',
                'Suite Adobe',
                'Sketch',
                'Zepellin',
                'Figma',
            ]
        },
        {
            txt: 'Javascript',
            skills: [
                'Bases de datos',
                'Sql Y NoSql',
                'MySql',
                'MongoDb',
                'MariaDb',
            ]
        },
        {
            txt: 'Javascript',
            skills: [
                'Back-end',
                'PHP (Laravel)',
                'Python (Django)',
                'Express',
            ]
        },
        {
            txt: 'Javascript',
            skills: [
                'Seguridad web',
                'Auditorías',
                'Pentesting',
            ]
        },
    ],
    edu: [
        { title: 'Educación', txt: 'info' },
        { title: '2016 - 2018 (Trunca)', uni: ' UNAM - FES Áragon', txt: 'Ingeniería en computación' },
        { title: '2017 - 2019 (Trunca)', uni: 'UNADM', txt: 'Mercadotecnia internacional' },
    ],
    other: [
        { title: 'Participación en Eventos', txt: 'info' },
        { date: 'Diciembre 2021', title: 'MENTOR - DATATÓN', txt: 'Datatón Anticorrupción 2021 Mentor en UX/UI y Front-end' },
        { date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end' },
        { date: 'Octubre 2021', title: 'SPEAKER <br> CYBERSEC ON BITS', txt: 'Ponencia: “Cross-Site Scripting” Panel de preguntas' },
        { date: 'Julio 2021', title: 'SPEAKER - TALENT LAND', txt: 'Primer ponencia: “Unboxing del mundo laboral” <br> Segunda ponencia: “Áreas del desarrollo de software y como escoger una”' },
        { date: 'Febrero 2021', title: 'SPEAKER - C#MFECO', txt: '“Introducción a Svelte”' },
        { date: 'Noviembre 2020', title: 'SPEAKER - UNIVERSIDAD DE LONDRES', txt: '“Creando un modelo de inteligencia artificial”' },
        { date: 'Febrero 2019', title: 'PARTICIPANTE - SENADO', txt: '“La tecnología para la transparencia y el combate a la corrupción”' },
        { date: 'Junio 2018', title: 'SPEAKER - UNAM', txt: '“El juego de la vida”' },
    ],
    contact: {
        contact: [
            { txt: 'Ciudad de México', icon: 'assets/sec1.png' },
            { txt: '+52 56 2026 4985', icon: 'assets/sec1.png' },
            { txt: '+52 56 2026 4985', icon: 'assets/sec1.png' },
            { txt: 'devcaress@gmail.com', icon: 'assets/sec1.png' },
        ],
    }

}

const clearDom = () => document.getElementsByTagName('main')[0].innerHTML = '';

const createTitle = (title) => {
    const element = document.createElement('div');
    element.innerHTML = `
    <h2>${title} </h2> 
    `;

    return element;
}

const createSkill = (txt, percent) => {
    const element = document.createElement('div');
    element.innerHTML = `
    <p>${txt} </p> 
    <div class="outProgress"><div class="inProgress" style="width:${percent}%"></div></div>
    `;

    return element;
}

const createMenu = (txt, icon, id) => {
    const element = document.createElement('div');
    element.classList.add('btnMenu');
    element.id = id;
    element.addEventListener('click', renderSection)
    element.innerHTML = `
    <img src="${icon}">
    <p>${txt} </p> 
    `;

    return element;
}

const createProfile = () => {
    const element = document.createElement('div');
    element.innerHTML = `
        <img src="assets/caress.jpg">
        <h1> Daniel Enriquez </h1>
        <h2> Web-Developer </h2>
    `;

    return element;
}

const createTechs = (skills) => {
    console.log(skills);
    const container = document.createElement('div');
    container.classList.add('techItem');
    for (const [index, value] of skills.entries()) {
        const element = document.createElement('div');
        element.innerHTML = value;
        !index && element.classList.add('titleTech');
        container.appendChild(element);
    }
    return container;
}

const createEdu = (title, txt, uni) => {
    const element = document.createElement('div');
    element.classList.add('eduItem')
    element.innerHTML = `
    <p>${title}</p> 
    <h2>${uni}</h2>
    <p>${txt}</p>
    `;

    return element;
}

const createIconText = (txt, icon) => {
    const element = document.createElement('a');
    element.classList.add('btnContact');
    /* element.id = id; */
    element.addEventListener('click', renderSection)
    element.innerHTML = `
    <img src="${icon}">
    <p>${txt} </p> 
    `;

    return element;
}

const createOther = (date, title, txt) => {
    const element = document.createElement('div');
    element.classList.add('otherItem');
    /* element.id = id; */
    element.addEventListener('click', renderSection)
    element.innerHTML = `
    <p> ${date} </p>
    <h2> ${title} </h2>
    <p>${txt} </p> 
    `;

    return element;
}

const appendElement = (element, container) => {

    container.appendChild(element);
}

const renderElement = (tag, container) => {
    const element = document.createElement(tag);
    container.appendChild(element);
}



const renderSection = (event) => {

    const mainContainer = document.getElementsByTagName('body')[0];

    clearDom();
    /* console.log(event.target); */

    switch (event.target.id) {
        case 'profile':
            renderHome();
            break;
        case 'cont':
            renderElement('section', document.getElementsByTagName('main')[0]);
            for (const iterator of info.contact.contact) {
                if (iterator.txt == 'info') {
                    appendElement(createTitle(iterator.title), document.getElementsByTagName('section')[0]);
                } else {
                    appendElement(createIconText(iterator.txt, iterator.icon), document.getElementsByTagName('section')[0]);
                }
            }
            break;
        case 'exp':
            renderElement('section', document.getElementsByTagName('main')[0]);
            for (const iterator of info.exp) {
                if (iterator.txt == 'info') {
                    appendElement(createTitle(iterator.title), document.getElementsByTagName('section')[0]);
                } else {
                    appendElement(createOther(iterator.date, iterator.title, iterator.txt), document.getElementsByTagName('section')[0]);
                }
            }
            break;
        case 'tech':
            renderElement('section', document.getElementsByTagName('main')[0]);
            for (const iterator of info.tech) {
                if (iterator.txt == 'info') {
                    appendElement(createTitle(iterator.title), document.getElementsByTagName('section')[0]);
                } else {
                    appendElement(createTechs(iterator.skills), document.getElementsByTagName('section')[0]);
                }
            }
            break;
        case 'edu':
            renderElement('section', document.getElementsByTagName('main')[0]);
            for (const iterator of info.edu) {
                if (iterator.txt == 'info') {
                    appendElement(createTitle(iterator.title), document.getElementsByTagName('section')[0]);
                } else {
                    appendElement(createEdu(iterator.title, iterator.txt, iterator.txt, iterator.uni), document.getElementsByTagName('section')[0]);
                }
            }
            break;

        case 'other':
            renderElement('section', document.getElementsByTagName('main')[0]);
            for (const iterator of info.other) {
                if (iterator.txt == 'info') {
                    appendElement(createTitle(iterator.title), document.getElementsByTagName('section')[0]);
                } else {
                    appendElement(createOther(iterator.date, iterator.title, iterator.txt), document.getElementsByTagName('section')[0]);
                }
            }

        default:
            break;
    }


}

const renderHome = () => {
    renderElement('section', document.getElementsByTagName('main')[0]);
    renderElement('section', document.getElementsByTagName('main')[0]);
    appendElement(createProfile(), document.getElementsByTagName('section')[0]);
    for (const iterator of info.skills) {
        appendElement(createSkill(iterator.txt, iterator.percent), document.getElementsByTagName('section')[1]);
        /* console.log(iterator.txt); */
    }
}


const initApp = () => {

    const mainContainer = document.getElementsByTagName('body')[0];
    renderElement('main', mainContainer);
    renderHome();

    renderElement('nav', mainContainer);
    for (const iterator of info.menu) {
        appendElement(createMenu(iterator.txt, iterator.icon, iterator.id), document.getElementsByTagName('nav')[0]);
        /* console.log(iterator.txt); */
    }
}

initApp();
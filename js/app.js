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
    other:[
        {date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end'},
        {date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end'},
        {date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end'},
        {date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end'},
        {date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end'},
        {date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end'},
        {date: 'Octubre 2021', title: 'MENTOR - BBVA', txt: 'Hackathon BBVA 2021 Mentor en UX/UI y Front-end'},
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

const createOther= (date, title, txt) => {
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
                appendElement(createIconText(iterator.txt, iterator.icon), document.getElementsByTagName('section')[0]);
            }
            break;

        case 'other':
            renderElement('section', document.getElementsByTagName('main')[0]);
            for (const iterator of info.other) {
                appendElement(createOther(iterator.date, iterator.title, iterator.txt), document.getElementsByTagName('section')[0]);
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
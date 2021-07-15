window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.logo-and-nav-container');

    hamburger.addEventListener('click', function() {
        if (document.querySelector('.ham-nav')) {
            document.querySelector('.ham-nav').remove();
        } else {
            const hamNav = document.createElement('div');
            console.log(hamNav);
            hamNav.className = 'ham-nav';
            header.appendChild(hamNav);
            const navList = document.createElement('div');
            const navListLineFirst = document.createElement('a');
            navListLineFirst.innerText = 'Produkty a služby';
            navListLineFirst.setAttribute('href', '/optika-volyne/sluzby/');
            const navListLineSecond = document.createElement('a');
            navListLineSecond.innerText = 'Reference';
            navListLineSecond.setAttribute('href', '/optika-volyne/reference/');
            const navListLineThird = document.createElement('a');
            navListLineThird.innerText = 'Kontakt';
            navListLineThird.setAttribute('href', '/optika-volyne/kontakt/')
            navList.appendChild(navListLineFirst);
            navList.appendChild(navListLineSecond);
            navList.appendChild(navListLineThird);
            hamNav.appendChild(navList);
        };
        hamburger.classList.toggle("change");
    });
});
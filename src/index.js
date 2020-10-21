import loadHome from './home-load.js';
import tabLoad from './tab-load.js';
import loadContact from './contact-load.js';
import loadMenu from './menu-load.js';

loadHome();
tabLoad();

//switching tabs
(() => {
    const content = document.getElementById('content');
    const tabs = document.querySelectorAll('.tab');
    tabs[0].classList.add('tab-active');

    tabs.forEach(tab => tab.addEventListener('click', (e) => {
        content.innerHTML = '';
        tabs.forEach(tab => tab.classList.remove('tab-active'));
        e.target.classList.add('tab-active');
        if (e.target.innerHTML === 'Menu') loadMenu();
        else if (e.target.innerHTML === 'Contact') loadContact();
        else if (e.target.innerHTML === 'Home') loadHome();
    }));
})();
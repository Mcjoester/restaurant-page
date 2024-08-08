import './style.css';
import homeComponent from './home';
import menuComponent from './menu';
import contactComponent from './contact';

function init() {
    const contentDiv = document.getElementById('content');

    function loadPage(page) {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(page());
    }

    document.getElementById('home-tab').addEventListener('click', () => loadPage(homeComponent));
    document.getElementById('menu-tab').addEventListener('click', () => loadPage(menuComponent));
    document.getElementById('contact-tab').addEventListener('click', () => loadPage(contactComponent))
    loadPage(homeComponent);
}

document.addEventListener('DOMContentLoaded', init);
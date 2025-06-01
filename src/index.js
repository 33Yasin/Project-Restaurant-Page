import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js';
import './style.css';

// Sayfa yüklendiğinde ana sayfayı göster
document.addEventListener('DOMContentLoaded', () => {
    createHomePage();
});

// İçeriği temizle
function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

// Tab butonları için event listener'lar
document.addEventListener('click', (e) => {
    if (e.target.id === 'home-btn') {
        clearContent();
        createHomePage();
    } else if (e.target.id === 'menu-btn') {
        clearContent();
        createMenuPage();
    } else if (e.target.id === 'contact-btn') {
        clearContent();
        createContactPage();
    }
});
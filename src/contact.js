function createContactPage() {
    const content = document.getElementById('content');
    
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-page');
    
    const title = document.createElement('h1');
    title.textContent = 'İletişim';
    
    const info = document.createElement('div');
    info.classList.add('contact-info');
    
    const address = document.createElement('p');
    address.innerHTML = '<strong>Adres:</strong> Merkez Mahallesi, Lezzet Sokak No:15, İstanbul';
    
    const phone = document.createElement('p');
    phone.innerHTML = '<strong>Telefon:</strong> (0212) 555-0123';
    
    const email = document.createElement('p');
    email.innerHTML = '<strong>E-posta:</strong> info@lezzetduragi.com';
    
    const hours = document.createElement('p');
    hours.innerHTML = '<strong>Çalışma Saatleri:</strong> Pazartesi-Pazar 11:00-23:00';
    
    info.appendChild(address);
    info.appendChild(phone);
    info.appendChild(email);
    info.appendChild(hours);
    
    contactDiv.appendChild(title);
    contactDiv.appendChild(info);
    content.appendChild(contactDiv);
}

export { createContactPage };
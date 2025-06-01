function createHomePage() {
    const content = document.getElementById('content');
    
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-page');
    
    const title = document.createElement('h1');
    title.textContent = 'Lezzet Durağı Restoranına Hoş Geldiniz';
    
    const image = document.createElement('img');
    image.src = 'https://picsum.photos/200/300';
    image.alt = 'Restoran görseli';
    
    const description = document.createElement('p');
    description.textContent = '25 yıldır hizmet veren restoranımızda, geleneksel lezzetleri modern sunumla buluşturuyoruz. Taze malzemeler ve usta ellerle hazırlanan yemeklerimiz ile damaklarınızda unutulmaz tatlar bırakıyoruz.';
    
    homeDiv.appendChild(title);
    homeDiv.appendChild(image);
    homeDiv.appendChild(description);
    
    content.appendChild(homeDiv);
}

export { createHomePage };
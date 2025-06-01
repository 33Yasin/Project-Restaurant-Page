function createMenuPage() {
    const content = document.getElementById('content');
    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page');
    
    const title = document.createElement('h1');
    title.textContent = 'Menümüz';
    
    const menuList = document.createElement('div');
    menuList.classList.add('menu-items');
    
    const dishes = [
        { name: 'Adana Kebap', price: '85 TL', description: 'Özel baharatlarla marine edilmiş dana eti' },
        { name: 'İskender', price: '90 TL', description: 'Tereyağlı pidede döner eti' },
        { name: 'Karışık Izgara', price: '120 TL', description: 'Et çeşitleri ve köfte' },
        { name: 'Lahmacun', price: '25 TL', description: 'İnce hamurda kıyma ve sebze' }
    ];
    
    dishes.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('menu-item');
        
        const dishName = document.createElement('h3');
        dishName.textContent = dish.name;
        
        const dishPrice = document.createElement('span');
        dishPrice.classList.add('price');
        dishPrice.textContent = dish.price;
        
        const dishDesc = document.createElement('p');
        dishDesc.textContent = dish.description;
        
        dishDiv.appendChild(dishName);
        dishDiv.appendChild(dishPrice);
        dishDiv.appendChild(dishDesc);
        
        menuList.appendChild(dishDiv);
    });
    
    menuDiv.appendChild(title);
    menuDiv.appendChild(menuList);
    content.appendChild(menuDiv);
}

export { createMenuPage };
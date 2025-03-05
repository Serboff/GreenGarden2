const images = [
    'img/Вероника.jpg',
    'img/Виола ампельная.jpg',
    'img/Астильба.jpg',
    'img/Петхоа.jpg',
    'img/Санвиталия.jpg',
    'img/Эуфорбия.jpg',
    'img/Лобелия.jpg',
    'img/Гацания.jpg',
    'img/Калибрахоа.jpg',
    'img/Вербена.jpg',
    'img/Бархатцы.jpg',
    'img/Бальзамин.jpg',
    'img/Бакопа.jpg',
    'img/Алиссум.jpg',
    'img/Остеоспермум.jpg',
    'img/Петуния.jpg',
    'img/Сальвия.jpg',
    'img/Колеус.jpg',
];

function createImageElement(src) {
    const imageContainer = document.getElementById('image-container');
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Цветок';

    const fileName = src.split('/').pop();
    const titleText = fileName.split('.')[0];

    const title = document.createElement('h3');
    title.textContent = titleText;

    card.appendChild(img);
    card.appendChild(title);
    imageContainer.appendChild(card);
}

images.slice(0, 6).forEach(createImageElement);

function showAllImages() {
    images.slice(6).forEach(createImageElement);
    document.getElementById('show-all-button').remove();
}

document.getElementById('home').addEventListener('click', function () {
    smoothScrollTo(document.getElementById('home-section'));
});

document.getElementById('catalog').addEventListener('click', function () {
    smoothScrollTo(document.getElementById('catalog-section'));
});

document.getElementById('consultation').addEventListener('click', function () {
    smoothScrollTo(document.getElementById('consultation-section'));
});

document.getElementById('location').addEventListener('click', function () {
    smoothScrollTo(document.getElementById('location-section'));
});

document.getElementById('contact').addEventListener('click', function () {
    smoothScrollTo(document.getElementById('contact-section'));
});

function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

function openModal() {
    document.getElementById('myModal').classList.add('show-modal', 'fade-in');
    document.getElementById('overlay').classList.add('show-modal', 'fade-in');
}

function closeModal() {
    document.getElementById('myModal').classList.remove('show-modal', 'fade-in');
    
    document.getElementById('overlay').classList.remove('show-modal', 'fade-in');
}